import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";
import { SoundButton } from "../component/sound-button";
import { NoteButton } from "../component/note-button";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { idfy } from "../utils/idfy";

const questionColor = (color) =>
     classNames(`bg-${color}`, "shadow-question bg m-2 p-2 rounded-xl");

const context = require.context("../cms/pages", true, /\.json$/, "lazy");
console.log(context.keys());

export const Page = () => {
     const { slug } = useParams();
     const [pageData, setPageData] = useState();
     const [instrument, setInstrument]= useState();

useEffect(()=>{

     const instruments =
          pageData?.title === "ritim" ? "woodblock" : "electric_grand_piano";

          setInstrument(instruments)
},[setInstrument, pageData]);
     const { acRef, clavinetRef } = useMidiData(instrument, "FluidR3_GM");
     const handleQuestionClick = (notes) => () => {
          notes.map((note) => {
               if (clavinetRef?.play) {
                    clavinetRef?.play(note.note);
               }
               return console.log(note.note);
          });
     };
     const meloditekrari = (notes) => {
          if (clavinetRef) {
          notes.map((note) => {
               clavinetRef.schedule(acRef, [
                    {
                         time: note.time,
                         note: note.midi,
                         duration: note.duration,
                    },
               ]);
               return console.log(note.time, note.midi, note.duration);
          });}
     };

     const stopMusic = () => {
          if (clavinetRef?.stop) {
               clavinetRef?.stop();
          }
     };
     useEffect(() => {
          const key = context
               .keys()
               .find((key) => key.includes(`${slug}.json`));
          if (key) {
               context(key)
                    .then(idfy)
                    .then((result) => {
                         setPageData(result);
                    });
          }
     }, [slug, setPageData]);


     console.log(instrument)

     return (
          <Container>
               {pageData?.blocks[0].questions?.map((question) =>
                    pageData?.description === "two" ||
                    pageData?.description === "three" ||
                    pageData?.description === "four" ? (
                         <div
                              className={questionColor(question.color)}
                              key={question.id}>
                              <div>
                                   <SoundButton
                                        color={question.color}
                                        onClick={handleQuestionClick(
                                             question.notes
                                        )}>
                                        {question.title.toLocaleUpperCase()}
                                   </SoundButton>
                              </div>

                              <div className='flex justify-center items-center'>
                                   {question.notes.map((note) => (
                                        <NoteButton
                                             key={note.id}
                                             onClick={handleQuestionClick([
                                                  note,
                                             ])}
                                        />
                                   ))}
                              </div>
                         </div>
                    ) : pageData?.description === "melody" ||
                      pageData?.description === "ritim" ? (
                         <div
                              className={questionColor(question.color)}
                              key={question.id}>
                              <div>
                                   <SoundButton
                                        color={question.color}
                                        onClick={()=>meloditekrari(
                                             JSON.parse(question.melodynote)
                                        )}>
                                        {question.title.toLocaleUpperCase()}
                                   </SoundButton>
                                   <SoundButton
                                        color={question.color}
                                        onClick={stopMusic}>
                                        Stop
                                   </SoundButton>
                              </div>
                         </div>
                    ) : (
                         <div
                              className={questionColor(question.color)}
                              key={question.id}>
                              <div>
                                   <SoundButton
                                        color={question.color}
                                        onClick={handleQuestionClick(
                                             question.notes
                                        )}>
                                        {question.title.toLocaleUpperCase()}
                                   </SoundButton>
                              </div>
                         </div>
                    )
               )}
          </Container>
     );
};

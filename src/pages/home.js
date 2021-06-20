import { useMidiIn } from "../component/useData";
import { useMidiData } from "../component/use-midi-data";
import { Layout } from "../component/layout";
import { Container } from "../component/container";
import { SoundButton } from "../component/sound-button";
import { NoteButton } from "../component/note-button";
import sounds from "../cms/sounds.json";

const questions = sounds.questions;

export const Home = () => {
     const { midiNote } = useMidiIn();
     console.log(midiNote);
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );
     console.log(midiNote);
     const handleQuestionClick = (notes) => () => {
          notes.map((note) => {
               if (clavinetRef.current?.play) {
                    clavinetRef.current?.play(note.note);
               }
          });
     };

     const deneme = () => {
          clavinetRef.current.play(80, acRef.current, {
               gain: 5,
          });
     };
     const meloditekrari = () => {
          clavinetRef.current.schedule(acRef.current, [
               { time: 0.1, note: 55 },
               { time: 0.2, note: 69 },
               { time: 0.3, note: 72 },
               { time: 0.9, note: 74 },
               { time: 0.5, note: 78 },
               { time: 0, note: 72 },
          ]);
     };

     return (
          <Container>
               <div className=''>
                    <div className=''>
                         {questions.map((question) => (
                              <div
                                   className={`bg-${question.color}  shadow-2xl bg m-2 p-2 rounded-xl`}
                                   key={question.id}>
                                   <div>
                                        <SoundButton
                                             onClick={deneme}></SoundButton>
                                        <SoundButton
                                             onClick={
                                                  meloditekrari
                                             }></SoundButton>
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
                                                  key={note.note}
                                                  onClick={handleQuestionClick([
                                                       note,
                                                  ])}
                                             />
                                        ))}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </Container>
     );
};

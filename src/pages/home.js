import { useMidiIn } from "../component/useData";
import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";
import { SoundButton } from "../component/sound-button";
import { NoteButton } from "../component/note-button";
import sounds from "../cms/sounds.json";
import classNames from "classnames";

const questions = sounds.questions;
const questionColor = (color) =>
     classNames(color, "shadow-2xl bg m-2 p-2 rounded-xl");

export const Home = () => {
     const { midiNote } = useMidiIn();
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );
     const handleQuestionClick = (notes) => () => {
          notes.map((note) => {
               if (clavinetRef.current?.play) {
                    clavinetRef.current?.play(note.note);
               }
          });
     };

     return (
          <Container>
               {questions.map((question) => (
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
                                        key={note.note}
                                        onClick={handleQuestionClick([note])}
                                   />
                              ))}
                         </div>
                    </div>
               ))}
          </Container>
     );
};

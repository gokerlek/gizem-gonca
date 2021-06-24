import { useMidiIn } from "../component/useData";
import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";
import { SoundButton } from "../component/sound-button";
import { NoteButton } from "../component/note-button";
import sounds from "../cms/sounds.json";

const questions = sounds.questions;

export const Three = () => {
     const { midiNote } = useMidiIn();
     console.log(midiNote);
     const { clavinetRef } = useMidiData("acoustic_grand_piano", "FluidR3_GM");
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
                         className={`bg-${question.color}  shadow-2xl bg m-2 p-2 rounded-xl`}
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
                                        onClick={handleQuestionClick([note])}
                                   />
                              ))}
                         </div>
                    </div>
               ))}
          </Container>
     );
};

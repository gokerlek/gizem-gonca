import { SoundButton } from "./sound-button";
import { Howl } from "howler";
import sound from "../sound.json";

const questions = sound.questions;

export const Container = () => {
     return (
          <div className='min-w-screen h-screen  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 bg-white'>
               <div className='flex w-full'>
                    {questions.map((question) => (
                         <div className=' shadow-2xl m-2 p-2 rounded-xl'>
                              <div>
                                   <SoundButton
                                        onClick={() => {
                                             questions.map((question) =>
                                                  question.notes.map((note) =>
                                                       new Howl({
                                                            src: [
                                                                 `sounds/${note.note}.m4a`,
                                                            ],
                                                       }).play()
                                                  )
                                             );
                                        }}>
                                        {question.title}
                                   </SoundButton>
                              </div>
                              <div className='flex justify-center items-center'>
                                   {question.notes.map((note) => (
                                        <SoundButton
                                             onClick={() =>
                                                  new Howl({
                                                       src: [
                                                            `sounds/${note.note}.m4a`,
                                                       ],
                                                  }).play()
                                             }>
                                             {note.note}
                                        </SoundButton>
                                   ))}
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

import { SoundButton } from "./sound-button";
import { Howl } from "howler";
import sounds from "../cms/sounds.json";

const questions = sounds.questions;

export const Container = () => {
     return (
          <div className='min-w-screen h-screen  fixed  left-0 top-0 flex  inset-0 z-50 bg-white'>
               <div className='flex w-full justify-center items-center'>
                    {questions.map((question) => (
                         <div
                              className=' shadow-2xl m-2 p-2 rounded-xl'
                              key={question.id}>
                              <div key={question.id + 2}>
                                   <SoundButton
                                        onClick={() => {
                                             question.notes.map((note) =>
                                                  new Howl({
                                                       src: [
                                                            `sounds/${note.note}.m4a`,
                                                       ],
                                                  }).play()
                                             );
                                        }}>
                                        {question.title}
                                   </SoundButton>
                              </div>
                              <div
                                   className='flex justify-center items-center'
                                   key={question.id}>
                                   {question.notes.map((note) => (
                                        <SoundButton
                                             onClick={() =>
                                                  new Howl({
                                                       src: [
                                                            `sounds/${note.note}.m4a`,
                                                       ],
                                                  }).play()
                                             }
                                        />
                                   ))}
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

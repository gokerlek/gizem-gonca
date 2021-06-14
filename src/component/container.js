import { SoundButton } from "./sound-button";
import { NoteButton } from "./note-button";
import { Howl } from "howler";
import sounds from "../cms/sounds.json";
import { useState, useEffect } from "react";
import { useMidiIn } from "./useData";

const questions = sounds.questions;
export const Container = () => {
     const { velocity, midiNote, midiKeyState } = useMidiIn();

     console.log(midiNote);

     return (
          <div className='min-w-screen h-screen  fixed  left-0 top-0 flex inset-0 z-50 bg-white '>
               <div className='flex w-full justify-center items-center'>
                    {questions.map((question) => (
                         <div
                              className={`bg-${question.color}  shadow-2xl bg m-2 p-2 rounded-xl`}
                              key={question.id}>
                              <div key={question.id + 2}>
                                   <SoundButton
                                        color={question.color}
                                        onClick={() => {
                                             question.notes.map((note) =>
                                                  new Howl({
                                                       src: [
                                                            `sounds/${note.note}.m4a`,
                                                       ],
                                                       volume: 0.5,
                                                  }).play()
                                             );
                                        }}>
                                        {question.title.toLocaleUpperCase()}
                                   </SoundButton>
                              </div>
                              <div
                                   className='flex justify-center items-center'
                                   key={question.id}>
                                   {question.notes.map((note) => (
                                        <NoteButton
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

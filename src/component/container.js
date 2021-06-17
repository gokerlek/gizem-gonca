import { SoundButton } from "./sound-button";
import { NoteButton } from "./note-button";
import sounds from "../cms/sounds.json";
import { useMidiIn } from "./useData";
import * as Soundfont from "soundfont-player";
import { useRef, useEffect } from "react";

const questions = sounds.questions;

export const Container = () => {
     const clavinetRef = useRef();
     const { velocity, midiNote, midiKeyState } = useMidiIn();

     console.log(midiNote);
     const handleQuestionClick = (notes) => () => {
          notes.map((note) => {
               if (clavinetRef.current?.play) {
                    clavinetRef.current?.play(note.note);
               }
          });
     };

     const meloditekrari = () => {
          clavinetRef.current.schedule(0, [
               { time: 0, note: 71 },
               { time: 1, note: 69 },
               { time: 2, note: 72 },
          ]);
     };
     useEffect(() => {
          const ac = new AudioContext();

          console.log(Soundfont.nameToUrl("celesta", "FatBoy", "ogg"));

          Soundfont.instrument(ac, "acoustic_grand_piano", {
               soundfont: "MusyngKite",
          }).then(function (clavinet) {
               clavinetRef.current = clavinet;
               window.navigator.requestMIDIAccess().then(function (midiAccess) {
                    midiAccess.inputs.forEach(function (midiInput) {
                         clavinet.listenToMidi(midiInput);
                    });
               });
          });

          console.log(Soundfont.nameToUrl("marimba", "Tabla", "ogg"));
     }, []);

     return (
          <div className='min-w-screen h-screen  fixed  left-0 top-0 flex inset-0 z-50 bg-white '>
               <div className='flex w-full justify-center items-center'>
                    {questions.map((question) => (
                         <div
                              className={`bg-${question.color}  shadow-2xl bg m-2 p-2 rounded-xl`}
                              key={question.id}>
                              <div>
                                   <SoundButton
                                        onClick={meloditekrari}></SoundButton>
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
     );
};

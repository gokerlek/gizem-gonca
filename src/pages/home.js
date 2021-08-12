import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import classNames from "classnames";
import "react-piano/dist/styles.css";
import { useState,memo } from "react";


export const Home = memo ( () => {
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );
     console.log(acRef, clavinetRef);

     const [toggle, setToggle] = useState(false);
     const toggler = () => setToggle(!toggle);
     console.log(toggle);
     const color = classNames(
               toggle ? `bg-kolay hover:bg-zor` : "bg-zor hover:bg-kolay",
               "absolute top-0 left-16 m-12 rounded-full min-w-32 p-5 text-center text-beyaz cursor-pointer"
          );

const firstNote = MidiNumbers.fromNote("a3");
const lastNote = MidiNumbers.fromNote("e5");
const keyboardShortcuts = KeyboardShortcuts.create({
     firstNote: firstNote,
     lastNote: lastNote,
     keyboardConfig: KeyboardShortcuts.HOME_ROW,
});
     return (
          <>
               <Container>
                    <div className='min-h-screen min-w-full flex items-center static'>
                         <div onClick={toggler} className={color}></div>

                         <div className='flex min-w-full min-h-full items-center'>
                              <Piano
                                   noteRange={{
                                        first: firstNote,
                                        last: lastNote,
                                   }}
                                   playNote={(midiNumber) => {
                                        if (clavinetRef?.play) {
                                             clavinetRef?.play(
                                                  midiNumber,
                                                  acRef
                                             );
                                        }
                                   }}
                                   stopNote={() => {
                                        if (clavinetRef?.stop) {
                                             clavinetRef?.stop();
                                        }
                                   }}
                                   keyboardShortcuts={keyboardShortcuts}
                              />
                         </div>
                    </div>
               </Container>
               <style jsx>
                    {`
                         [data-testid="container"] {
                              display: flex;
                              justify-content: center;
                         }
                         .ReactPiano__Keyboard {
                              position: relative;
                              display: flex;
                              max-width: 1500px;
                              min-height: 500px;
                         }

                         .ReactPiano__Key--accidental {
                              background: #009fb7;
                              border: 1px solid #009fb7;
                              height: 66%;
                              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                         }

                         .ReactPiano__Key--natural {
                              background: #ffffff;
                              border: 1px solid #e2e2e2;
                              min-height: 500px;
                              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                         }

                         .ReactPiano__NoteLabel--accidental,
                         .ReactPiano__NoteLabel--natural,
                         .ReactPiano__NoteLabel--natural.ReactPiano__NoteLabel--active {
                              color: transparent;
                         }

                         @media screen and (max-width: 1550px) {
                              .ReactPiano__Keyboard {
                                   max-width: 1200px;
                                   min-height: 400px;
                              }

                              .ReactPiano__Key--natural {
                                   min-height: 400px;
                              }
                         }
                         @media screen and (max-width: 1300px) {
                              .ReactPiano__Keyboard {
                                   max-width: 1000px;
                                   min-height: 330px;
                              }

                              .ReactPiano__Key--natural {
                                   min-height: 330px;
                              }
                         }
                         @media screen and (max-width: 1100px) {
                              .ReactPiano__Keyboard {
                                   max-width: 750px;
                                   min-height: 240px;
                              }

                              .ReactPiano__Key--natural {
                                   min-height: 240px;
                              }
                         }
                         @media screen and (max-width: 850px) {
                              .ReactPiano__Keyboard {
                                   max-width: 540px;
                                   min-height: 180px;
                              }

                              .ReactPiano__Key--natural {
                                   min-height: 180px;
                              }
                         }
                         @media screen and (max-width: 640px) {
                              .ReactPiano__Keyboard {
                                   max-width: 320px;
                                   min-height: 108px;
                              }

                              .ReactPiano__Key--natural {
                                   min-height: 108px;
                              }
                         }
                    `}
               </style>
               {toggle ? (
                    <style jsx>
                         {`
                              .ReactPiano__Key--active.ReactPiano__Key--accidental {
                                   border: 1px solid #3ac8da;
                                   border-top: 1px solid #3ac8da;
                                   height: 65%;
                              }
                              .ReactPiano__Key--active {
                                   background: #3ac8da;
                              }

                              .ReactPiano__Key--active.ReactPiano__Key--natural {
                                   border: 1px solid #3ac8da;
                                   min-height: 498px;
                              }
                              @media screen and (max-width: 1550px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 398px;
                                   }
                              }
                              @media screen and (max-width: 1300px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 328px;
                                   }
                              }
                              @media screen and (max-width: 1100px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 238px;
                                   }
                              }
                              @media screen and (max-width: 850px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 178px;
                                   }
                              }
                              @media screen and (max-width: 640px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 106px;
                                   }
                              }
                         `}
                    </style>
               ) : (
                    <style jsx>
                         {`
                              .ReactPiano__Key--active.ReactPiano__Key--accidental {
                                   border: 1px solid transparent;
                                   border-top: 1px solid transparent;
                                   height: 66%;
                              }
                              .ReactPiano__Key--active {
                                   background: #red;
                              }

                              .ReactPiano__Key--active.ReactPiano__Key--natural {
                                   border: 1px solid #e2e2e2;
                                   min-height: 500px;
                                   background: #fff;
                              }
                              .ReactPiano__NoteLabel--accidental,
                              .ReactPiano__NoteLabel--natural,
                              .ReactPiano__NoteLabel--natural.ReactPiano__NoteLabel--active {
                                   color: transparent;
                              }

                              @media screen and (max-width: 1550px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 400px;
                                   }
                              }
                              @media screen and (max-width: 1300px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 330px;
                                   }
                              }
                              @media screen and (max-width: 1100px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 240px;
                                   }
                              }
                              @media screen and (max-width: 850px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 180px;
                                   }
                              }
                              @media screen and (max-width: 640px) {
                                   .ReactPiano__Key--active.ReactPiano__Key--natural {
                                        min-height: 106px;
                                   }
                              }
                         `}
                    </style>
               )}
          </>
     );
});

import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "../style.css";
import { useState, useEffect } from "react";
import { Dimension } from "react";

export const Home = () => {
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );
     console.log(acRef, clavinetRef);

     const [widthData, setWidthData] = useState();

     useEffect(() => {
          setWidthData(window?.innerWidth.valueOf());
     }, [setWidthData]);

     const firstNote = MidiNumbers.fromNote("c3");
     const lastNote = MidiNumbers.fromNote("f5");
     const keyboardShortcuts = KeyboardShortcuts.create({
          firstNote: firstNote,
          lastNote: lastNote,
          keyboardConfig: KeyboardShortcuts.HOME_ROW,
     });

     return (
          <>
               <Container>
                    <Piano
                         noteRange={{ first: firstNote, last: lastNote }}
                         playNote={(midiNumber) => {
                              if (clavinetRef.current?.play) {
                                   clavinetRef.current?.play(
                                        midiNumber,
                                        acRef.current
                                   );
                              }
                         }}
                         stopNote={(midiNumber) => {
                              if (clavinetRef.current?.stop) {
                                   clavinetRef.current?.stop(
                                        midiNumber,
                                        acRef.current
                                   );
                              }
                         }}
                         keyboardShortcuts={keyboardShortcuts}
                         width={widthData * 0.8}
                    />
               </Container>
          </>
     );
};

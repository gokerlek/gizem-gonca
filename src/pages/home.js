import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "../style.css";
import { SizeMe } from "react-sizeme";

export const Home = () => {
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );
     console.log(acRef, clavinetRef);

     const firstNote = MidiNumbers.fromNote("a3");
     const lastNote = MidiNumbers.fromNote("e5");
     const keyboardShortcuts = KeyboardShortcuts.create({
          firstNote: firstNote,
          lastNote: lastNote,
          keyboardConfig: KeyboardShortcuts.HOME_ROW,
     });

     return (
          <Container>
               <div className='min-h-screen min-w-full flex items-center'>
                    <div className='flex min-w-full min-h-full items-center'>
                         <SizeMe
                              monitorHeight
                              refreshRate={32}
                              render={({ size }) => (
                                   <Piano
                                        noteRange={{
                                             first: firstNote,
                                             last: lastNote,
                                        }}
                                        playNote={(midiNumber) => {
                                             if (clavinetRef.current?.play) {
                                                  clavinetRef.current?.play(
                                                       midiNumber,
                                                       acRef.current
                                                  );
                                             }
                                        }}
                                        stopNote={() => {
                                             if (clavinetRef.current?.stop) {
                                                  clavinetRef.current?.stop();
                                             }
                                        }}
                                        keyboardShortcuts={keyboardShortcuts}
                                        width={size.width}
                                   />
                              )}
                         />
                    </div>
               </div>
          </Container>
     );
};

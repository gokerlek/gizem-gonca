import { useRef, useEffect } from "react";
import * as Soundfont from "soundfont-player";

export const useMidiData = (instruments, soundfonts) => {
     const clavinetRef = useRef();
     const acRef = useRef();

     useEffect(() => {
          const ac = new AudioContext();
          acRef.current = ac.currentTime;

          Soundfont.instrument(ac, instruments, {
               soundfont: soundfonts,
          }).then(function (clavinet) {
               clavinetRef.current = clavinet;
               window.navigator.requestMIDIAccess().then(function (midiAccess) {
                    midiAccess.inputs.forEach(function (midiInput) {
                         clavinet.listenToMidi(midiInput);
                    });
               });
          });
     }, [instruments, soundfonts]);

     return { acRef, clavinetRef };
};

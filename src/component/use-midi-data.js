import { useRef, useState, useEffect } from "react";
import * as Soundfont from "soundfont-player";

export const useMidiData = (goker, soundfonts) => {
     const [midiData, setMidiData] = useState([]);

     const clavinetRef = useRef();
     const acRef = useRef();

     useEffect(() => {
          const ac = new AudioContext();
          acRef.current = ac.currentTime;

          Soundfont.instrument(ac, goker, {
               soundfont: soundfonts,
          }).then(function (clavinet) {
               clavinetRef.current = clavinet;
               window.navigator.requestMIDIAccess().then(function (midiAccess) {
                    midiAccess.inputs.forEach(function (midiInput) {
                         clavinet.listenToMidi(midiInput);
                    });
               });
          });
     }, []);

     return { acRef, clavinetRef };
};

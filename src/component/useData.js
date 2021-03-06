import { useState, useEffect } from "react";

const navigator = require("web-midi-api");
export const useMidiIn = () => {
     const [midiArray, setMidiArray] = useState([]);

     useEffect(() => {
          const onMIDISuccess = (midiAccess) => {
               const inputs = midiAccess.inputs;

               inputs.forEach((port) => {
                    port.onmidimessage = onMidiIn;
               });
          };

          const onMidiIn = (ev) => {
               console.log(ev);
               const arr = [];
               for (var i = 0; i < ev.data.length; i++) {
                    arr.push(
                         (ev.data[i] < 10 ? "0" : "") + ev.data[i].toString(10)
                    );
               }

               setMidiArray(arr);
          };

          navigator.requestMIDIAccess().then(onMIDISuccess);
     }, [setMidiArray]);

     const midiKeyState = midiArray[0];
     const midiNote = midiArray[1];
     const velocity = midiArray[2];

     return { midiKeyState, midiNote, velocity };
};

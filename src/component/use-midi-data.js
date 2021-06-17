import { useState, useEffect } from "react";

export const useMidiData = () => {
     const [midiData, setMidiData] = useState([]);

     useEffect(() => {
          var navigator = require("web-midi-api");
          var midi;
          var inputs;
          var outputs;

          function onMIDIFailure(msg) {
               console.log("Failed to get MIDI access - " + msg);
               process.exit(1);
          }

          function onMIDISuccess(midiAccess) {
               midi = midiAccess;
               inputs = midi.inputs;
               outputs = midi.outputs;
               setTimeout(testOutputs, 500);
          }

          function testOutputs() {
               console.log("Testing MIDI-Out ports...");
               outputs.forEach(function (port) {
                    /*console.log(
                         "id:",
                         port.id,
                         "manufacturer:",
                         port.manufacturer,
                         "name:",
                         port.name,
                         "version:",
                         port.version
                    );*/
                    port.open();
                    port.send([0x90, 60, 0x7f]);
               });
               setTimeout(stopOutputs, 1000);
          }

          function stopOutputs() {
               outputs.forEach(function (port) {
                    port.send([0x80, 60, 0]);
               });
               testInputs();
          }

          function onMidiIn(ev) {
               var arr = [];
               for (var i = 0; i < ev.data.length; i++) {
                    arr.push(
                         (ev.data[i] < 10 ? "0" : "") + ev.data[i].toString(10)
                    );
               }
               setMidiData(arr);
          }

          function testInputs() {
               console.log("Testing MIDI-In ports...");
               inputs.forEach(function (port) {
                    /*  console.log(
                         "id:",
                         port.id,
                         "manufacturer:",
                         port.manufacturer,
                         "name:",
                         port.name,
                         "version:",
                         port.version
                    );*/
                    port.onmidimessage = onMidiIn;
               });
          }

          navigator.requestMIDIAccess().then(onMIDISuccess);
     }, [setMidiData]);

     const midiDataKeyState = midiData[0];
     const midiDataNote = midiData[1];
     const dataVelocity = midiData[2];

     return { midiDataKeyState, midiDataNote, dataVelocity };
};

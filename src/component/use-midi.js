export const useMidi = () => {
     const navigator = require("web-midi-api");

     var midi;
     var inputs;
     var outputs;

     const onMIDISuccess = (midiAccess) => {
          midi = midiAccess;
          inputs = midi.inputs;
          outputs = midi.outputs;
          setTimeout(testOutputs, 500);
     };

     const testOutputs = () => {
          console.log("Testing MIDI-Out ports...");
          outputs.forEach((port) => {
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
     };

     const stopOutputs = () => {
          outputs.forEach((port) => {
               port.send([0x80, 60, 0]);
          });
          testInputs();
     };

     const onMidiIn = (ev) => {
          const arr = [];
          for (var i = 0; i < ev.data.length; i++) {
               arr.push((ev.data[i] < 10 ? "0" : "") + ev.data[i].toString(10));
          }
          console.log(arr[1]);
     };

     const testInputs = () => {
          inputs.forEach((port) => {
               port.onmidimessage = onMidiIn;
          });
     };

     navigator.requestMIDIAccess().then(onMIDISuccess);

     const midiState = onMidiIn;
     const midiNote = arr[1];
     const velocity = arr[2];

     return { midiNote, velocity, midiState };
};

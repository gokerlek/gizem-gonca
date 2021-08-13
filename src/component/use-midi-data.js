import { useEffect, useState } from "react";
import * as Soundfont from "soundfont-player";
import { cancelable } from "cancelable-promise";

const ac = new AudioContext();
export const useMidiData = (instruments, soundfonts) => {
     const [clavinet, setClavinet] = useState();

     useEffect(() => {
          let promise;
          if (instruments) {
               promise = cancelable(
                    Soundfont.instrument(ac, instruments, {
                         soundfont: soundfonts,
                    })
               ).then(function (clavinet) {
                    setClavinet(clavinet);
               });
          }
          return () => {
               promise?.cancel();
          };
     }, [instruments, soundfonts, setClavinet]);

     useEffect(() => {
          if (clavinet && window.navigator.requestMIDIAccess) {
               window?.navigator
                    ?.requestMIDIAccess()
                    .then(function (midiAccess) {
                         midiAccess.inputs.forEach(function (midiInput) {
                              clavinet.listenToMidi(midiInput);
                         });
                    });
          }
     }, [clavinet]);

     return { acRef: ac.currentTime, clavinetRef: clavinet };
};

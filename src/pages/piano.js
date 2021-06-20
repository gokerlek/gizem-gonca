import { useMidiIn } from "./useData";
import { useMidiData } from "./use-midi-data";

export const Piano = () => {
     const { midiNote } = useMidiIn();
     console.log(midiNote);
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );

     return;
};

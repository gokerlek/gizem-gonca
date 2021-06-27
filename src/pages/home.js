import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";
import { SoundButton } from "../component/sound-button";
import flat from "../flat.json";

const melodies = flat.notes;

console.log(melodies.map((note) => note.midi));

export const Home = () => {
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );

     const meloditekrari = () => {
          melodies.map((note) => {
               clavinetRef.current.schedule(acRef.current, [
                    {
                         time: note.time,
                         note: note.midi,
                         duration: note.duration,
                    },
               ]);
          });
     };

     return (
          <Container>
               <SoundButton onClick={meloditekrari} />
          </Container>
     );
};

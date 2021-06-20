import { useMidiIn } from "../component/useData";
import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";
import { SoundButton } from "../component/sound-button";
import sounds from "../cms/sounds.json";

const questions = sounds.questions;

export const Melody = () => {
     const { midiNote } = useMidiIn();
     console.log(midiNote);
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );
     console.log(midiNote);

     const meloditekrari = () => {
          clavinetRef.current.schedule(acRef.current, [
               { time: 0.1, note: 55 },
               { time: 0.2, note: 69 },
               { time: 0.3, note: 72 },
               { time: 0.9, note: 74 },
               { time: 0.5, note: 78 },
               { time: 0, note: 72 },
          ]);
     };

     return (
          <Container>
               {questions.map((question) => (
                    <div
                         className={`bg-${question.color}  shadow-2xl bg m-2 p-2 rounded-xl`}
                         key={question.id}>
                         <SoundButton onClick={meloditekrari}></SoundButton>
                    </div>
               ))}
          </Container>
     );
};

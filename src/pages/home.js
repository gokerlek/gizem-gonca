import { useMidiData } from "../component/use-midi-data";
import { Container } from "../component/container";

export const Home = () => {
     const { acRef, clavinetRef } = useMidiData(
          "acoustic_grand_piano",
          "FluidR3_GM"
     );

     return <Container></Container>;
};

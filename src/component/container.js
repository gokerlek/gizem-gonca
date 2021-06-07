import { SoundButton } from "./sound-button";
import { Howl } from "howler";

const src1 = "sounds/D4";
const src2 = "sounds/Cs4";

const sound1 = new Howl({
     src: [`${src1}.m4a`],
});
const sound2 = new Howl({
     src: [`${src2}.m4a`],
});

const playSound = () => {
     sound2.play();
     sound1.play();
};

export const Container = () => {
     return (
          <div className='min-w-screen h-screen  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 bg-white'>
               <div className='flex flex-col w-full'>
                    <SoundButton onClick={playSound}>C</SoundButton>
               </div>
          </div>
     );
};

import { SoundButton } from "./sound-button";
import { Howl } from "howler";

const sound1 = new Howl({
     src: ["sounds/A4.m4a"],
});
const sound2 = new Howl({
     src: ["sounds/B4.m4a"],
});

const playSound = () => {
     sound1.play();
     sound2.play();
};

export const Container = () => {
     return (
          <div className='min-w-screen h-screen  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 bg-white'>
               <div className='flex flex-col w-full'>
                    <SoundButton start={playSound}>C</SoundButton>
               </div>
          </div>
     );
};

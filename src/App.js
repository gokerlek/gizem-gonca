import { SoundButton } from "./component/sound-button";

function App() {
     return (
          <div className='App'>
               <div className='min-w-screen h-screen  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 bg-white'>
                    <div className='flex flex-col w-full'>
                         <SoundButton />
                    </div>
               </div>
          </div>
     );
}

export default App;

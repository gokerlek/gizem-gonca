import { Link } from "react-router-dom";
import { Container } from "./container";

export const Menu = () => {
     return (
          <>
               <div className='menu  flex flex-col justify-center'>
                    <Link
                         className='bg-kolay w-max p-7 m-2 tracking-wider rounded-lg'
                         to='/'></Link>

                    <Link
                         className='bg-kolay w-max p-7 m-2 tracking-wider rounded-lg'
                         to='/exam'></Link>

                    <Link
                         className='bg-kolay w-max p-7 m-2 tracking-wider rounded-lg'
                         to='/rhythm'></Link>

                    <Link
                         className='bg-kolay w-max p-7 m-2 tracking-wider rounded-lg'
                         to='/melody'></Link>

                    <Link
                         className='bg-kolay w-max p-7 m-2 tracking-wider rounded-lg'
                         to='/four'></Link>

                    <Link
                         className='bg-kolay w-max p-7 m-2 tracking-wider rounded-lg'
                         to='/three'></Link>

                    <Link
                         className='bg-kolay w-max p-7 m-2 tracking-wider rounded-lg'
                         to='/two'></Link>
               </div>
          </>
     );
};

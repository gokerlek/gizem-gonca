import { Container } from "./container";
import { Menu } from "./menu";
import { Logo } from "./logo";

export const Sidebar = () => {
     return (
          <div className='sidebar w-1/6 h-menu flex flex-col items-center  '>
               <Logo />
               <Menu />
          </div>
     );
};

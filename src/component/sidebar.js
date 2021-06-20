import { Menu } from "./menu";
import { Logo } from "./logo";

export const Sidebar = () => {
     return (
          <div className='sidebar w-menu h-menu shadow-menu flex flex-col items-center fixed '>
               <Logo />
               <Menu />
          </div>
     );
};

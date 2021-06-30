import { Link } from "react-router-dom";
import menu from "../cms/menu.json";
import { BrowserRouter as Route } from "react-router-dom";

const menuData = menu.menuItems;
export const Menu = () => {
     return (
          <>
               <div className='menu my-auto flex flex-col justify-around'>
                    {menuData.map((menuItem) => (
                         <div
                              key={menuItem.url}
                              className={
                                   "bg-kolay hover:bg-opacity-80   h-7 m-2 p-7  tracking-wider rounded-lg relative"
                              }>
                              <Link to={menuItem.url}>
                                   <div className=' absolute top-1 right-1'>
                                        <img
                                             src={menuItem.icon}
                                             alt={menuItem.label}
                                        />
                                   </div>
                              </Link>
                         </div>
                    ))}
               </div>
          </>
     );
};

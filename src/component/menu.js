import { Link } from "react-router-dom";
import menu from "../cms/menu.json";

const menuData = menu.menuItems;
export const Menu = () => {
     return (
          <>
               <div className='menu my-auto flex flex-col justify-around'>
                    {menuData.map((menuItem) => (
                         <div className='bg-kolay h-7 m-2 p-7  tracking-wider rounded-lg relative'>
                              <Link to={menuItem.url}>
                                   <div className=' absolute top-1 right-2'>
                                        <img src={menuItem.icon} />
                                   </div>
                              </Link>
                         </div>
                    ))}
               </div>
          </>
     );
};

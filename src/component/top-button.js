import { FiTriangle } from "react-icons/fi";
import { IconContext } from "react-icons";

const scrollToTop = () => {
     window?.scrollTo({ top: 0, behavior: "smooth" });
};
export const TopButton = () => {
     return (
          <>
               <div onClick={scrollToTop} className='top-button'>
                    <div>
                         <IconContext.Provider
                              value={{
                                   style: {
                                        width: "2.5em",
                                        height: "2.5em",
                                        strokeWidth: "3",
                                   },
                              }}>
                              <a href='#/'>
                                   <FiTriangle />
                              </a>
                         </IconContext.Provider>
                    </div>
               </div>
          </>
     );
};

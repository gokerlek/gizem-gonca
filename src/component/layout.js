import { Sidebar } from "./sidebar";
import { ScrollToTop } from "./scroll-to-top";

export const Layout = ({ children }) => {
     return (
          <>
               <div className='layout grid grid-cols-2   bg-white'>
                    <Sidebar />
                    <div>{children}</div>
                    <ScrollToTop />
               </div>
          </>
     );
};

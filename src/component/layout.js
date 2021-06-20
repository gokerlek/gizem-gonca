import { Sidebar } from "./sidebar";
import { ScrollToTop } from "./scroll-to-top";

export const Layout = ({ children }) => {
     return (
          <>
               <div className='layout grid grid-cols-layout   bg-white'>
                    <div>
                         <Sidebar />
                    </div>
                    <div>{children}</div>
                    <ScrollToTop />
               </div>
          </>
     );
};

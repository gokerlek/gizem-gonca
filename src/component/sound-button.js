import classNames from "classnames";

export const SoundButton = ({ onClick, children, key, color }) => {
     const soundButton = classNames(
          "bg-gray-100 active:bg-gray-100 min-w-full p-5 text-sm shadow-sm font-layout font-bold tracking-wider rounded-lg focus:outline-none focus:ring-transparent",
          `text-${color}`
     );
     return (
          <div className='p-1 text-center '>
               <button className={soundButton} onClick={onClick} key={key}>
                    {children}
               </button>
          </div>
     );
};

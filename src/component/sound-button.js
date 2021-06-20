export const SoundButton = ({ onClick, children, key, color }) => {
     const colors = color;
     return (
          <div className='p-1 text-center '>
               <button
                    className={`bg-gray-100 min-w-full p-5 text-sm shadow-sm font-layout font-bold  tracking-wider text-${colors} rounded-lg focus:outline-none focus:ring-transparent`}
                    onClick={onClick}
                    key={key}>
                    {children}
               </button>
          </div>
     );
};

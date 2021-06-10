export const SoundButton = ({ onClick, children, key, color }) => {
     const colors = color;
     return (
          <div className='p-1  mt-2 text-center space-x-1 space-y-2'>
               <button
                    className={`bg-gray-100 w-full px-5 py-5 text-sm shadow-sm font-layout font-bold  tracking-wider text-${colors} rounded-lg focus:outline-none focus:ring-transparent`}
                    onClick={onClick}
                    key={key}>
                    {children}
               </button>
          </div>
     );
};

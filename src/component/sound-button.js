export const SoundButton = ({ onClick, children }) => {
     return (
          <div className='p-1  mt-2 text-center space-x-1 space-y-2'>
               <button
                    className='bg-gray-900 px-5 py-5 text-sm shadow-sm font-medium tracking-wider  text-gray-100 rounded-lg focus:outline-none focus:ring-transparent'
                    onClick={onClick}>
                    {children}
               </button>
          </div>
     );
};

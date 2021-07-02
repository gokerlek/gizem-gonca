export const NoteButton = ({ onClick }) => {
     return (
          <div className='p-1 text-center '>
               <div
                    className={`bg-gray-100 active:bg-gray-100 p-5 text-sm shadow-sm font-medium tracking-wider  text-gray-900 rounded-lg focus:outline-none focus:ring-transparent`}
                    onClick={onClick}></div>
          </div>
     );
};

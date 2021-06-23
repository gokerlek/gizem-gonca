export const NoteButton = ({ onClick }) => {
     return (
          <div className='p-1 text-center '>
               <button
                    className={`bg-gray-100 p-5 text-sm shadow-sm font-medium tracking-wider  text-gray-900 rounded-lg focus:outline-none focus:ring-transparent`}
                    onClick={onClick}></button>
          </div>
     );
};

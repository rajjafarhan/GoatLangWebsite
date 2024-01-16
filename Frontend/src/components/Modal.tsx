import AstTreeView from "./AstTreeView";

type ModalType = {
  viewAst: boolean;
  setViewAst: React.Dispatch<React.SetStateAction<boolean>>;
  astree: null;
}
const Modal = ({ viewAst, setViewAst, astree }:ModalType) => {
 

  const clickedOutside = (e:React.MouseEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLDivElement;
    if (targetElement.classList.contains('overlay')) {
          setViewAst(false);
    }
  };

  return (
    <div
      className={`z-20 fixed inset-0 overflow-y-auto overlay bg-gray-700 bg-opacity-50 ${
        viewAst ? 'block' : 'hidden'
      }`}
      onClick={clickedOutside}
    >
      <div className="relative p-1 rounded-lg mx-auto mt-10 bg-[floralwhite] w-[90vw] h-[90vh]">
        <button
          className="absolute top-4 right-8 text-gray-700 hover:text-gray-400 font-mono font-extrabold text-2xl p-0 m-0 "
          onClick={()=>setViewAst(false)}
        >
          &#10006;
        </button>
        {/* Your modal content goes here */}
        <AstTreeView astree={astree}/>
      </div>
    </div>
  );
};

export default Modal;

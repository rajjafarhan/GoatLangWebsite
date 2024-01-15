import { FaChevronRight } from "react-icons/fa";

type cardsProps = {
    bgColor?: string,
    borderColor?:string
}


const Cards = ({bgColor,borderColor}:cardsProps) => {
  return (
    <div className={`${bgColor ? bgColor : 'bg-[#faf9f8]'} px-12 pb-16 my-4 flex flex-col items-center `}>
      {/* Main Heading */}
      <h1 className="text-5xl my-8">Get Started?</h1>

      {/* Three Columns */}
      <div className="flex justify-between w-full  ">
        {/* Column 1 */}

        <div className="w-72 cursor-pointer px-7 border-2    border-black  relative flex items-center hover:border-blue-500 p-8 h-96">
          <div className="pt-44">
            <h2 className="text-2xl font-bold mb-2">Handbook</h2>
            <p>Learn the language</p>
          </div>
          <div className="ml-4 pt-44">
            <FaChevronRight size={30} />
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-72 cursor-pointer px-7 border-2 border-black  relative flex items-center hover:border-blue-500 p-8 h-96">
          <div className="pt-44">
            <h2 className="text-2xl font-bold mb-2">Playground</h2>
            <p>Try in your browser</p>
          </div>
          <div className="ml-4 pt-44">
            <FaChevronRight size={30} />
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-72 cursor-pointer px-7 border-2 border-black  relative flex items-center hover:border-blue-500 p-8 h-96">
          <div className="pt-44">
            <h2 className="text-2xl font-bold mb-2">Download</h2>
            <p>Install GoatLang</p>
          </div>
          <div className="ml-4 pt-44">
            <FaChevronRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

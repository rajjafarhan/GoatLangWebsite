import React from "react";
import { FaChevronRight } from "react-icons/fa";

type cardsProps = {
    bgColor?: string,
    borderColor?:string
}


const Cards = ({bgColor,borderColor}:cardsProps) => {
  return (
    <div className={`${bgColor ? bgColor : 'bg-[#faf9f8]'} w-full px-12 pb-16 my-4 flex flex-col items-center `}>
      {/* Main Heading */}
      <h1 className="text-5xl my-8">Get Started?</h1>

      {/* Three Columns */}
      <div className="flex justify-between w-full md:flex-row flex-col gap-4  ">
        {/* Column 1 */}

        <div className="w-[100%] md:w-[30%] cursor-pointer px-4 sm:px-7 border-2    border-black  relative flex items-center hover:border-blue-500 p-8 h-40 md:h-96">
          <div className="pt-8 md:pt-44">
            <h2 className="text-2xl font-bold mb-2">Handbook</h2>
            <p>Learn the language</p>
          </div>
          <div className="sm:ml-1 ml-4 lg:ml-4 pt-4 sm:pt-44">
            <FaChevronRight size={30} />
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-[100%] md:w-[30%] cursor-pointer px-4 sm:px-7 border-2 border-black  relative flex items-center hover:border-blue-500 p-8 h-40 md:h-96">
          <div className="pt-8 md:pt-44">
            <h2 className="text-2xl font-bold mb-2">Playground</h2>
            <p>Try in your browser</p>
          </div>
          <div className="sm:ml-1 ml-4 lg:ml-4 pt-4 sm:pt-44">
            <FaChevronRight size={30} />
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-[100%] md:w-[30%] cursor-pointer px-4 sm:px-7 border-2 border-black  relative flex items-center hover:border-blue-500 p-8 h-40 md:h-96">
          <div className="pt-8 md:pt-44">
            <h2 className="text-2xl font-bold mb-2">Download</h2>
            <p>Install GoatLang</p>
          </div>
          <div className="sm:ml-1 ml-6 lg:ml-4 pt-4 sm:pt-44">
            <FaChevronRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

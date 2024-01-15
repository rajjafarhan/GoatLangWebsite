import { FaChevronRight } from "react-icons/fa";
import img5 from "../../pics/pic5.jpg"
import img2 from "../../pics/pic2.jpg"
import img3 from "../../pics/pic3.jpg"
// import img4 from "../../pics/pic4.jpg"
import { Link } from "react-router-dom";

type cardsProps = {
  bgColor?: string,
  borderColor?: string
}


const Cards = ({ bgColor, borderColor }: cardsProps) => {
  return (
    <div className={`${bgColor ? bgColor : 'bg-[#faf9f8]'} px-12 pb-16 my-4 flex flex-col items-center `}>
      {/* Main Heading */}
      <h1 className="text-5xl my-8">Get Started?</h1>

      {/* Three Columns */}
      <div className="flex justify-between w-full  ">
        {/* Column 1 */}

        <div style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className="w-72 cursor-pointer px-7 border-2    border-black  relative flex items-center hover:border-blue-800 p-8 h-96">

          <div className="pt-44">
          <Link to="/handbook/handbook-content/variables">
            <h2 className="text-4xl font-bold mb-2 text-white" >Handbook</h2>
            <p className="text-white">Learn the language</p>
          </Link>
          </div>
          <div className="ml-4 pt-44">
            <FaChevronRight size={30} />
          </div>
        </div>

        {/* Column 2 */}
        <div  style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}className="w-72 cursor-pointer px-7 border-2 border-black  relative flex items-center hover:border-blue-500 p-8 h-96">
          <div className="pt-44">
          <Link to="/playground">
            <h2 className="text-4xl font-bold mb-2 text-white">Playground</h2>
            <p className="text-white">Try in your browser</p>
            </Link>
          </div>
          <div className="ml-4 pt-44">
            <FaChevronRight color="white" size={30} />
          </div>
        </div>

        {/* Column 3 */}
        <div style={{
          backgroundImage: `url(${img5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className="w-72 cursor-pointer px-7 border-2 border-black  relative flex items-center hover:border-blue-500 p-8 h-96">
          <div className="pt-44">
            <Link to="https://www.npmjs.com/package/goat-code">
            <h2 className="text-4xl font-bold mb-2 text-white">Download</h2>
            <p className="text-white text-2xl">Install GoatLang</p>
            </Link>
          </div>
          <div className="ml-4 pt-44">
            <FaChevronRight color="white" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

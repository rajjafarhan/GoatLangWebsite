import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-teal-800  p-4 text-zinc-50">
      <div className="flex items-center  justify-between w-full ">
        <div className="flex items-center">
          <div className="mr-6">
            <Link to="/" className="font-bold text-xl">
              GoatLang
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              to="https://www.npmjs.com/package/goat-code"
              target="_blank"
              className="mx-2"
            >
              Download
            </Link>
            <Link to="/handbook/handbook-content/variables" className="mx-2">
              Handbook
            </Link>
            <Link to="/feedback" className="mx-2">
              Feedback
            </Link>
            <Link to="/playground" className="mx-2">
              Playground
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 md:w-[30%] ">
          
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-800  p-4 text-zinc-50">
      <div className="flex items-center  justify-between w-full ">
        <div className="flex items-center">
          <div className="mr-6">
            <span className="font-bold text-xl">GoatLang</span>
          </div>
          <div className="hidden md:flex">
            <Link to="#" className="mx-2">
              Download
            </Link>
            <Link to="./docs" className="mx-2">
              Docs
            </Link>
            <Link to="/handbook/handbook-content/variables" className="mx-2">
              Handbook
            </Link>
            <Link to="#" className="mx-2">
              Feedback
            </Link>
            <Link to="#" className="mx-2">
              Playground
            </Link>
            <Link to="#" className="mx-2">
              Tools
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 md:w-[30%] ">
          <input
            type="text"
            placeholder="Search"
            className="w-[70%] bg-transparent border border-edf0f6 text-edf0f6 px-2  py-1 rounded"
          />
          <button className="focus:outline-none ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

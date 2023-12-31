


const Navbar = () => {
 

  return (
    <div>
    {/* Navbar */}
    <nav className="bg-teal-800 p-4 text-zinc-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-6">
            <span className="font-bold text-xl">GoatLang</span>
          </div>
          <div className="hidden md:flex">
            <a href="#" className="mx-2">Download</a>
            <a href="#" className="mx-2">Docs</a>
            <a href="#" className="mx-2">Handbook</a>
            <a href="#" className="mx-2">Community</a>
            <a href="#" className="mx-2">Playground</a>
            <a href="#" className="mx-2">Tools</a>
          </div>
        </div>
        <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
        <input
                type="text"
                placeholder="Search"
                className="bg-transparent border border-edf0f6 text-edf0f6 px-2 py-1 rounded"
              />

            </div>
          <div>
            <button className="focus:outline-none">
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
      </div>
    </nav>

    
  </div>
  );
};

export default Navbar;



const Navbar = () => {
 

  return (
    <div>
    {/* Navbar */}
    <nav className="bg-teal-800 w-screen p-4 text-zinc-50">
      <div className="flex items-center  justify-between w-full ">
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
        <div className="flex items-center gap-4 md:w-[30%] ">
          <input type="text" placeholder="Search" className="w-[70%] bg-transparent border border-edf0f6 text-edf0f6 px-2  py-1 rounded"/>
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
        {/* <div className="flex items-center w-[30%] bg-pink-500">
        <div className="lg:mr-4 w-[50%]">
        <input
                type="text"
                placeholder="Search"
                className="bg-transparent border border-edf0f6 text-edf0f6  py-1 rounded"
              />

            </div>
          <div className=" w-[30%]">
            <button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
               
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </nav>

    {/* Hero Section */}
    {/* <section className="bg-teal-500 p-16 text-zinc-50 pt-20">
      <div className="flex">
        <div className="w-1/2 pr-8">
          <p className="text-5xl  mb-4">
            GoatLang is <span className="font-semibold">Multipupose programming language built on top of JavaScript.</span>
          </p>
          <p className="text-lg">
            A user-friendly language utilizing Babel for translation into JavaScript, designed for ease of use and versatility, catering to both beginners and experienced and developers for seamless and efficient web application development.
          </p>
        </div>
        <div className="w-1/2">
          <Editor />
        </div>
      </div>
    </section> */}
  </div>
  );
};

export default Navbar;
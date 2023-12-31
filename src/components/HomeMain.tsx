import React from "react";
import Cards from "./Cards";

const HomeMain = () => {
  return (
    <main className="py-5 w-full">
      <div className="px-12 mb-10 pb-16 flex flex-col items-center ">
        {/* Main Heading */}
        <h1 className="text-5xl my-8">What is GoatLang?</h1>

        {/* Three Columns */}
        <div className="flex justify-between w-full  ">
          {/* Column 1 */}
          <div className="w-1/3 px-7   ">
            <h2 className="text-3xl font-200 mb-4">Column 1</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              suscipit felis odio.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-1/3 px-7">
            <h2 className="text-3xl font-200 mb-4">Column 2</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              suscipit felis odio.
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-1/3 px-7">
            <h2 className="text-3xl font-200 mb-4">Column 3</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              suscipit felis odio.
            </p>
          </div>
        </div>
      </div>
      <Cards />
    </main>
  );
};

export default HomeMain;

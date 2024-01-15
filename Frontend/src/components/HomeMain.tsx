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
            <h2 className="text-3xl font-200 mb-4">What is GoatLang and how does it simplify programming?</h2>
            <p className="text-xl">
            GoatLang is a modern programming language designed to make coding more accessible and enjoyable. Its unique syntax simplifies complex concepts, allowing both beginners and experienced developers to write code more intuitively and efficiently.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-1/3 px-7">
            <h2 className="text-3xl font-200 mb-4">What are some standout features of GoatLang?</h2>
            <p className="text-xl">
            Key features of GoatLang include its user-friendly syntax for variables, functions, and control structures, an innovative approach to array element access  operator, and seamless integration with JavaScript, enhancing its versatility and ease of use.
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-1/3 px-7">
            <h2 className="text-3xl font-200 mb-4">How does GoatLang support developers in their coding journey?</h2>
            <p className="text-xl">
            GoatLang supports developers with its clear and concise syntax, reducing the learning curve for beginners. Its compatibility with JavaScript tools and technologies makes it a practical choice for a wide range of projects, from small scripts to large-scale applications.
            </p>
          </div>
        </div>
      </div>
      <Cards />
    </main>
  );
};

export default HomeMain;

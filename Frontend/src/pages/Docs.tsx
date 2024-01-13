import React from "react";

const Docs = () => {
  const cardStyle = {
    backgroundColor: "#ffffff",
    boxShadow:
      "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)",
  };

  return (
    <div className="min-h-screen bg-faf9f8">
      <div className="container mx-auto py-12 mb-10 px-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          GoatLang Documentation
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {/* Cards */}
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} style={cardStyle} className="p-4 mb-4">
              <h2 className="text-xl font-bold mb-2">Lorem Ipsum</h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.
              </p>
              <div className="flex flex-col">
                {Array.from({ length: 10 }).map((_, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="text-teal-800 underline mb-2"
                  >
                    Link {linkIndex + 1}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional Section - 4 Cards in One Row */}
      <div className="container mx-auto py-12 mb-10 px-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Learning Resources
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-8">
        {/* Cards - 4 Cards in Total */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} style={cardStyle} className="p-4">
            <h2 className="text-xl font-bold mb-2">Lorem Ipsum</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
            <div className="flex flex-col">
              {Array.from({ length: 5 }).map((_, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="text-teal-800 underline mb-2"
                >
                  Link {linkIndex + 1}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Docs;

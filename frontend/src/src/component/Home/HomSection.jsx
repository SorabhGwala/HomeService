import React from "react";
// import { ShareLocation } from "@mui/icons-material";

const HomeSection = () => {
  return (
    <div>
      <section className="relative">
        {/* Fullscreen Responsive Background Image */}
        <div className="w-full ">
          <img
            className="w-full object-cover object-top sm:h-[20%] md:h-[80vh] lg:h-screen"
            src="/home4.jpg"
            alt="Home background"
          />
        </div>

        {/* Search Section */}
        <div className="absolute top-[1%] w-full px-4 flex flex-col items-center text-center sm:top-[20%] md:top-[30%] lg:top-[35%]">
          {/* Headline Text */}
          <div className="text-blue-200 px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span>Find </span>
              <span className="text-[#ab86f0]">Home Service</span>
              <span>/Repair</span>
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mt-2 flex items-center justify-center">
              {/* <ShareLocation className="mr-2" style={{ fontSize: '2rem' }} /> */}
              Near you
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-4">
              Expert Provide Home Service/Repairs at Your Doorstep.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full max-w-lg mt-8 px-4">
            <div className="flex items-center border-2 border-gray-300 rounded-lg bg-gray-200 hover:scale-105 transition-transform duration-500 shadow-md">
              <input
                type="text"
                placeholder="Type here to search..."
                className="flex-grow px-4 py-3 text-gray-800 bg-transparent placeholder-gray-500 outline-none rounded-l-lg"
                aria-label="Search box"
              />
              <button
                className="px-6 py-3 bg-[#8142f2] hover:bg-[#9a67f4] text-white font-bold rounded-r-lg"
                type="button"
                aria-label="Search button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;

import React from "react";

const Repairings = [
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg",
      services: "Furniture Making, Upholstery & Polish",
      text: "",
    },
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
      services: "Carpenters",
      text: "",
    },
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg",
      services: "Electricians",
      text: "",
    },
    {
      logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg",
      services: "Plumber",
      text: "",
    },
  ];
const Repairing = () => {
  return (
    <div className="flex justify-center">
    <div className="w-full md:w-[80vw] border-2 border-stone-300 rounded-2xl overflow-y-auto p-4">
      <div className="min-h-screen bg-gray-50 p-4 rounded-3xl">
        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Repairings.map((data, index) => (
            <section
              key={index}
              className="w-full bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden 
                transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              {/* Image and Price */}
              <div className="relative">
                <img
                  className="w-full h-48 object-cover object-top transform transition-transform duration-300 ease-in-out hover:scale-105"
                  src={data.logo}
                  alt={data.services || "Service Image"}
                />
                {data.services && (
                  <span className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-70 text-white px-4 py-1 rounded-lg text-sm shadow-md">
                    {data.services}
                  </span>
                )}
              </div>

              {/* Description and Booking Button */}
              <div className="p-4">
                <p className="text-gray-700 text-sm lg:text-base mb-4">
                  {data.text || "No description available"}
                </p>
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 lg:py-3 rounded-lg shadow-md 
                    transform transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:shadow-lg"
                  type="button"
                >
                  Book Now
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Repairing 
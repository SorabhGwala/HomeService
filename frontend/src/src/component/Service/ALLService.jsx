import React from "react";

const AllServices = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg",
    services: "Laser And Advanced Facial",
    text: "Advanced Skin Treatments",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg",
    services: "Buy RO Water Purifier",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
    services: "Air Purifier",
    text: "Flat ₹100 off",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657019604034-39f21a.jpeg",
    text: "",
    services: "",
  },
];

const AllService = () => {
  return (
    <div className="flex justify-center">
    <div className="w-full md:w-[80vw] border-2 border-stone-300 rounded-2xl overflow-y-auto p-4">
      <div className="min-h-screen bg-gray-50 p-4 rounded-3xl">
        {/* Responsive Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {AllServices.map((data, index) => (
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

export default AllService;

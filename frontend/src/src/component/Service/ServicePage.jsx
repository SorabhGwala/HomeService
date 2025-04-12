import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

import PlumbingIcon from "@mui/icons-material/Plumbing";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import { Link } from "react-router-dom";

const cleaning = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
    services: "Bathroom And Kitchen Cleaning",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg",
    services: "Full Home Cleaning",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg",
    services: "Sofa & Carpet Cleaning",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg",
    services: "Cockroach, Ant & General Pest Control",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg",
    services: "Bed Bugs Control",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632474326407-0aae21.jpeg",
    services: "Termite Control",
  },
];

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

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="flex flex-col md:flex-row justify-center items-center mt-4 overflow-auto">
        <div className=" w-full md:w-[95vw] flex flex-col md:flex-row border-2 border-stone-300 rounded-lg h-auto md:h-[100vh] overflow-hidden p-4">
          {/* Sidebar */}
          <div className="grid grid-cols-3 md:grid-cols-1 justify-evenly items-center w-full md:w-[12vw] md:h-[60vh] border-2 border-gray-300 rounded-2xl p-4 gap-4 mb-4 md:mb-0">
            <Link to="/AllService" className="w-full">
              <button
                className="rounded-md border-stone-800 border-2 shadow-lg w-full px-4 py-2 bg-slate-100 flex items-center gap-2 focus:bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] focus:text-white"
                aria-label="View all services"
              >
                <HomeIcon /> All Services
              </button>
            </Link>
            <Link to="/ServiceCleaning" className="w-full">
              <button
                className="rounded-md border-stone-800 border-2 shadow-lg w-full px-4 py-2 bg-slate-100 flex items-center gap-2 focus:bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] focus:text-white"
                aria-label="Cleaning services"
              >
                <CleaningServicesIcon /> Cleaning
              </button>
            </Link>
            <Link to="/Repairing" className="w-full">
              <button
                className="rounded-md border-stone-800 border-2 shadow-lg w-full px-4 py-2 bg-slate-100 flex items-center gap-2 focus:bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] focus:text-white"
                aria-label="Cleaning services"
              >
                <CleaningServicesIcon /> Reparing
              </button>
            </Link>
            <button
              className="rounded-md border-stone-800 border-2 shadow-lg w-full px-4 py-2 bg-slate-100 flex items-center gap-2 focus:bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] focus:text-white"
              aria-label="Plumbing services"
            >
              <PlumbingIcon /> Plumbing
            </button>
            <button
              className="rounded-md border-stone-800 border-2 shadow-lg w-full px-4 py-2 bg-slate-100 flex items-center gap-2 focus:bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] focus:text-white"
              aria-label="Electrical services"
            >
              <ElectricalServicesIcon /> Electrical
            </button>
          </div>

          {/* Main Content Area */}
          <div className="ml-2 w-full md:w-[80vw] border-2 border-stone-300 rounded-2xl overflow-y-auto p-4">
            <div className="min-h-screen bg-gray-50 p-4 rounded-3xl">
              {/* Responsive Grid */}
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cleaning.map((data, index) => (
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
                        alt={data.services}
                      />
                      <span className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-70 text-white px-4 py-1 rounded-lg text-sm shadow-md">
                        {data.services}
                      </span>
                    </div>

                    {/* Description and Booking Button */}
                    <div className="p-4">
                      <p className="text-gray-700 text-sm lg:text-base mb-4">
                        {data.services}
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
             
 {AllServices.map((service, index) => {
   return (
     <section
       key={index}
       className="w-full bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden 
         transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
     >
 {/* Image and Price */}
 <div className="relative">
   <img
     className="w-full h-48 object-cover object-top transform transition-transform duration-300 ease-in-out hover:scale-105"
     src={service.logo}
     alt={service.services}
   />
   <span className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-70 text-white px-4 py-1 rounded-lg text-sm shadow-md">
     Starting Price: $1000
   </span>
 </div>

 {/* Description and Booking Button */}
 <div className="p-4">
   <p className="text-gray-700 text-sm lg:text-base mb-4">
     {service.logo}
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

  ) })
             }
             
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default ServicePage;

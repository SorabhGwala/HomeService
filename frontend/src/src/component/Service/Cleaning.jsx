// import React from "react";

// const cleaning = [
//   {
//     logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
//     services: "Bathroom And Kitchen Cleaning",
//     text: "",
//   },
//   {
//     logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg",
//     services: "Full Home Cleaning",
//     text: "",
//   },
//   {
//     logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg",
//     services: "Sofa & Carpet Cleaning",
//     text: "",
//   },
//   {
//     logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg",
//     services: "Cockroach, Ant & General Pest Control",
//     text: "",
//   },
//   {
//     logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg",
//     services: "Bed Bugs Control",
//     text: "",
//   },
//   {
//     logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632474326407-0aae21.jpeg",
//     services: "Termite Control",
//     text: "",
//   },
// ];

// const Cleaning = () => {
//   return (
//     <div className="flex justify-center">
//     <div className="w-[80vw] h-[90vh] border-2 border-stone-300 rounded-2xl overflow-y-scroll mt-4 p-4 ">
//       <div className="min-h-screen bg-gray-50 p-6 rounded-3xl">
//         {/* Responsive Grid */}
//         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {cleaning.map((data, index) => (
//             <section
//               key={index}
//               className="w-full bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden 
//                 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Image and Price */}
//               <div className="relative">
//                 <img
//                   className="w-full h-48 object-cover object-top transform transition-transform duration-300 ease-in-out hover:scale-105"
//                   src={data.logo}
//                   alt={data.services}
//                 />
//                 <span className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-70 text-white px-4 py-1 rounded-lg text-sm shadow-md">
//                   Starting Price: $1000
//                 </span>
//               </div>

//               {/* Description and Booking Button */}
//               <div className="p-6">
//                 <p className="text-gray-700 text-sm lg:text-base mb-4">
//                   {data.services}
//                 </p>
//                 <button
//                   className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 lg:py-3 rounded-lg shadow-md 
//                     transform transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:shadow-lg"
//                   type="button"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </section>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Cleaning;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Award, Heart, Shield, Check, MapPin, Users} from 'lucide-react';
import { toast } from "sonner";

const services = [
  {
    id: 1,
    name: "Standard Cleaning",
    price: 100,
    image: "/cleaning.jpg",
    description: "Our professional standard cleaning service ensures a spotless and organized space for your home or office.",
    rating: 4.8,
    duration: "2 hours",
    featured: false,
    type: "residential"
  },
  {
    id: 2,
    name: "Deep Cleaning",
    price: 180, 
    image: "/cleaning.jpg",
    description: "Thorough deep cleaning service that tackles hard-to-reach areas and stubborn dirt. Perfect for seasonal cleaning.",
    rating: 4.9,
    duration: "4 hours",
    featured: true,
    type: "residential"
  },
  {
    id: 3,
    name: "Move-in/Move-out",
    price: 250,
    image: "/cleaning.jpg",
    description: "Comprehensive cleaning service specially designed for when you're moving in or out of a property.",
    rating: 4.7,
    duration: "5 hours",
    featured: false,
    type: "residential"
  },
  {
    id: 4,
    name: "Office Cleaning",
    price: 300,
    image: "/cleaning.jpg",
    description: "Professional cleaning service for offices and commercial spaces, ensuring a healthy work environment.",
    rating: 4.9,
    duration: "3 hours",
    featured: false,
    type: "commercial"
  },
  {
    id: 5,
    name: "Carpet Cleaning",
    price: 150,
    image: "/cleaning.jpg",
    description: "Revitalize your carpets with our deep cleaning treatment that removes stains, dirt, and allergens.",
    rating: 4.8,
    duration: "3 hours",
    featured: false,
    type: "specialty"
  },
  {
    id: 6,
    name: "Window Cleaning",
    price: 120,
    image: "/cleaning.jpg",
    description: "Crystal clear windows inside and out with our professional window cleaning service.",
    rating: 4.7,
    duration: "2 hours",
    featured: false,
    type: "specialty"
  },
  {
    id: 7,
    name: "Post-Construction",
    price: 400,
    image: "/cleaning.jpg",
    description: "Thorough cleanup after construction or renovation projects, removing dust, debris, and construction residue.",
    rating: 4.9,
    duration: "6 hours",
    featured: true,
    type: "specialty"
  },
  {
    id: 8,
    name: "Sanitization Service",
    price: 200,
    image: "/cleaning.jpg",
    description: "Comprehensive sanitization service that eliminates germs, bacteria, and viruses from high-touch surfaces.",
    rating: 5.0,
    duration: "3 hours",
    featured: false,
    type: "specialty"
  },
  {
    id: 9,
    name: "Commercial Kitchen",
    price: 350,
    image: "/cleaning.jpg",
    description: "Specialized cleaning for commercial kitchens ensuring compliance with health and safety regulations.",
    rating: 4.8,
    duration: "5 hours",
    featured: false,
    type: "commercial"
  },
  {
    id: 10,
    name: "Event Cleanup",
    price: 280,
    image: "/cleaning.jpg",
    description: "Quick and efficient cleaning service after parties, corporate events, or other gatherings.",
    rating: 4.7,
    duration: "4 hours",
    featured: false,
    type: "commercial"
  },
  {
    id: 11,
    name: "Green Cleaning",
    price: 150,
    image: "/cleaning.jpg",
    description: "Environmentally friendly cleaning using eco-certified products and sustainable methods.",
    rating: 4.8,
    duration: "3 hours",
    featured: true,
    type: "specialty"
  },
  {
    id: 12,
    name: "Scheduled Maintenance",
    price: 200,
    image: "/cleaning.jpg",
    description: "Regular weekly or monthly cleaning services tailored to your specific needs and schedule.",
    rating: 4.9,
    duration: "2-4 hours",
    featured: false,
    type: "residential"
  },
  {
    id: 13,
    name: "Upholstery Cleaning",
    price: 180,
    image: "/cleaning.jpg",
    description: "Refresh and revitalize your furniture with our professional upholstery cleaning service.",
    rating: 4.7,
    duration: "3 hours",
    featured: false,
    type: "specialty"
  },
  {
    id: 14,
    name: "Industrial Cleaning",
    price: 500,
    image: "/cleaning.jpg",
    description: "Heavy-duty cleaning for industrial facilities, warehouses, and manufacturing plants.",
    rating: 4.8,
    duration: "8 hours",
    featured: false,
    type: "commercial"
  }
];

const Cleaning = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
const [activeFilter, setActiveFilter] = useState("all");

function handleBooking(serviceId, serviceName) {
  toast.success(`Booking initiated for ${serviceName}`);
  navigate(`/services?id=${serviceId}`);
}

function toggleFavorite(id, name) {
  setFavorites(prev => {
    if (prev.includes(id)) {
      toast.info(`Removed ${name} from favorites`);
      return prev.filter(item => item !== id);
    } else {
      toast.success(`Added ${name} to favorites`);
      return [...prev, id];
    }
  });
}

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(service => service.type === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 mt-1">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Cleaning Services
      </h2>
      
      <div className="flex justify-center mb-8 flex-wrap gap-2">
        <button 
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
            ${activeFilter === "all" 
              ? "bg-purple-600 text-white shadow-md" 
              : "bg-white text-gray-600 hover:bg-gray-100"}`}
        >
          All Services
        </button>
        <button 
          onClick={() => setActiveFilter("residential")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
            ${activeFilter === "residential" 
              ? "bg-purple-600 text-white shadow-md" 
              : "bg-white text-gray-600 hover:bg-gray-100"}`}
        >
          Residential
        </button>
        <button 
          onClick={() => setActiveFilter("commercial")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
            ${activeFilter === "commercial" 
              ? "bg-purple-600 text-white shadow-md" 
              : "bg-white text-gray-600 hover:bg-gray-100"}`}
        >
          Commercial
        </button>
        <button 
          onClick={() => setActiveFilter("specialty")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
            ${activeFilter === "specialty" 
              ? "bg-purple-600 text-white shadow-md" 
              : "bg-white text-gray-600 hover:bg-gray-100"}`}
        >
          Specialty
        </button>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredServices.map((service, index) => {
          const designVariation = index % 5;
          
          if (service.type === "residential") {
            if (designVariation === 0) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden relative"
                >
                  <button 
                    onClick={() => toggleFavorite(service.id, service.name)}
                    className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
                  </button>

                  {service.featured && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-yellow-400 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover object-top transition-transform duration-700 hover:scale-110"
                      src={service.image}
                      alt={service.name}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-white font-semibold text-lg">{service.name}</span>
                      <span className="absolute bottom-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md">
                        ${service.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center mb-3">
                      <div className="flex items-center mr-4">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{service.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-blue-500 mr-1" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-5">
                      {service.description}
                    </p>
                    
                    <button
                      onClick={() => handleBooking(service.id, service.name)}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md 
                        transition-all duration-300 hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 active:scale-95"
                      type="button"
                    >
                      Book Now
                    </button>
                  </div>
                </motion.div>
              );
            } else if (designVariation === 1) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full rounded-xl overflow-hidden relative bg-white shadow-lg border-l-4 border-purple-500"
                >
                  <button 
                    onClick={() => toggleFavorite(service.id, service.name)}
                    className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
                  </button>

                  <div className="flex flex-col h-full">
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-40 object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                        <h3 className="text-white text-lg font-bold drop-shadow-md">{service.name}</h3>
                        <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                          ${service.price}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex justify-between mb-3 text-sm">
                        <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{service.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded">
                          <Clock className="w-4 h-4 text-purple-500" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-5">
                        {service.description}
                      </p>
                      
                      <button
                        onClick={() => handleBooking(service.id, service.name)}
                        className="mt-auto w-full bg-white border-2 border-purple-500 text-purple-600 font-semibold py-2.5 rounded-lg
                          hover:bg-purple-500 hover:text-white transition-colors duration-300"
                        type="button"
                      >
                        Schedule Service
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            } else if (designVariation === 2) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-white rounded-xl shadow-xl overflow-hidden relative group"
                >
                  <div className="absolute -right-12 top-6 z-10 rotate-45">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-1 px-12 text-xs font-bold shadow-md">
                      ${service.price}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => toggleFavorite(service.id, service.name)}
                    className="absolute top-3 left-3 z-10 bg-white/80 rounded-full p-2 shadow-md transition-all"
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
                  </button>

                  <div className="relative">
                    <img
                      className="w-full h-44 object-cover transition-all duration-700 group-hover:scale-105"
                      src={service.image}
                      alt={service.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <h3 className="absolute bottom-3 left-3 text-white text-lg font-bold">{service.name}</h3>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex bg-yellow-100 rounded-full px-2 py-0.5 items-center">
                          <Star className="w-3.5 h-3.5 text-yellow-500 mr-0.5" />
                          <span className="text-xs font-medium text-yellow-700">{service.rating}</span>
                        </div>
                        <div className="flex bg-purple-100 rounded-full px-2 py-0.5 items-center">
                          <Clock className="w-3.5 h-3.5 text-purple-500 mr-0.5" />
                          <span className="text-xs font-medium text-purple-700">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    
                    <button
                      onClick={() => handleBooking(service.id, service.name)}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-md 
                        transition-all duration-300 hover:shadow-lg hover:from-indigo-600 hover:to-purple-600"
                      type="button"
                    >
                      Book Now
                    </button>
                  </div>
                </motion.div>
              );
            } else if (designVariation === 3) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="relative w-full overflow-hidden group"
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={service.image}
                      alt={service.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/50 to-black/30"></div>
                  </div>
                  
                  <div className="relative z-10 backdrop-blur-sm bg-white/20 border border-white/30 rounded-xl p-5 shadow-xl m-3 h-[calc(100%-24px)]">
                    <button 
                      onClick={() => toggleFavorite(service.id, service.name)}
                      className="absolute top-3 right-3 z-10 bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/50 transition-all"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-white'}`} />
                    </button>
                    
                    <div className="flex flex-col h-full">
                      <div className="mb-auto">
                        <h3 className="text-white text-xl font-bold mb-1">{service.name}</h3>
                        
                        <div className="flex gap-3 mb-4">
                          <div className="bg-white/30 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                            <Star className="w-3.5 h-3.5 text-yellow-300 mr-1" />
                            <span className="text-xs font-medium text-white">{service.rating}</span>
                          </div>
                          <div className="bg-white/30 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                            <Clock className="w-3.5 h-3.5 text-white mr-1" />
                            <span className="text-xs font-medium text-white">{service.duration}</span>
                          </div>
                        </div>
                        
                        <p className="text-white/90 text-sm mb-5">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-white font-bold text-lg mb-3 text-center">
                          ${service.price}
                        </div>
                        <button
                          onClick={() => handleBooking(service.id, service.name)}
                          className="w-full bg-white text-purple-800 font-semibold py-2.5 rounded-lg shadow-md 
                            transition-all hover:bg-purple-100"
                          type="button"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-white rounded-xl shadow-md overflow-hidden relative"
                >
                  <div className="md:flex">
                    <div className="relative md:w-2/5">
                      <img
                        className="w-full h-48 md:h-full object-cover"
                        src={service.image}
                        alt={service.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r"></div>
                      
                      <div className="absolute bottom-3 left-3 md:hidden">
                        <h3 className="text-white text-lg font-bold">{service.name}</h3>
                      </div>
                      
                      <button 
                        onClick={() => toggleFavorite(service.id, service.name)}
                        className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
                      </button>
                    </div>
                    
                    <div className="p-5 md:p-6 md:w-3/5">
                      <h3 className="hidden md:block text-gray-800 text-xl font-bold mb-2">{service.name}</h3>
                      
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{service.rating}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-purple-500 mr-1" />
                            <span className="text-sm font-medium">{service.duration}</span>
                          </div>
                        </div>
                        <div className="text-purple-600 font-bold">${service.price}</div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {service.description}
                      </p>
                      
                      <button
                        onClick={() => handleBooking(service.id, service.name)}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2.5 rounded-lg 
                          transition-all hover:from-purple-700 hover:to-indigo-700"
                        type="button"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            }
          } else if (service.type === "commercial") {
            if (designVariation === 0) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl shadow-lg overflow-hidden relative"
                >
                  <button 
                    onClick={() => toggleFavorite(service.id, service.name)}
                    className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
                  </button>

                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                      src={service.image}
                      alt={service.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-white text-xl font-bold mb-1">{service.name}</h3>
                      <div className="flex items-center text-white">
                        <Shield className="w-4 h-4 mr-1" />
                        <span className="text-sm">Business Ready</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="ml-1 text-gray-700 font-medium">{service.rating}</span>
                      </div>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                        ${service.price}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center mb-5 text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                    
                    <button
                      onClick={() => handleBooking(service.id, service.name)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
                      type="button"
                    >
                      Request Quote
                    </button>
                  </div>
                </motion.div>
              );
            } else if (designVariation === 1) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="w-full overflow-hidden rounded-xl shadow-lg bg-white relative"
                >
                  <div className="bg-blue-600 pt-4 pb-20 px-5 relative">
                    <h3 className="text-white text-xl font-bold mb-1">{service.name}</h3>
                    
                    <button 
                      onClick={() => toggleFavorite(service.id, service.name)}
                      className="absolute top-3 right-3 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-all"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-white'}`} />
                    </button>
                    
                    <div className="flex items-center text-white/90 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>Commercial Service</span>
                    </div>
                  </div>
                  
                  <div className="px-5 -mt-16 mb-4 relative z-10">
                    <img
                      className="w-full h-40 object-cover rounded-lg shadow-md"
                      src={service.image}
                      alt={service.name}
                    />
                  </div>
                  
                  <div className="px-5 pb-5">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-gray-700 font-medium">{service.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-blue-600 font-bold text-xl">${service.price}</span>
                      <button
                        onClick={() => handleBooking(service.id, service.name)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-all"
                        type="button"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-white rounded-xl shadow-lg overflow-hidden relative"
                >
                  {service.featured && (
                    <div className="absolute top-0 left-0 w-24 h-24 z-10">
                      <div className="absolute transform -rotate-45 translate-y-4 -translate-x-6 bg-blue-600 text-white py-1 px-8 text-xs font-bold">
                        FEATURED
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => toggleFavorite(service.id, service.name)}
                    className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
                  </button>
                  
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src={service.image}
                      alt={service.name}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4">
                      <h3 className="text-white text-lg font-bold">{service.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        Commercial
                      </div>
                      <div className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </div>
                      <div className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {service.rating}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-blue-600 font-bold text-lg">
                        ${service.price}
                      </div>
                      <button
                        onClick={() => handleBooking(service.id, service.name)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-all"
                        type="button"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            }
          } else {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full rounded-xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-90 rounded-xl transform transition-transform group-hover:scale-[0.98] duration-300"></div>
                
                <div className="relative p-1">
                  <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                    {service.featured && (
                      <div className="absolute top-0 right-0 z-10">
                        <div className="bg-yellow-400 text-yellow-800 transform rotate-45 translate-x-5 translate-y-2 px-10 py-1 text-xs font-semibold">
                          Popular
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => toggleFavorite(service.id, service.name)}
                      className="absolute top-3 left-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
                    </button>
                    
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-40 object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        <h3 className="text-white text-lg font-bold">{service.name}</h3>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        ${service.price}
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex justify-between mb-3">
                        <div className="flex items-center text-gray-700 text-sm">
                          <Clock className="w-4 h-4 mr-1 text-teal-600" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          <span>{service.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-1">
                          <Check className="w-4 h-4 text-teal-600" />
                          <span className="text-xs text-gray-600">Specialized</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="w-4 h-4 text-teal-600" />
                          <span className="text-xs text-gray-600">Expert Team</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleBooking(service.id, service.name)}
                        className="w-full mt-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium py-3 rounded-lg shadow-md
                          transition-all hover:shadow-lg active:scale-95"
                        type="button"
                      >
                        Book Service
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cleaning;

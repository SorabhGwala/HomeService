// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Star, 
//   Clock, 
//   Award, 
//   Heart, 
//   Shield, 
//   Check, 
//   MapPin, 
//   Users, 
//   Wrench, 
//   Zap, 
//   Home, 
//   Car,
//   Smartphone,
//   Monitor,
//   Hammer,
//   Settings
// } from 'lucide-react';
// import { toast } from "sonner";

// const services = [
//   {
//     id: 1,
//     name: "Home Appliance Repair",
//     price: 120,
//     image: "/repair.jpg",
//     description: "Expert repair services for all home appliances including refrigerators, washing machines, dishwashers, and more.",
//     rating: 4.8,
//     duration: "2-3 hours",
//     featured: false,
//     type: "residential"
//   },
//   {
//     id: 2,
//     name: "HVAC System Repair",
//     price: 280, 
//     image: "/repair.jpg",
//     description: "Professional heating, ventilation, and air conditioning system repair and maintenance services.",
//     rating: 4.9,
//     duration: "3-5 hours",
//     featured: true,
//     type: "residential"
//   },
//   {
//     id: 3,
//     name: "Plumbing Repair",
//     price: 180,
//     image: "/repair.jpg",
//     description: "Comprehensive plumbing repair services including leak fixes, pipe repairs, and fixture installations.",
//     rating: 4.7,
//     duration: "1-4 hours",
//     featured: false,
//     type: "residential"
//   },
//   {
//     id: 4,
//     name: "Electrical Repair",
//     price: 200,
//     image: "/repair.jpg",
//     description: "Licensed electrician services for wiring repairs, outlet installations, and electrical troubleshooting.",
//     rating: 4.9,
//     duration: "2-4 hours",
//     featured: false,
//     type: "residential"
//   },
//   {
//     id: 5,
//     name: "Smartphone Repair",
//     price: 80,
//     image: "/repair.jpg",
//     description: "Fast and reliable smartphone repair services including screen replacement, battery replacement, and more.",
//     rating: 4.8,
//     duration: "1-2 hours",
//     featured: false,
//     type: "electronics"
//   },
//   {
//     id: 6,
//     name: "Laptop & Computer Repair",
//     price: 150,
//     image: "/repair.jpg",
//     description: "Professional computer repair services including hardware upgrades, virus removal, and system optimization.",
//     rating: 4.7,
//     duration: "2-5 hours",
//     featured: false,
//     type: "electronics"
//   },
//   {
//     id: 7,
//     name: "Auto Repair Services",
//     price: 350,
//     image: "/repair.jpg",
//     description: "Comprehensive automotive repair services including engine diagnostics, brake repair, and maintenance.",
//     rating: 4.9,
//     duration: "4-8 hours",
//     featured: true,
//     type: "automotive"
//   },
//   {
//     id: 8,
//     name: "Roofing Repair",
//     price: 450,
//     image: "/repair.jpg",
//     description: "Expert roofing repair services including leak fixes, shingle replacement, and gutter maintenance.",
//     rating: 5.0,
//     duration: "4-6 hours",
//     featured: false,
//     type: "residential"
//   },
//   {
//     id: 9,
//     name: "Commercial Equipment Repair",
//     price: 500,
//     image: "/repair.jpg",
//     description: "Specialized repair services for commercial equipment, machinery, and industrial systems.",
//     rating: 4.8,
//     duration: "3-8 hours",
//     featured: false,
//     type: "commercial"
//   },
//   {
//     id: 10,
//     name: "Furniture Repair",
//     price: 120,
//     image: "/repair.jpg",
//     description: "Professional furniture restoration and repair services for wooden, upholstered, and antique pieces.",
//     rating: 4.7,
//     duration: "2-4 hours",
//     featured: false,
//     type: "specialty"
//   },
//   {
//     id: 11,
//     name: "Gaming Console Repair",
//     price: 100,
//     image: "/repair.jpg",
//     description: "Expert repair services for gaming consoles including PlayStation, Xbox, Nintendo Switch, and more.",
//     rating: 4.8,
//     duration: "2-3 hours",
//     featured: true,
//     type: "electronics"
//   },
//   {
//     id: 12,
//     name: "Emergency Repair Service",
//     price: 300,
//     image: "/repair.jpg",
//     description: "24/7 emergency repair services for urgent home and business repair needs with rapid response.",
//     rating: 4.9,
//     duration: "1-3 hours",
//     featured: false,
//     type: "emergency"
//   },
//   {
//     id: 13,
//     name: "Flooring Repair",
//     price: 250,
//     image: "/repair.jpg",
//     description: "Professional flooring repair services for hardwood, tile, carpet, and laminate flooring.",
//     rating: 4.7,
//     duration: "3-6 hours",
//     featured: false,
//     type: "residential"
//   },
//   {
//     id: 14,
//     name: "Office Equipment Repair",
//     price: 180,
//     image: "/repair.jpg",
//     description: "Comprehensive repair services for office equipment including printers, copiers, and business machines.",
//     rating: 4.8,
//     duration: "2-4 hours",
//     featured: false,
//     type: "commercial"
//   }
// ];

// const getServiceIcon = (type) => {
//   switch (type) {
//     case 'residential': return <Home className="w-4 h-4" />;
//     case 'electronics': return <Smartphone className="w-4 h-4" />;
//     case 'automotive': return <Car className="w-4 h-4" />;
//     case 'commercial': return <Users className="w-4 h-4" />;
//     case 'emergency': return <Zap className="w-4 h-4" />;
//     case 'specialty': return <Settings className="w-4 h-4" />;
//     default: return <Wrench className="w-4 h-4" />;
//   }
// };

// const Repair = () => {
//   const navigate = useNavigate();
//   const [favorites, setFavorites] = useState([]);
//   const [activeFilter, setActiveFilter] = useState("all");

//   function handleBooking(serviceId, serviceName) {
//     toast.success(`Booking initiated for ${serviceName}`);
//     navigate(`/services?id=${serviceId}`);
//   }

//   function toggleFavorite(id, name) {
//     setFavorites(prev => {
//       if (prev.includes(id)) {
//         toast.info(`Removed ${name} from favorites`);
//         return prev.filter(item => item !== id);
//       } else {
//         toast.success(`Added ${name} to favorites`);
//         return [...prev, id];
//       }
//     });
//   }

//   const filteredServices = activeFilter === "all" 
//     ? services 
//     : services.filter(service => service.type === activeFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6 mt-1">
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-bold text-gray-800 mb-2">
//           Professional Repair Services
//         </h2>
//         <p className="text-gray-600 text-lg">
//           Expert technicians ready to fix what's broken
//         </p>
//       </div>
      
//       <div className="flex justify-center mb-8 flex-wrap gap-2">
//         <button 
//           onClick={() => setActiveFilter("all")}
//           className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
//             ${activeFilter === "all" 
//               ? "bg-orange-600 text-white shadow-md" 
//               : "bg-white text-gray-600 hover:bg-gray-100"}`}
//         >
//           <Wrench className="w-4 h-4" />
//           All Services
//         </button>
//         <button 
//           onClick={() => setActiveFilter("residential")}
//           className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
//             ${activeFilter === "residential" 
//               ? "bg-orange-600 text-white shadow-md" 
//               : "bg-white text-gray-600 hover:bg-gray-100"}`}
//         >
//           <Home className="w-4 h-4" />
//           Home Repair
//         </button>
//         <button 
//           onClick={() => setActiveFilter("electronics")}
//           className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
//             ${activeFilter === "electronics" 
//               ? "bg-orange-600 text-white shadow-md" 
//               : "bg-white text-gray-600 hover:bg-gray-100"}`}
//         >
//           <Monitor className="w-4 h-4" />
//           Electronics
//         </button>
//         <button 
//           onClick={() => setActiveFilter("automotive")}
//           className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
//             ${activeFilter === "automotive" 
//               ? "bg-orange-600 text-white shadow-md" 
//               : "bg-white text-gray-600 hover:bg-gray-100"}`}
//         >
//           <Car className="w-4 h-4" />
//           Automotive
//         </button>
//         <button 
//           onClick={() => setActiveFilter("commercial")}
//           className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
//             ${activeFilter === "commercial" 
//               ? "bg-orange-600 text-white shadow-md" 
//               : "bg-white text-gray-600 hover:bg-gray-100"}`}
//         >
//           <Users className="w-4 h-4" />
//           Commercial
//         </button>
//         <button 
//           onClick={() => setActiveFilter("emergency")}
//           className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2
//             ${activeFilter === "emergency" 
//               ? "bg-red-600 text-white shadow-md" 
//               : "bg-white text-gray-600 hover:bg-gray-100"}`}
//         >
//           <Zap className="w-4 h-4" />
//           Emergency
//         </button>
//       </div>
      
//       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {filteredServices.map((service, index) => {
//           const designVariation = index % 5;
          
//           if (service.type === "residential") {
//             if (designVariation === 0) {
//               return (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{ y: -5 }}
//                   className="w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden relative"
//                 >
//                   <button 
//                     onClick={() => toggleFavorite(service.id, service.name)}
//                     className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
//                   >
//                     <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
//                   </button>

//                   {service.featured && (
//                     <div className="absolute top-3 left-3 z-10">
//                       <span className="bg-yellow-400 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded flex items-center">
//                         <Award className="w-3 h-3 mr-1" />
//                         Featured
//                       </span>
//                     </div>
//                   )}

//                   <div className="relative">
//                     <img
//                       className="w-full h-48 object-cover object-top transition-transform duration-700 hover:scale-110"
//                       src={service.image}
//                       alt={service.name}
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                       <span className="text-white font-semibold text-lg">{service.name}</span>
//                       <span className="absolute bottom-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md">
//                         ${service.price}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="p-5">
//                     <div className="flex items-center mb-3">
//                       <div className="flex items-center mr-4">
//                         <Star className="w-4 h-4 text-yellow-400 mr-1" />
//                         <span className="text-sm font-medium">{service.rating}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Clock className="w-4 h-4 text-orange-500 mr-1" />
//                         <span className="text-sm font-medium">{service.duration}</span>
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600 text-sm mb-5">
//                       {service.description}
//                     </p>
                    
//                     <button
//                       onClick={() => handleBooking(service.id, service.name)}
//                       className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-3 rounded-lg shadow-md 
//                         transition-all duration-300 hover:shadow-lg hover:from-orange-700 hover:to-red-700 active:scale-95"
//                       type="button"
//                     >
//                       Book Repair
//                     </button>
//                   </div>
//                 </motion.div>
//               );
//             } else if (designVariation === 1) {
//               return (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="w-full rounded-xl overflow-hidden relative bg-white shadow-lg border-l-4 border-orange-500"
//                 >
//                   <button 
//                     onClick={() => toggleFavorite(service.id, service.name)}
//                     className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all"
//                   >
//                     <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
//                   </button>

//                   <div className="flex flex-col h-full">
//                     <div className="relative">
//                       <img 
//                         src={service.image} 
//                         alt={service.name}
//                         className="w-full h-40 object-cover" 
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
//                       <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
//                         <h3 className="text-white text-lg font-bold drop-shadow-md">{service.name}</h3>
//                         <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
//                           ${service.price}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="p-5 flex flex-col flex-grow">
//                       <div className="flex justify-between mb-3 text-sm">
//                         <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded">
//                           <Star className="w-4 h-4 text-yellow-500" />
//                           <span>{service.rating}</span>
//                         </div>
//                         <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded">
//                           <Clock className="w-4 h-4 text-orange-500" />
//                           <span>{service.duration}</span>
//                         </div>
//                       </div>
                      
//                       <p className="text-gray-600 text-sm mb-5">
//                         {service.description}
//                       </p>
                      
//                       <button
//                         onClick={() => handleBooking(service.id, service.name)}
//                         className="mt-auto w-full bg-white border-2 border-orange-500 text-orange-600 font-semibold py-2.5 rounded-lg
//                           hover:bg-orange-500 hover:text-white transition-colors duration-300"
//                         type="button"
//                       >
//                         Schedule Repair
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             } else {
//               return (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="w-full bg-white rounded-xl shadow-xl overflow-hidden relative group"
//                 >
//                   <div className="absolute -right-12 top-6 z-10 rotate-45">
//                     <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-1 px-12 text-xs font-bold shadow-md">
//                       ${service.price}
//                     </div>
//                   </div>
                  
//                   <button 
//                     onClick={() => toggleFavorite(service.id, service.name)}
//                     className="absolute top-3 left-3 z-10 bg-white/80 rounded-full p-2 shadow-md transition-all"
//                   >
//                     <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
//                   </button>

//                   <div className="relative">
//                     <img
//                       className="w-full h-44 object-cover transition-all duration-700 group-hover:scale-105"
//                       src={service.image}
//                       alt={service.name}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
//                     <h3 className="absolute bottom-3 left-3 text-white text-lg font-bold">{service.name}</h3>
//                   </div>
                  
//                   <div className="p-5">
//                     <div className="flex justify-between items-center mb-3">
//                       <div className="flex items-center gap-2">
//                         <div className="flex bg-yellow-100 rounded-full px-2 py-0.5 items-center">
//                           <Star className="w-3.5 h-3.5 text-yellow-500 mr-0.5" />
//                           <span className="text-xs font-medium text-yellow-700">{service.rating}</span>
//                         </div>
//                         <div className="flex bg-orange-100 rounded-full px-2 py-0.5 items-center">
//                           <Clock className="w-3.5 h-3.5 text-orange-500 mr-0.5" />
//                           <span className="text-xs font-medium text-orange-700">{service.duration}</span>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600 text-sm mb-4">
//                       {service.description}
//                     </p>
                    
//                     <button
//                       onClick={() => handleBooking(service.id, service.name)}
//                       className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-2.5 rounded-lg shadow-md 
//                         transition-all duration-300 hover:shadow-lg hover:from-red-600 hover:to-orange-600"
//                       type="button"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </motion.div>
//               );
//             }
//           } else if (service.type === "electronics") {
//             if (designVariation === 0) {
//               return (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{ scale: 1.02 }}
//                   className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl shadow-lg overflow-hidden relative"
//                 >
//                   <button 
//                     onClick={() => toggleFavorite(service.id, service.name)}
//                     className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
//                   >
//                     <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
//                   </button>

//                   <div className="relative">
//                     <img
//                       className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
//                       src={service.image}
//                       alt={service.name}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
//                       <h3 className="text-white text-xl font-bold mb-1">{service.name}</h3>
//                       <div className="flex items-center text-white">
//                         <Smartphone className="w-4 h-4 mr-1" />
//                         <span className="text-sm">Tech Repair</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-5">
//                     <div className="flex justify-between items-center mb-4">
//                       <div className="flex items-center">
//                         <Star className="w-4 h-4 text-yellow-500" />
//                         <span className="ml-1 text-gray-700 font-medium">{service.rating}</span>
//                       </div>
//                       <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
//                         ${service.price}
//                       </span>
//                     </div>
                    
//                     <p className="text-gray-600 text-sm mb-4">
//                       {service.description}
//                     </p>
                    
//                     <div className="flex items-center mb-5 text-sm text-gray-500">
//                       <Clock className="w-4 h-4 mr-1" />
//                       <span>{service.duration}</span>
//                     </div>
                    
//                     <button
//                       onClick={() => handleBooking(service.id, service.name)}
//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
//                       type="button"
//                     >
//                       Fix Now
//                     </button>
//                   </div>
//                 </motion.div>
//               );
//             } else {
//               return (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                   whileHover={{ scale: 1.03 }}
//                   className="w-full overflow-hidden rounded-xl shadow-lg bg-white relative"
//                 >
//                   <div className="bg-blue-600 pt-4 pb-20 px-5 relative">
//                     <h3 className="text-white text-xl font-bold mb-1">{service.name}</h3>
                    
//                     <button 
//                       onClick={() => toggleFavorite(service.id, service.name)}
//                       className="absolute top-3 right-3 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-all"
//                     >
//                       <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-white'}`} />
//                     </button>
                    
//                     <div className="flex items-center text-white/90 text-sm">
//                       <Monitor className="w-4 h-4 mr-1" />
//                       <span>Electronics Repair</span>
//                     </div>
//                   </div>
                  
//                   <div className="px-5 -mt-16 mb-4 relative z-10">
//                     <img
//                       className="w-full h-40 object-cover rounded-lg shadow-md"
//                       src={service.image}
//                       alt={service.name}
//                     />
//                   </div>
                  
//                   <div className="px-5 pb-5">
//                     <div className="flex justify-between items-center mb-3">
//                       <div className="flex items-center">
//                         <Star className="w-4 h-4 text-yellow-500 mr-1" />
//                         <span className="text-gray-700 font-medium">{service.rating}</span>
//                       </div>
//                       <div className="flex items-center text-gray-500 text-sm">
//                         <Clock className="w-4 h-4 mr-1" />
//                         <span>{service.duration}</span>
//                       </div>
//                     </div>
                    
//                     <p className="text-gray-600 text-sm mb-4">
//                       {service.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="text-blue-600 font-bold text-xl">${service.price}</span>
//                       <button
//                         onClick={() => handleBooking(service.id, service.name)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-all"
//                         type="button"
//                       >
//                         Repair Now
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             }
//           } else if (service.type === "automotive") {
//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//                 whileHover={{ scale: 1.02 }}
//                 className="w-full bg-white rounded-xl shadow-lg overflow-hidden relative"
//               >
//                 {service.featured && (
//                   <div className="absolute top-0 left-0 w-24 h-24 z-10">
//                     <div className="absolute transform -rotate-45 translate-y-4 -translate-x-6 bg-green-600 text-white py-1 px-8 text-xs font-bold">
//                       FEATURED
//                     </div>
//                   </div>
//                 )}
                
//                 <button 
//                   onClick={() => toggleFavorite(service.id, service.name)}
//                   className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
//                 >
//                   <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
//                 </button>
                
//                 <div className="relative">
//                   <img
//                     className="w-full h-48 object-cover"
//                     src={service.image}
//                     alt={service.name}
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-4">
//                     <h3 className="text-white text-lg font-bold">{service.name}</h3>
//                   </div>
//                 </div>
                
//                 <div className="p-5">
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     <div className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-xs font-medium flex items-center">
//                       <Car className="w-3 h-3 mr-1" />
//                       Auto Service
//                     </div>
//                     <div className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-xs font-medium flex items-center">
//                       <Clock className="w-3 h-3 mr-1" />
//                       {service.duration}
//                     </div>
//                     <div className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-xs font-medium flex items-center">
//                       <Star className="w-3 h-3 mr-1" />
//                       {service.rating}
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-600 text-sm mb-4">
//                     {service.description}
//                   </p>
                  
//                   <div className="flex items-center justify-between mt-4">
//                     <div className="text-green-600 font-bold text

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, Award, Heart, Wrench, Zap, Home, Car } from 'lucide-react';
import { toast } from "sonner";

const repairServices = [
    {
        id: 1,
        name: "AC Repair & Maintenance",
        price: 120,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=300&fit=crop",
        description: "Professional air conditioning repair and maintenance services to keep your home cool and comfortable year-round.",
        rating: 4.9,
        duration: "2-3 hours",
        featured: true,
        type: "home",
        category: "HVAC"
    },
    {
        id: 2,
        name: "Plumbing Emergency Fix",
        price: 180,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
        description: "24/7 emergency plumbing services for leaks, clogs, and pipe repairs. Fast response guaranteed.",
        rating: 4.8,
        duration: "1-4 hours",
        featured: false,
        type: "home",
        category: "Plumbing"
    },
    {
        id: 3,
        name: "Electrical Wiring & Repair",
        price: 200,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop",
        description: "Licensed electricians for safe wiring, outlet installation, and electrical troubleshooting.",
        rating: 4.9,
        duration: "2-5 hours",
        featured: true,
        type: "home",
        category: "Electrical"
    },
    {
        id: 4,
        name: "Smartphone Screen Repair",
        price: 89,
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b75?w=500&h=300&fit=crop",
        description: "Quick and reliable smartphone screen replacement with warranty. Same-day service available.",
        rating: 4.7,
        duration: "30-60 min",
        featured: false,
        type: "electronics",
        category: "Mobile"
    },
    {
        id: 5,
        name: "Laptop Hardware Repair",
        price: 150,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=300&fit=crop",
        description: "Complete laptop repair service including motherboard, screen, keyboard, and component replacement.",
        rating: 4.8,
        duration: "2-4 hours",
        featured: false,
        type: "electronics",
        category: "Computer"
    },
    {
        id: 6,
        name: "Appliance Repair Service",
        price: 140,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
        description: "Expert repair for washing machines, dryers, dishwashers, and other home appliances.",
        rating: 4.6,
        duration: "1-3 hours",
        featured: false,
        type: "home",
        category: "Appliances"
    },
    {
        id: 7,
        name: "Automotive Engine Repair",
        price: 350,
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=300&fit=crop",
        description: "Professional automotive engine diagnostics and repair services by certified mechanics.",
        rating: 4.9,
        duration: "4-8 hours",
        featured: true,
        type: "automotive",
        category: "Engine"
    },
    {
        id: 8,
        name: "Brake System Repair",
        price: 280,
        image: "https://images.unsplash.com/photo-1632823469850-1ba5a87cd928?w=500&h=300&fit=crop",
        description: "Complete brake system inspection, repair, and replacement for safe driving experience.",
        rating: 4.8,
        duration: "2-4 hours",
        featured: false,
        type: "automotive",
        category: "Brakes"
    },
    {
        id: 9,
        name: "Roofing Repair & Patching",
        price: 450,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
        description: "Emergency roof repairs, leak fixing, and shingle replacement by experienced roofers.",
        rating: 4.7,
        duration: "4-6 hours",
        featured: false,
        type: "home",
        category: "Roofing"
    },
    {
        id: 10,
        name: "TV & Monitor Repair",
        price: 120,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=300&fit=crop",
        description: "Professional TV and monitor repair service for all brands. Screen replacement and component repair.",
        rating: 4.6,
        duration: "1-2 hours",
        featured: false,
        type: "electronics",
        category: "Display"
    },
    {
        id: 11,
        name: "Gaming Console Repair",
        price: 95,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=300&fit=crop",
        description: "Expert repair for PlayStation, Xbox, Nintendo Switch, and other gaming consoles.",
        rating: 4.8,
        duration: "1-3 hours",
        featured: false,
        type: "electronics",
        category: "Gaming"
    },
    {
        id: 12,
        name: "Transmission Repair",
        price: 800,
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500&h=300&fit=crop",
        description: "Complete transmission diagnostics, repair, and rebuilding services by certified specialists.",
        rating: 4.9,
        duration: "6-12 hours",
        featured: true,
        type: "automotive",
        category: "Transmission"
    }
];

const RepairServices = () => {
   
    const [favorites, setFavorites] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");

    function handleBooking(serviceId, serviceName) {
        toast.success(`Repair booking initiated for ${serviceName}`);
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
        ? repairServices
        : repairServices.filter(service => service.type === activeFilter);

    const getServiceIcon = (type) => {
        switch (type) {
            case 'home': return <Home className="w-6 h-6 text-orange-600" />;
            case 'electronics': return <Zap className="w-6 h-6 text-purple-600" />;
            case 'automotive': return <Car className="w-6 h-6 text-red-600" />;
            default: return <Wrench className="w-6 h-6 text-gray-600" />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 mt-1">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Repair Services
            </h2>

            <div className="flex justify-center mb-8 flex-wrap gap-2">
                <button
                    onClick={() => setActiveFilter("all")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                        ${activeFilter === "all"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-gray-600 hover:bg-gray-100"}`}
                >
                    All Services
                </button>
                <button
                    onClick={() => setActiveFilter("home")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                        ${activeFilter === "home"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-gray-600 hover:bg-gray-100"}`}
                >
                    Home Repair
                </button>
                <button
                    onClick={() => setActiveFilter("electronics")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                        ${activeFilter === "electronics"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-gray-600 hover:bg-gray-100"}`}
                >
                    Electronics
                </button>
                <button
                    onClick={() => setActiveFilter("automotive")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                        ${activeFilter === "automotive"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-gray-600 hover:bg-gray-100"}`}
                >
                    Automotive
                </button>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredServices.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                        className="w-full rounded-xl overflow-hidden relative bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg border-l-4 border-blue-500"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${service.type === 'home' ? 'bg-orange-100' : service.type === 'electronics' ? 'bg-purple-100' : 'bg-red-100'}`}>
                                    {getServiceIcon(service.type)}
                                </div>
                                <button
                                    onClick={() => toggleFavorite(service.id, service.name)}
                                    className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:shadow-lg transition-all"
                                >
                                    <Heart className={`w-5 h-5 ${favorites.includes(service.id) ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'}`} />
                                </button>
                            </div>

                            <h3 className="text-gray-800 text-xl font-bold mb-2">{service.name}</h3>

                            <div className="flex gap-3 mb-4">
                                <div className="bg-blue-500 text-white rounded-full px-3 py-1 flex items-center text-xs">
                                    <Star className="w-3 h-3 mr-1" />
                                    {service.rating}
                                </div>
                                <div className="bg-white text-blue-600 rounded-full px-3 py-1 flex items-center text-xs border border-blue-200">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {service.duration}
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-6">
                                {service.description}
                            </p>
                        </div>

                        <div className="relative h-40 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <span className={`text-white font-bold text-xl ${service.type === 'home' ? 'text-orange-500' : service.type === 'electronics' ? 'text-purple-500' : 'text-red-500'}`}>${service.price}</span>
                                <button
                                    onClick={() => handleBooking(service.id, service.name)}
                                    className={`bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all`}
                                    type="button"
                                >
                                    Schedule Service
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg"
            >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Emergency Repair?</h3>
                <p className="text-gray-600 mb-6">Our emergency repair team is available 24/7 for urgent situations</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Call Emergency Line: (555) 123-REPAIR
                </button>
            </motion.div>
        </div>
    );
};

export default RepairServices;
import React from 'react';
import HandymanIcon from '@mui/icons-material/Handyman';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import { motion } from 'framer-motion';

// Heroicons for Icons


// Data for services
const services = [
  {
    title: 'Cleaning',
    description: 'Professional cleaning for a spotless home',
    icon: <CleaningServicesIcon className="h-12 w-12" />,
    gradient: 'from-blue-400 via-cyan-500 to-teal-500',
    hoverGradient: 'from-blue-500 via-cyan-600 to-teal-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    buttonColor: 'bg-teal-500 hover:bg-teal-600',
  },
  {
    title: 'Carpentry',
    description: 'Expert woodworking and furniture repair',
    icon: <CarpenterIcon className="h-12 w-12" />,
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    hoverGradient: 'from-amber-500 via-orange-600 to-red-600',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    buttonColor: 'bg-red-500 hover:bg-red-600',
  },
  {
    title: 'Plumbing',
    description: 'Swift and reliable plumbing solutions',
    icon: <PlumbingIcon className="h-12 w-12" />,
    gradient: 'from-emerald-400 via-green-500 to-lime-500',
    hoverGradient: 'from-emerald-500 via-green-600 to-lime-600',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    buttonColor: 'bg-lime-500 hover:bg-lime-600',
  },
  {
    title: 'Electrician',
    description: 'Safe and efficient electrical services',
    icon: <HandymanIcon className="h-12 w-12" />,
    gradient: 'from-purple-400 via-indigo-500 to-blue-500',
    hoverGradient: 'from-purple-500 via-indigo-600 to-blue-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
];

// Individual Service Card
const HomeCard = ({ service  }) => (
  <motion.div
  className="group h-full"
  whileHover={{ scale: 1.05 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
    <div className="relative overflow-hidden h-full rounded-xl shadow-lg">
      {/* Background gradients */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 transition-all duration-300 group-hover:opacity-100`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 transition-all duration-300 group-hover:opacity-90`}
      />
      <div className="relative p-6 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <div className={`rounded-full ${service.iconBg} p-4 shadow-lg`}>
            <div className={service.iconColor}>{service.icon}</div>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-center text-2xl font-bold text-white mb-2">{service.title}</h3>
        {/* Description */}
        <p className="text-center text-white text-lg flex-grow">{service.description}</p>
        {/* Button */}
        <div className="mt-6 flex justify-center">
          <button
            className={`text-white border-2 border-white font-semibold py-2 px-6 rounded-full transition-all duration-300 ${service.buttonColor}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

// Main Component
export default function HomeCards() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Premium Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <HomeCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

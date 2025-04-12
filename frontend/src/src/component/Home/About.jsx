import React from "react";
import HandymanIcon from '@mui/icons-material/Handyman';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';

// Services Data
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
// HomeCard Component
const HomeCard = ({ service }) => (
  <div
    className="group h-full  "
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative overflow-hidden h-full rounded-lg shadow-lg ">
    
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 transition-all duration-300 group-hover:opacity-100`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 transition-all duration-300 group-hover:opacity-90`}
      />
      <div className="relative p-6 flex flex-col h-full">
       
        <div className="mb-4 flex justify-center">
          <div className={`rounded-full ${service.iconBg} p-4 shadow-lg`}>
            <div className={service.iconColor}>{service.icon}</div>
          </div>
        </div>
        
        <h3 className="text-center text-2xl font-bold text-white mb-2">{service.title}</h3>
         <p className="text-center text-white text-lg flex-grow">{service.description}</p>
       
        <div className="mt-6 flex justify-center">
          <button
            className={`text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 ${service.buttonColor}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
);

// About Component
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 scrollbar-hide overflow-auto">
      <section className="container mx-auto">
       
        <div className="w-[85vw] mx-auto border-2 border-stone-300 rounded-2xl p-8 text-black">
          <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-8">
            About Home Care
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <p className="w-full md:w-[50%] text-lg leading-relaxed">
            The HomeCare Company is your one-stop solution to all your home based service requirements. It has become a pioneer in the home service marketplace in India, by providing hassle-free home services to both professionals as well as consumers. We’ve found this platform for the entire country to get linked with diverse service providers. <br /><br />

We are a market place for all the home service needs and we simplify your everyday living through our trained technicians, experts and professionals who are well trained to serve you. All our vendors at HomeCare are unique, innovative and experienced who are taken on board only after their background is checked and verified. Also, as per our company policy, they are provided with customized training and briefing.<br /><br />

Product improvement and technology advancements have now allowed us to handle the issues of the smashed services marketplace. Our platform aims to remove unnecessary human interference by our sophisticated data analysis. It scans for on spot professionals who are closest to attend the customers’ needs and then furnish this choice to the clients as well as the professionals nearby. <br />

Our services include all types of Home Cleaning services, Electronics & Appliances Repair, Plumbing, Electrician, Carpenter, Painting, Car/Bike Repair, Laptop/Desktop Repair and a lot more. At the moment, we are actively rendering our services in cities like Bengaluru, Pune, Mysuru, New Delhi, Gurugram, Noida, Ghaziabad, Faridabad, Greater Noida. But we are constantly growing and in the near future we would extend our services to rest of the country. </p>
            <img className="w-full md:w-[50%] rounded-2xl shadow-md" src="  /cleaning.jpg" alt="Home Care" />
            </div>

       
        <div className="mt-16">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <HomeCard key={index} service={service} />
            ))
            }
               
           </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

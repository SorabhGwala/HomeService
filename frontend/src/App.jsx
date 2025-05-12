import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './src/component/Home/Navbar'
import HomeSection from './src/component/Home/HomSection';
import HomeCards from './src/component/Home/HomeCard';
import BookCard from './src/component/Home/BookCard';
import BookCardService from './src/component/Home/BookCardService';
import ServicePage from './src/component/Service/ServicePage';
import AllService from './src/component/Service/ALLService';
import Repairing from './src/component/Service/Repairing';
import Cleaning from './src/component/Service/Cleaning';
import Login from './src/component/Home/Registration/Login';
import Signup from './src/component/Home/Registration/Signup';
import Footer from './src/component/Home/Footer/Footer';
import About from './src/component/Home/About';
import PartnerNav from './src/component/Home/Registration/PartnerNav';
import MenuBar from './src/component/Home/MenuBar';

import { HomeRounded } from '@mui/icons-material';
import { CleaningServicesRounded } from '@mui/icons-material';
import { BuildRounded } from '@mui/icons-material';
import { PlumbingRounded } from '@mui/icons-material';
import { ElectricBoltRounded } from '@mui/icons-material';
import ForgetPassword from './src/component/Home/Registration/ForgetPage';
import VerifyOtp from './src/component/Home/Registration/VerifyOtp';
import UpdatePassword from './src/component/Home/Registration/UpdatePassword';

const Sidebar = () => {
  const menuItems = [
    { icon: <HomeRounded size={20} />, label: "Home" },
    { icon: <CleaningServicesRounded size={20} />, label: "Cleaning" },
    { icon: <BuildRounded size={20} />, label: "Repairing" },
    { icon: < PlumbingRounded size={20} />, label: "Plumbing" },
    { icon: <ElectricBoltRounded size={20} />, label: "Electric" },
  ];
  return (
    <div className=''>

    <div className=" fixed top-1/2 left-2  text-gray-500    transform -translate-y-1/2 flex flex-col items-center bg-gray-900 rounded-3xl shadow-xl py-3 px-2 w-14 hover:w-48 transition-all duration-300 ease-in-out overflow-hidden hover:text-gray-300  hover:bg-opacity-100">
    {menuItems.map((item, index) => (
      <div
        key={index}
        className=" hover:text-white group flex items-center space-x-4 cursor-pointer  transition-all duration-300 ease-in-out hover:scale-105 px-1 py-2 rounded-2xl hover:bg-gray-700 w-full"
      >
        {/* Fixed Size Box to Keep Icon Centered */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full  p-2 mr-2 ">
          {item.icon}
        </div>

        {/* Smooth Text Reveal on Hover Without Shifting */}
        <span className="opacity-0 scale-90 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap overflow-hidden">
          {item.label}
        </span>
      </div>
    ))}
  </div>
    </div>
  );
};


function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <Navbar />
        <MenuBar/>
          <HomeSection />
          <HomeCards />
          <BookCard/>
          <Footer />
        </>
      ),
    },
    {
      path: "/Login",
      element: <div>
      <Navbar/>
    <Login /><Footer/>
    </div>
    },
    {
      path: "/Signup",
      element: <div>
        <Navbar/>
      <Signup /><Footer/>
      </div>
    },
    {
      path: "/Become a Partner",
      element: <div>
        <Navbar/>
      <PartnerNav /><Footer/>
      </div>
    },
    {
      path: "/BookCardService",
      element: <div>
        <Navbar/>
        <BookCardService></BookCardService>
      <Footer/>
      </div>
    },
    {
      path:"/ServicePage",
      element: <div>
          <Navbar/>
        <ServicePage/>
        <Footer/>
      </div>
      
    },
    {
      path: "/BookCard",
      element:
      <div>
       <BookCard/>
       </div>
    },
    {
      path: "/about",
      element:<div>
      <Navbar/>
    <About/>
    <Footer/>
    </div>
    },
    {
      path: "/ServiceCleaning",
      element:<div>
      <Navbar/>
    <Cleaning/>
    <Footer/>
    </div>
    },
   
    {
      path: "/AllService",
      element:<div>
      <Navbar/>
    <AllService/>
    <Footer/>
    </div>
    },
   
    {
      path: "/Repairing",
      element:<div>
      <Navbar/>
    <Repairing/>
    <Footer/>
    </div>
    },
    {
      path: "/ForgetPassword",
      element:<div>
      <Navbar/>
    <ForgetPassword/>
    <Footer/>
    </div>
    },
    {
      path: "/VerifyOTP",
      element:<div>
      <Navbar/>
    <VerifyOtp/>
    <Footer/>
    </div>
    },
   
    {
      path: "/UpdatePassword",
      element:<div>
      <Navbar/>
    <UpdatePassword/>
    <Footer/>
    </div>
    },
   
  ]);

  return (
    <div className='  '>
       <RouterProvider router={router} />
         <Sidebar  />
      
  </div>

  
  )
}

export default App;

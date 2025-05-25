import React, { Suspense } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load components
const Navbar = React.lazy(() => import('./src/component/Home/Navbar'));
const HomeSection = React.lazy(() => import('./src/component/Home/HomSection'));
const HomeCards = React.lazy(() => import('./src/component/Home/HomeCard'));
const BookCard = React.lazy(() => import('./src/component/Home/BookCard'));
const BookCardService = React.lazy(() => import('./src/component/Home/BookCardService'));
const ServicePage = React.lazy(() => import('./src/component/Service/ServicePage'));
const AllService = React.lazy(() => import('./src/component/Service/ALLService'));
const Repairing = React.lazy(() => import('./src/component/Service/Repairing'));
const Cleaning = React.lazy(() => import('./src/component/Service/Cleaning'));
const Login = React.lazy(() => import('./src/component/Home/Registration/Login'));
const Signup = React.lazy(() => import('./src/component/Home/Registration/Signup'));
const Footer = React.lazy(() => import('./src/component/Home/Footer/Footer'));
const About = React.lazy(() => import('./src/component/Home/About'));
const PartnerNav = React.lazy(() => import('./src/component/Home/Registration/PartnerNav'));
const MenuBar = React.lazy(() => import('./src/component/Home/MenuBar'));
const ForgetPassword = React.lazy(() => import('./src/component/Home/Registration/ForgetPage'));
const ResetPassword = React.lazy(() => import('./src/component/Home/Registration/ResetPassword'));
const VerifyOtp = React.lazy(() => import('./src/component/Home/Registration/VerifyOtp'));
const UpdatePassword = React.lazy(() => import('./src/component/Home/Registration/UpdatePassword'));
const LoadingAnimation = React.lazy(() => import('./src/component/Home/LoadingAnimation'));

import {
  HomeRounded,
  CleaningServicesRounded,
  BuildRounded,
  PlumbingRounded,
  ElectricBoltRounded,
} from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { icon: <HomeRounded size={20} />, label: "Home" },
    { icon: <CleaningServicesRounded size={20} />, label: "Cleaning" },
    { icon: <BuildRounded size={20} />, label: "Repairing" },
    { icon: <PlumbingRounded size={20} />, label: "Plumbing" },
    { icon: <ElectricBoltRounded size={20} />, label: "Electric" },
  ];
  return (
    <div className=''>
      <div className=" fixed top-1/2 left-2 text-gray-500 transform -translate-y-1/2 flex flex-col items-center bg-gray-900 rounded-3xl shadow-xl py-3 px-2 w-14 hover:w-48  overflow-hidden hover:bg-transparent hover:text-gray-300 hover:bg-opacity-100">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className=" hover:text-white group flex items-center space-x-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 px-1 py-2 rounded-2xl w-full"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full p-2 mr-2 ">
              {item.icon}
            </div>
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
          <MenuBar />
          <HomeSection />
          <HomeCards />
          <BookCard />
          <Footer />
        </>
      ),
    },
    {
      path: "/Login",
      element: <><Navbar /><Login /><Footer /></>,
    },
    {
      path: "/Signup",
      element: <><Navbar /><Signup /><Footer /></>,
    },
    {
      path: "/Become a Partner",
      element: <><Navbar /><PartnerNav /><Footer /></>,
    },
    {
      path: "/BookCardService",
      element: <><Navbar /><BookCardService /><Footer /></>,
    },
    {
      path: "/ServicePage",
      element: <><Navbar /><ServicePage /><Footer /></>,
    },
    {
      path: "/BookCard",
      element: <BookCard />,
    },
    {
      path: "/about",
      element: <><Navbar /><About /><Footer /></>,
    },
    {
      path: "/ServiceCleaning",
      element: <><Navbar /><Cleaning /><Footer /></>,
    },
    {
      path: "/AllService",
      element: <><Navbar /><AllService /><Footer /></>,
    },
    {
      path: "/Repairing",
      element: <><Navbar /><Repairing /><Footer /></>,
    },
    {
      path: "/ForgetPassword",
      element: <><Navbar /><ForgetPassword /><Footer /></>,
    },
    {
      path: "/reset-password",
      element: <><Navbar /><ResetPassword /><Footer /></>,
    },
    {
      path: "/VerifyOTP",
      element: <><Navbar /><VerifyOtp /><Footer /></>,
    },
    {
      path: "/UpdatePassword",
      element: <><Navbar /><UpdatePassword /><Footer /></>,
    },
  ]);

  return (
    <div className=''>
      <Suspense fallback={<LoadingAnimation />}> {/* Use the animated loader */}
        <RouterProvider router={router} />
        <Sidebar />
      </Suspense>
    </div>
  );
}

export default App;

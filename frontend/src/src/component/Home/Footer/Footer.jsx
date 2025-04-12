import React from 'react';
import { Instagram, Facebook, WhatsApp, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="flex justify-center bg-gray-700 text-white">
      <div className="w-full max-w-7xl px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
       
           
        

          {/* Product Section */}
          <div>
            <h1 className="text-xl font-serif mb-3">COMPANY</h1>
            <ul className="text-gray-300 space-y-2">
              <li>About us   </li>
              <li>
              Privacy policy   </li>
              <li>Impact </li>
              <li>HF/VHF Equipment</li>
              <li>Careers </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-serif mb-3">PRODUCT</h1>
            <ul className="text-gray-300 space-y-2">
              <li>reviews </li>
              <li>Categories near you </li>
              <li>Blog </li>
              <li>Contact us </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h1 className="text-xl font-serif mb-3">For partners</h1>
            <ul className="text-gray-300 space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h1 className="text-xl font-serif mb-3">SUPPORT</h1>
            <ul className="text-gray-300 space-y-2">
              <li>Register as a professional </li>
             
            </ul>
          </div>
        </div>

        {/* Contact Info */}
       

        {/* Footer Bottom */}
        <div className="mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Spotless Space Booking. All rights reserved.</p>
        </div>
          
          <div className="flex justify-center mt-4 space-x-4 text-gray-300">
            <Instagram />
            <Facebook />
            <WhatsApp />
            <Twitter />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;


import React from 'react';

import { motion } from 'framer-motion';
import { Shield, Star, Clock } from 'lucide-react';

const Bookcard = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 ">
      <header className="bg-white shadow-md py-10 border-t-2 border-gray-600 rounded-3xl">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center text-gray-800">Spotless Space Booking</h1>
            <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Professional cleaning services at your fingertips. We deliver quality, convenience, and satisfaction.</p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-100 p-3 rounded-full mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Guaranteed Quality</h3>
                <p className="text-sm text-gray-600">100% satisfaction or your money back</p>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-100 p-3 rounded-full mb-3">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Vetted Professionals</h3>
                <p className="text-sm text-gray-600">Background-checked, trained experts</p>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-100 p-3 rounded-full mb-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">Flexible Scheduling</h3>
                <p className="text-sm text-gray-600">Book services at your convenience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>
      
     
      
     
    </div>
  );
};

export default Bookcard;

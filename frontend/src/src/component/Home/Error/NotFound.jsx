import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-24 w-24 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 17L9 21l3.75-2.25L16.5 21l-.75-4L20 12h-5.25L12 8.25 9.75 12H4l3.75 5z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-blue-600 mb-2">Welcome to HomeCare+</h1>
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Trusted Home Services at Your Doorstep
        </h2>
        <p className="text-gray-600 mb-6">
          Book electricians, plumbers, cleaners, appliance repair, and more — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded transition-colors duration-200"
          >
            Explore Services
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

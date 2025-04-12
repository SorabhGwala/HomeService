import React from 'react';

const PartnerNav = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 px-4 py-8">
      {/* Image Section */}
      <div className="flex justify-center items-center lg:w-1/2 mb-8 lg:mb-0">
        <img
          className="w-full max-w-lg lg:w-[40vw] h-auto"
          src="./undraw_collab_h1mq.png"
          alt="Collaboration"
        />
      </div>

      {/* Form Section */}
      <section className="bg-white border border-gray-200 rounded-xl shadow-lg w-full max-w-lg lg:w-[45vw] p-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Become A Partner
          </h1>
        </div>

        {/* Category Selection */}
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Select Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="cleaning">Cleaning</option>
            <option value="plumbing">Plumbing</option>
            <option value="carpentry">Carpentry</option>
            <option value="repairing">Repairing</option>
          </select>
          <input
            className="mt-4 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            type="search"
            id="search"
            placeholder="Enter search category"
          />
        </div>

        {/* Form Inputs */}
        <div className="space-y-6">
          <div>
            <label htmlFor="Name" className="block mb-2 font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              id="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="Email" className="block mb-2 font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              id="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block mb-2 font-medium text-gray-700">
              Mobile*
            </label>
            <input
              type="number"
              id="mobile"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="Upload" className="block mb-2 font-medium text-gray-700">
              Upload CV*
            </label>
            <input
              type="file"
              id="Upload"
              className="w-full bg-gray-50 text-gray-600 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 mt-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium rounded-md hover:bg-gradient-to-l focus:ring-4 focus:ring-indigo-300 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnerNav;

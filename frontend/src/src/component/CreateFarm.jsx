import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const CreateFarm = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-sm mx-auto mt-10 relative">
    
      {/* Input Field */}
      <div className="relative z-0 w-full group">
        <input
          type="text"
          name="floating_input"
          id="floating_input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-green-900 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_input"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-[#fcfaf7] px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-3 left-2"
        >
          Your Name
        </label>

       
          <div className="absolute right-2 top-1/2  -mt-2">
            <ArrowRight className="w-5 h-5 text-green-700" />
          </div>
      
      </div>
    </div>
  );
};

export default CreateFarm;

import { useRegisterUserMutation } from '@/feature/api/authApi';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {    
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const [registerUser, { data: registerData, error: registerError, isLoading: registerIsloading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      await registerUser(formData);
      console.log("User Registered:", formData);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
     
      toast.success(registerData.message ||"Registration successful! ");
    }

    if(registerError){
      toast.error(registerError.data.message || "Registration failed! Please try again.");
    }

    
   
  }
  , [registerIsSuccess, registerData, registerError]);




  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-[80vw] max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white">
        
        {/* Left Section */}
        <div className="md:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-semibold mb-4">Welcome, New User!</h2>
          <img
            src="https://cdnl.iconscout.com/lottie/premium/thumb/signup-form-animation-download-in-lottie-json-gif-svg-file-formats-user-registration-ui-template-profile-5627366.gif"
            alt="Sign-Up Animation"
            className="w-48"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Sign Up</h1>
          <form className="space-y-5">
            
            {/* name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button 
              disabled={registerIsloading}
              onClick={handleClick}
              className={`w-full py-3 mt-4 text-white font-semibold rounded-lg shadow-md transition-transform transform
                ${registerIsloading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 hover:scale-105 hover:shadow-lg"}
              `}
            >
              {registerIsloading ? (
                <>
                  <Loader2 className='m-2 w-4 h-4 animate-spin' /> Please Wait..
                </>
              ) : "Signup"}
            </button>

            <p className='text-stone-500'>Already have an acount ? <button onClick={()=> navigate('/login')} className='text-indigo-600 underline'>Signin</button></p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Signup;

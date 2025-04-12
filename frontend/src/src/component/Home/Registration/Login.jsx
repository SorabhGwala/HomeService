import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    const user = { email, password };
    console.log(user);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-[80vw] max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white">
        
        {/* Left Section */}
        <div className="md:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-semibold mb-4">Hello, Friend!</h2>
          <img
            src="https://cdnl.iconscout.com/lottie/premium/thumb/profile-login-animation-download-in-lottie-json-gif-static-svg-file-formats--account-sign-user-business-pack-people-animations-5627366.gif"
            alt="Login Animation"
            className="w-48"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login</h1>
          <form className="space-y-5">
            
            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleClick}
              className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
// sorabhgwala
// WDBnvwhTpHS8KNz1
// mongodb+srv://sorabhgwala:WDBnvwhTpHS8KNz1@cluster0.lts2wyu.mongodb.net/

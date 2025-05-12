import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Password reset to:', password);
    // You can make an API call here to actually reset the password

    navigate('/login'); // Redirect after reset
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white">

        {/* Left Section */}
        <div className="md:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white flex flex-col items-center justify-center p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Set New Password</h2>
          <img
            src="https://cdnl.iconscout.com/lottie/premium/thumb/password-reset-5047782-4213410.gif"
            alt="Reset Password Animation"
            className="w-40 sm:w-48 md:w-56"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700 mb-6">Reset Password</h1>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Password Field */}
            <div>
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Reset Password
            </button>

            <p className="text-stone-500 text-center">
              Remember your password?{' '}
              <button onClick={() => navigate('/login')} className="text-indigo-600 underline">
                Login
              </button>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;

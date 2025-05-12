import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';

const VerifyOtp = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) inputRefs.current[index - 1].focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOtp = otp.join('');
    navigate("/UpdatePassword")
    console.log('Submitted OTP:', finalOtp);
    // Add actual OTP verification logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white">

        {/* Left Section */}
        <div className="md:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white flex flex-col items-center justify-center p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Verify OTP</h2>
          <img
            src="https://cdnl.iconscout.com/lottie/premium/thumb/otp-authentication-5026286-4196843.gif"
            alt="OTP Animation"
            className="w-40 sm:w-48 md:w-56"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700 mb-6">Enter 6-digit OTP</h1>
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">

            {/* OTP Inputs */}
            <div className="flex justify-center gap-2 sm:gap-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500  focus:border-indigo-600 shadow-sm"
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>
            <div > <Timer/> </div>

            {/* Submit Button */}
            <button
              type="submit"

              className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Verify OTP
            </button>

            {/* Resend Option */}
            <p className="text-sm sm:text-base text-stone-500 text-center">
              Didn’t receive OTP?{' '}
              <button
                type="button"
                onClick={() => console.log('Resend OTP')}
                className="text-indigo-600 underline"
              >
                Resend
              </button>
            </p>

            {/* Back to Login */}
            <p className="text-sm sm:text-base text-stone-500 text-center">
              <button
                onClick={() => navigate('/login')}
                className="text-indigo-600 underline"
              >
                Back to Login
              </button>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// ✅ Use .env or fallback to localhost:8080
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'otp'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Failed to send OTP');
      }

      toast.success('OTP sent to your email');
      setStep('otp');
    } catch (error) {
      toast.error(error.message || 'Error sending OTP');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'OTP verification failed');

      toast.success('OTP verified. Redirecting...');
      setTimeout(() => {
        navigate('/reset-password');
      }, 1500);
    } catch (error) {
      toast.error(error.message || 'OTP verification failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-[80vw] max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white">

        {/* Left Section */}
        <div className="md:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-semibold mb-4">Reset Your Password</h2>
          <img
            src="/assets/forgot-password.svg"
            alt="Forgot Password"
            className="w-48"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Forgot Password</h1>

          <form onSubmit={step === 'email' ? handleSendOtp : handleVerifyOtp} className="space-y-5">

            {/* Step 1: Email Input */}
            {step === 'email' && (
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}

            {/* Step 2: OTP Input */}
            {step === 'otp' && (
              <div>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none"
            >
              {isSubmitting
                ? 'Processing...'
                : step === 'email'
                ? 'Send OTP'
                : 'Verify OTP'}
            </button>

            {step === 'email' && (
              <p className="text-stone-500 text-center">
                Remember your password?{' '}
                <button onClick={() => navigate('/login')} className="text-indigo-600 underline">
                  Login
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

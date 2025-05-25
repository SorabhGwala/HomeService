import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Timer from './Timer';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [step, setStep] = useState('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

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

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join('');
    if (finalOtp.length < 6) return toast.error('Please enter complete OTP');

    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: finalOtp }),
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

  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (!value) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < 5 && value) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
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
          <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            {step === 'email' ? 'Forgot Password' : 'Enter 6-digit OTP'}
          </h1>

          <form onSubmit={step === 'email' ? handleSendOtp : handleVerifyOtp} className="space-y-5 flex flex-col items-center">

            {/* Email Step */}
            {step === 'email' && (
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            {/* OTP Step */}
            {step === 'otp' && (
              <>
                <div className="flex gap-2 sm:gap-3 justify-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-600 shadow-sm"
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                    />
                  ))}
                </div>
                <Timer />
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
            >
              {isSubmitting
                ? 'Processing...'
                : step === 'email'
                ? 'Send OTP'
                : 'Verify OTP'}
            </button>

            {/* Footer Links */}
            {step === 'email' && (
              <p className="text-stone-500 text-center">
                Remember your password?{' '}
                <button onClick={() => navigate('/login')} className="text-indigo-600 underline">
                  Login
                </button>
              </p>
            )}

            {step === 'otp' && (
              <>
                <p className="text-sm text-stone-500 text-center">
                  Didn’t receive OTP?{' '}
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="text-indigo-600 underline"
                  >
                    Resend
                  </button>
                </p>
                <p className="text-sm text-stone-500 text-center">
                  <button
                    onClick={() => navigate('/login')}
                    className="text-indigo-600 underline"
                  >
                    Back to Login
                  </button>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

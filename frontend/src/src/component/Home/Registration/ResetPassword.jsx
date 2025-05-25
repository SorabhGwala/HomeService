import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const ResetPassword = () => {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
    isSubmitting: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (form.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setForm((prev) => ({ ...prev, isSubmitting: true }));

    try {
      const res = await fetch('http://localhost:8080/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: form.password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Reset failed');

      toast.success('Password reset successful');
      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      toast.error(error.message || 'Reset failed');
    } finally {
      setForm((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-5">
          <div>
            <input
              type="password"
              name="password"
              placeholder="New Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={form.isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            {form.isSubmitting ? 'Resetting...' : 'Reset Password'}
          </button>

          <p className="text-center text-stone-500">
            Back to{' '}
            <button onClick={() => navigate('/login')} className="text-indigo-600 underline">
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

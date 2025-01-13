'use client'
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ , setIsSignedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (like API call)
    setIsSignedIn(true); // Example: after successful login
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" p-8 rounded-lg  w-full sm:w-96">
        {/* Logo */}
        <div className="text-center mb-6">
          <img src="/Vector1.svg" alt="Nike Logo" className="w-24 mx-auto" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="h-4 w-4 text-black border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Keep me signed in</label>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgotten your password?</a>
          </div>
          {/* Terms and Privacy Policy */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              By logging in, you agree to Nike s
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Use</a>.
            </p>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
          >
            SIGN IN
          </button>

          {/* Sign up link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Not a Member?{' '}
              <a href="/JoinUs" className="text-blue-600 hover:underline">Join Us.</a>
            </p>
          </div>
        </form>


      </div>
    </div>
  );
};

export default LoginForm;

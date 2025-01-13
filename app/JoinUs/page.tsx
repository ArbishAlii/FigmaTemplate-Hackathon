'use client';
import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('India');
  const [gender, setGender] = useState('');
  const [subscribeEmails, setSubscribeEmails] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (like API call)
  };

  return (
    <div className="flex justify-center items-center h-100">
      <div className=" p-8 rounded-lg w-full sm:w-96 md:w-80 lg:w-1/2 max-w-md mx-auto mt-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <img src="/Vector1.svg" alt="Nike Logo" className="w-24 mx-auto" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email address</label>
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
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
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

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your last name"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-gray-700 mb-1">Country</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Canada">Pakistan</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-gray-700 mb-1">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Subscribe to Emails */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribeEmails"
              checked={subscribeEmails}
              onChange={() => setSubscribeEmails(!subscribeEmails)}
              className="mr-2"
            />
            <label htmlFor="subscribeEmails" className="text-gray-700">Sign up for emails to get updates from Nike on products, offers and your Member benefits</label>
          </div>
     {/* Terms and Privacy Policy */}
     <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            By creating an account, you agree to Nike s
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Use</a>.
          </p>
        </div>
          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
          >
            JOIN US
          </button>

          {/* Already a Member? Sign In link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already a Member?{' '}
              <a href="/LoginForm" className="text-blue-600 hover:underline">Sign In.</a>
            </p>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default SignUpForm;

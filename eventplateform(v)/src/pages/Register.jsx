import React, { useState } from "react";


const Register = () => {
   
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('attendee');


  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Centered Header - reduced vertical padding */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-blue-400">Create Account</h2>
        <p className="mt-1 text-gray-400">
          Join us to start booking or hosting events
        </p>
      </div>

      {/* Two Panel Layout - adjusted padding and gap */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full mb-4">
        {/* Left Panel - Registration Form */}
        <div className="flex-1 h-full">
          <div className="bg-gray-800 rounded-lg px-6 py-4 h-full">
            <form className="space-y-3">
              {/* Email Field - reduced height */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  id="email"
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field - reduced height */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-blue-400 mb-2"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)} 
                  id="password"
                  type="password"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Create a password"
                />
                <p className="mt-1 text-xs text-gray-400">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Confirm Password Field - reduced height */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-blue-400 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Confirm your password"
                />
              </div>

              {/* Role Selection - reduced padding */}
              <div>
                <label className="block text-sm font-medium text-blue-400 mb-2">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center p-2 border border-gray-600 rounded-lg hover:border-blue-500 cursor-pointer">
                    <input
                      value={'attendee'}
                      onChange={(e)=> setRole(e.target.value)}
                      checked={role === 'attendee'}
                      type="radio"
                      id="attendee"
                      name="role"
                      className="h-3 w-3 text-blue-500 focus:ring-blue-500 border-gray-600 bg-gray-700"
                    />
                    <label
                      htmlFor="attendee"
                      className="ml-2 block text-sm text-gray-100"
                    >
                      Attendee
                    </label>
                  </div>
                  <div className="flex items-center p-2 border border-gray-600 rounded-lg hover:border-blue-500 cursor-pointer">
                    <input
                      value={'host'}
                      onChange={(e)=>setRole(e.target.value)}
                      checked={role ==='host'}
                      type="radio"
                      id="host"
                      name="role"
                      className="h-3 w-3 text-blue-500 focus:ring-blue-500 border-gray-600 bg-gray-700"
                    />
                    <label
                      htmlFor="host"
                      className="ml-2 block text-sm text-gray-100"
                    >
                      Host
                    </label>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions - adjusted size */}
              <div className="flex items-center mb-3">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-3 w-3 text-blue-500 focus:ring-blue-500 border-gray-600 bg-gray-700 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-xs text-gray-400"
                >
                  I agree to the{" "}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {/* Register Button - reduced padding */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 text-sm mt-8"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>

        {/* Right Panel - Social Login - adjusted height */}
        <div className="md:w-80 h-64">
          <div className="bg-gray-800 rounded-lg p-8 h-full">
            <div className="space-y-6">
              <div className="text-center">
                <span className="text-gray-400">Already have an account? </span>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Sign in
                </a>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition duration-200">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  Google
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition duration-200">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.485 0-.236-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.579.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

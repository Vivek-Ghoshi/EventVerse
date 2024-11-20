import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className=''>
    <header className="bg-gray-900 shadow-md w-full h-full">
   
      <nav className="container text-white mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          EventVerse
        </div>

        <div className="flex items-center  gap-6">
          <div className="text-gray-600 hover:text-blue-600 text-white transition-colors">
            Home
          </div>
         
            <>
              <div className="text-gray-600 hover:text-blue-600 text-white transition-colors">
                Dashboard
              </div>
              <button className="text-gray-600 hover:text-blue-600 text-white transition-colors">
                Logout
              </button>
            </>
          
            <>
             <div className="text-gray-600 hover:text-blue-600 text-white transition-colors">
                Login
              </div>
              <div
                className="bg-blue-600 text-white px-4 py-2 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Register
              </div>
            </>
        
        </div>
     
      </nav>
      <div className="container mx-auto px-4 py-3 border-t border-gray-200">
        <form  className="flex gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
            
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <select
            
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="upcoming">Upcoming Events</option>
            <option value="popular">Popular</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="arts">Arts & Theater</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </header>
    </div>
  );
};

export default Header;

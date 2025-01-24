import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location=useLocation()

  return (
    <nav className="bg-red-50 mt-1 shadow-sm rounded-full sticky top-1 z-50">
      <div className="container mx-auto px-4 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo and Links */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="animate-bounce">
              <img
                src="/logo2.png"
                alt="Logo"
                className="w-12 h-10 md:w-14 md:h-14 rounded-lg object-cover"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-red-500 hover:text-red-600 transition duration-300">
              Book Table
            </h1>
          </div>
          <div className="hidden lg:ml-20 md:flex space-x-6 font-serif">
            <Link
              to="/"
              className={`text-black ${location.pathname === '/' ? 'px-3 py-1 bg-red-500 text-white rounded-lg' : ''} text-lg px-3 py-1 bg-red-200 rounded-lg font-bold hover:text-primary transition duration-300`}
            >
              Table
            </Link>
            <Link
              to="/dashboard"
              className={`text-black ${location.pathname === '/dashboard' ? 'px-3 py-1 bg-red-500 text-white rounded-lg' : ''} text-lg px-3 py-1 bg-red-200 rounded-lg font-bold hover:text-primary transition duration-300`}
            >
              Dashboard
            </Link>
          </div>
        </div>

        {/* Login Button and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <a
            href="#login"
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg shadow-md text-lg font-medium hover:bg-red-600 transition-all duration-300"
          >
            Login
          </a>
          {/* Hamburger Menu Icon */}
          <button
            className="block md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-700 font-bold hover:bg-primary hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Table
          </Link>
          <Link
            to="/dashboard"
            className="block px-6 py-3 text-gray-700 font-bold hover:bg-primary hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="block px-6 py-3 text-gray-700 font-bold hover:bg-primary hover:text-white transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

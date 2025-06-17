// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "./Navbar.css";


const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Site Name */}
          <Link to="/" className="text-xl font-bold text-blue-700">
            consilium consultancy firm
          </Link>

          {/* Links */}
          <div className="space-x-6 hidden md:flex">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/book" className="text-gray-700 hover:text-blue-600">Book</Link>
            <Link to="/book" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>


              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button - optional future feature */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          <Link to="/blog" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Blog</Link>

        </button>
      </div>
       {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow mt-2 p-4 space-y-4 rounded">
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/book" className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" onClick={() => setIsOpen(false)}>Book</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>

        </div>
      )}
      </div>
      
    </nav>
  );
};

export default Navbar;

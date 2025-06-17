import React from 'react';
import { motion } from "framer-motion";








const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold">Fiducia Capital</h2>
          <p className="text-sm text-gray-400 mt-2">
            Empowering your financial future with trusted advice.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/book" className="hover:underline">Book</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-300">Nairobi, Kenya</p>
          <p className="text-sm text-gray-300">+254 7026 15905</p>
          <p className="text-sm text-gray-300">info@consilium consultancy firm@gmail.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Stay Informed</h3>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 rounded text-black mb-2"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Fiducia Capital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

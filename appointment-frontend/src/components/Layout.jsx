// src/components/Layout.jsx
import React from 'react';



const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800 font-sans">
    <Navbar />
    <main className="flex-1 p-4 flex justify-center">{children}</main>
    <Footer />
  </div>
);

export default Layout;

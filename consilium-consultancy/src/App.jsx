// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Contact from './pages/Contact';
import Layout from './components/Layout';




// TEMP Pages to test routes
const Home = () => (
  
  
    <div className="flex flex-col items-center justify-center bg-slate-50 text-gray-800">

    <Hero />
    <ServicesSection />
    <WhyChooseUs />
    <Footer />
    <Testimonials/>
    <Contact/>
    {/* <Layout/> */}
    </div>
  
);
const About = () => <div className="p-4 text-2xl">About Us</div>;
const Services = () => <div className="p-4 text-2xl">Our Services</div>;
// const Blog = () => <div className="p-4 text-2xl">Blog</div>;
// const Contact = () => <div className="p-4 text-2xl">Contact</div>;
const Book = () => <div className="p-4 text-2xl">Book Appointment</div>;

function App() {
  return (
    <Router>
      
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Layout> <Home /></Layout>}/>


      </Routes>
    </Router>
  );
}

export default App;

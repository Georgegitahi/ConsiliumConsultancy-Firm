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
import AnimatedBackground from './components/AnimatedBackground';

// Enhanced Home Component
const Home = () => (
  <div className="relative min-h-screen">
    {/* Live Background with default settings */}
    <AnimatedBackground />
    
    {/* Content Container with proper z-index */}
    <div className="relative z-10">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  </div>
);

// About Page with warm variant
const About = () => (
  <div className="relative min-h-screen">
    <AnimatedBackground variant="warm" intensity="low" />
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-4">Learn more about our company and mission.</p>
      </div>
    </div>
  </div>
);

// Services Page with cool variant
const Services = () => (
  <div className="relative min-h-screen">
    <AnimatedBackground variant="cool" intensity="medium" />
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-4">Discover what we can do for you.</p>
      </div>
    </div>
  </div>
);

// Book Page with high intensity
const Book = () => (
  <div className="relative min-h-screen">
    <AnimatedBackground variant="default" intensity="high" />
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Book Appointment</h1>
        <p className="text-gray-600 mt-4">Schedule your appointment with us today.</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={
            <div className="relative min-h-screen">
              <AnimatedBackground variant="minimal" intensity="low" />
              <div className="relative z-10">
                <Blog />
              </div>
            </div>
          } />
          <Route path="/contact" element={
            <div className="relative min-h-screen">
              <AnimatedBackground variant="cool" intensity="medium" />
              <div className="relative z-10">
                <Contact />
              </div>
            </div>
          } />
          <Route path="*" element={
            <Layout>
              <AnimatedBackground variant="minimal" intensity="low" />
              <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
                  <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
                </div>
              </div>
            </Layout>
          }/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
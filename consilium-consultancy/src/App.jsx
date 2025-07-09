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
import PartnershipsPage from './components/PartnershipsPage'; // Import the new Partnerships component

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
        <p className="text-gray-600 mt-4">I am a Junior Software Developer with hands-on experience in Python (Flask) and JavaScript-based programming, including React. My background has equipped me with a strong understanding of front-end development using React, and I am currently expanding my skills in Tailwind CSS to improve UI efficiency and responsiveness.
On the back-end, I have experience working with Flask, and I am actively building my understanding of Django fundamentals, including REST API development and database integration. I’m also familiar with version control using GIT and GitHub, which I’ve applied in both personal and team-based projects.
I bring strong team building and project management skills, which contribute to effective peer programming, code reviews, and achieving collective development goals. I’m passionate about writing clean, testable code and am building my knowledge of unit testing and product testing practices.
I am seeking a position where I can continue to grow technically, contribute to impactful projects, and collaborate with a supportive team. I am eager to learn, solve problems creatively, and communicate effectively within development teams.
.</p>
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

// Partnerships Page wrapper - using the PartnershipsPage component
const Partnerships = () => (
  <div className="relative">
    {/* The PartnershipsPage component already has its own background */}
    <PartnershipsPage />
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
          <Route path="/partnerships" element={<Partnerships />} />
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
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, DollarSign, PieChart } from 'lucide-react';

const services = [
  {
    title: "Investment Planning",
    desc: "Customized strategies to grow and secure your wealth.",
    icon: <DollarSign size={40} className="text-blue-600" />,
  },
  {
    title: "Retirement Advice",
    desc: "Ensure a stable and comfortable future with expert guidance.",
    icon: <Briefcase size={40} className="text-blue-600" />,
  },
  {
    title: "Portfolio Management",
    desc: "We manage, monitor and optimize your investments.",
    icon: <PieChart size={40} className="text-blue-600" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Core Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="text-blue-600 hover:underline font-medium"
          >
            See all services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

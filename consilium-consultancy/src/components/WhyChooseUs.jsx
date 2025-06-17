import React from 'react';
import { ShieldCheck, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <ShieldCheck size={40} className="text-blue-600" />,
    title: "Trusted Expertise",
    desc: "Our certified advisors bring years of industry experience and a proven track record."
  },
  {
    icon: <Users size={40} className="text-blue-600" />,
    title: "Client-Centered Approach",
    desc: "We tailor solutions that fit your unique goals, risk tolerance, and lifestyle."
  },
  {
    icon: <Lightbulb size={40} className="text-blue-600" />,
    title: "Innovative Strategies",
    desc: "We blend traditional wisdom with modern financial tech for smart investing."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose consilium consultancy ?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

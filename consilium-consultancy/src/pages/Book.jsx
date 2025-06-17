import React, { useState } from 'react';

const Book = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We'll contact you soon.");
    setForm({ name: '', email: '', date: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full border p-3 rounded" required />
        <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full border p-3 rounded" required />
        <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border p-3 rounded" required />
        <textarea name="message" placeholder="Message or special request" value={form.message} onChange={handleChange} className="w-full border p-3 rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Submit Booking</button>
      </form>
    </div>
  );
};

export default Book;

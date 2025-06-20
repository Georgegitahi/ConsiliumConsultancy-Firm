import React from 'react';






const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
      <form
  className="grid grid-cols-1 gap-6"
  onSubmit={(e) => {
    e.preventDefault();
    alert("Thank you! We’ll get back to you soon.");
  }}
>
  <input
    type="text"
    placeholder="Your Name"
    className="p-3 border rounded"
    required
  />
  <input
    type="email"
    placeholder="Your Email"
    className="p-3 border rounded"
    required
  />
  <textarea
    placeholder="Your Message"
    rows="5"
    className="p-3 border rounded"
    required
  />
  <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
    Send Message
  </button>
</form>

<div className="mt-10">
  {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Us</h3> */}
  <iframe
    title="Fiducia Capital Location"
    className="w-full h-64 rounded"
    frameBorder="0"
    style={{ border: 0 }}
    // src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Nairobi+Kenya"
    allowFullScreen
  ></iframe>
</div>


    </div>
  );
};

export default Contact;

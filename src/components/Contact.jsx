import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks for reaching out! I’ll get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white py-16 px-4 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 shadow-xl rounded-2xl p-10 bg-white"
      >
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Let's Work Together</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold flex justify-center items-center gap-2 transition"
            >
              <FiSend className="text-lg" /> Send Message
            </button>
            {status && <p className="text-green-600 pt-2">{status}</p>}
          </form>
        </div>

        {/* Contact Card */}
        <div className="bg-blue-50 rounded-2xl p-8 shadow-inner space-y-6">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Contact Information</h3>
          <div className="space-y-4 text-blue-900">
            <div className="flex items-center gap-3">
              <FiMail className="text-blue-600 text-xl" />
              <a href="mailto:nishitardeshana27@gmail.com" className="hover:underline">
                nishitardeshana27@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-blue-600 text-xl" />
              <a href="tel:+919725237537" className="hover:underline">
                +91 97252 37537
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-blue-600 text-xl" />
              <span>Vadodara, Gujarat, India</span>
            </div>
          </div>
          <p className="text-sm text-blue-800/80 mt-4">
            I typically respond within 24 hours. Feel free to message me anytime — I’m excited to connect!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

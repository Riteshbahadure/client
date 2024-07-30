import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAddTodoMutation } from '../redux/apis/msgApi';
import Navbar from './Navbar ';
import Footer from './Footer';

function Contact() {
  const [addmsg] = useAddTodoMutation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addmsg(formData).unwrap();
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return <>

    <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 flex flex-col items-center  justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="contact-container max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl"
      >
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Enter the subject"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Enter your message"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Send Message
          </motion.button>
        </form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center text-gray-700"
        >
          <p>
            You can also reach me via email at{' '}
            <a href="mailto:riteshbahadure2@gmail.com" className="text-blue-500">
              riteshbahadure2@gmail.com
            </a>.
          </p>
          <p>
            Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/ritesh-bahadure-049398247/?trk=contact-info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>{' '}
            or{' '}
            <a
              href="https://www.instagram.com/ritees.shh_/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>.
          </p>
        </motion.div>
      </motion.div>
    </div>
    <div className=''>

    <Footer />
    </div>
  </>
 
}

export default Contact;

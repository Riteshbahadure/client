// src/components/FAQ.js

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from './Navbar ';
import Footer from './Footer';

const faqs = [
    {
        question: "What is the check-in and check-out time?",
        answer: "Check-in starts from 3 PM, and check-out is by 11 AM. Early check-in or late check-out may be available upon request."
    },
    {
        question: "What is the hotel's address and contact information?",
        answer: "Our hotel is located at 123 Main Street, Anytown. For inquiries, please contact us at (123) 456-7890 or email us at info@hotekaran.com."
    },
    {
        question: "Is parking available at the hotel?",
        answer: "Yes, we offer free parking for our guests. Valet service is also available upon request."
    },
    {
        question: "Do you offer airport transportation?",
        answer: "Yes, we provide airport shuttle services. Please book in advance by contacting our front desk."
    },
    {
        question: "What amenities are included in the room?",
        answer: "Each room comes with free Wi-Fi, a flat-screen TV, complimentary toiletries, and a coffee maker. Some rooms also feature a mini-fridge and a safe."
    },
    {
        question: "Are there any dining options on-site?",
        answer: "Yes, we have an on-site restaurant that serves breakfast, lunch, and dinner. Room service is also available."
    },
    {
        question: "Can I request a specific room type or view?",
        answer: "Yes, you can request a specific room type or view during the booking process. We will do our best to accommodate your preferences."
    },
    {
        question: "What is your pet policy?",
        answer: "We are a pet-friendly hotel. Pets are welcome with prior notification. Additional fees may apply."
    },
    {
        question: "What measures do you have in place for guest safety?",
        answer: "We follow strict hygiene protocols, including regular cleaning and sanitization of all areas. Hand sanitizers are available throughout the hotel."
    },
];

const FAQS = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return <>
        <Navbar />
        <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-white mb-12">
                    Frequently Asked Questions
                </h1>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-xl rounded-xl border border-gray-300"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                onClick={() => handleToggle(index)}
                                className="w-full flex items-center justify-between px-8 py-5 bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600 focus:outline-none rounded-xl"
                            >
                                <span className="text-lg font-medium">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-white" />
                                ) : (
                                    <FaChevronDown className="text-white" />
                                )}
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    className="px-8 py-6"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p id='abc' className="text-gray-700">{faq.answer}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        <div className=''>
            <Footer />
        </div>
    </>
};

export default FAQS;

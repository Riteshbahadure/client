import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <>


      {/* What Our Guests Say Section */}
      <section className="my-16 py-12 px-9 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
        <motion.h2
        // text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600
          className="text-5xl font-extrabold py-3 mb-20 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Guests Say
        </motion.h2>
        <Slider {...settings} className="px-4">
          {[
            { text: '“The food was fantastic, and the delivery was quick!”', name: 'Sarah Johnson' },
            { text: '“Best food ordering experience ever. Highly recommend!”', name: 'James Williams' },
            { text: '“The variety of dishes available is amazing. Loved it!”', name: 'Emily Davis' },
            { text: '“Quick service and delicious food. Will order again!”', name: 'Michael Brown' },
            { text: '“Great customer service and fast delivery!”', name: 'Jessica Wilson' },
            { text: '“The discounts and offers make it even better!”', name: 'Daniel Martinez' },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className={`px-6 py-8 ${activeSlide === index ? 'scale-110' : 'scale-95'} transition-transform`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform">
                <p className="text-gray-700 mb-4 h-16 text-center pt-2">{testimonial.text}</p>
                <p className="font-bold text-center text-teal-500">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </section>

      {/* Nearby Attractions Section */}
      <section className="my-16 max-sm:px-4 lg:px-12">
        <motion.h2
          className="text-5xl font-extrabold py-3 mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nearby Attractions
        </motion.h2>
        <div className="flex max-sm:flex-wrap justify-center gap-6">
          {[
            { title: 'Ellora Caves', description: 'Explore the stunning rock-cut temples of Ellora Caves, a UNESCO World Heritage Site showcasing a rich blend of Buddhist, Hindu, and Jain architecture.' },
            { title: 'Daulatabad Fort', description: 'Visit the majestic Daulatabad Fort, known for its impressive medieval architecture and panoramic views of the surrounding landscape.' },
          ].map((attraction, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 px-4 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg shadow-lg p-6 overflow-hidden">
                <div className="absolute inset-0 bg-opacity-50 bg-black rounded-lg"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 text-white">{attraction.title}</h3>
                  <p className="text-gray-200">{attraction.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Offers Section */}
      <section className="my-16 px-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-12">
  <motion.h2
    className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Discover Our Exclusive Offers
  </motion.h2>
  <div className="flex flex-wrap justify-center gap-8">
    {[
      { title: 'Save Big on Your First Order!', description: 'Enjoy an incredible 60% discount on your first purchase over Rs.500. Don\'t miss out on this limited-time offer!', gradient: 'from-pink-500 to-yellow-500' },
      { title: 'Get Two Free Items with Your Next Order!', description: 'Order over Rs.700 and receive two complimentary food items. A delicious deal you can\'t resist!', gradient: 'from-green-500 to-teal-500' },
      { title: 'Free Delivery on All Orders!', description: 'Enjoy free delivery on all orders placed today. No minimum required!', gradient: 'from-orange-500 to-red-500' },
    ].map((offer, index) => (
      <motion.div
        key={index}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  px-4 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        <div className={`bg-gradient-to-r ${offer.gradient} text-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300`}>
          <h3 className="text-xl md:text-2xl font-bold mb-4">{offer.title}</h3>
          <p className="text-gray-200 text-sm md:text-base">{offer.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Latest News Section */}
      <section className="my-16 px-4">
        <motion.h2
          className="text-5xl font-extrabold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest News
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[
            { title: 'Introducing Our New Seasonal Menu!', description: 'Explore our latest seasonal menu, featuring exciting new dishes and exclusive offers. Don’t miss out on these fresh flavors!' },
            { title: 'Join Us for Our Grand Summer Gala!', description: 'We’re hosting a grand summer gala with live music, delicious food, and fantastic offers. Save the date and join us for an unforgettable evening!' },
            { title: 'How Our Customer Saved 50% on Their Order!', description: 'Read about how one of our customers took advantage of our exclusive discounts and enjoyed their meal for half the price. Get inspired and start saving today!' },
            { title: 'Launch of Our New Gourmet Dessert Line!', description: 'We’re excited to introduce our new line of gourmet desserts, crafted with the finest ingredients. Treat yourself to something sweet and indulgent!' },
            { title: 'Supporting Local Charities: Our Recent Contribution', description: 'Learn about our recent efforts to support local charities and how your patronage helps us give back to the community. Together, we make a difference!' },
            { title: 'A Day in the Life of Our Head Chef', description: 'Ever wondered what goes on behind the kitchen doors? Get an exclusive look at a day in the life of our head chef and discover the passion that goes into every dish.' },
            { title: 'Summer Specials: Cool Off with Our New Drinks!', description: 'Beat the heat with our refreshing new summer drinks, available for a limited time only. Come in and cool off with our latest offerings!' },
          ].map((news, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">{news.title}</h3>
              <p className="text-gray-700">{news.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero2;

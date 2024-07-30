import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar ';
import Footer from './Footer';
import img1 from '../assets/image1.png';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-white text-gray-900">
                <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="text-center mb-12">
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="text-4xl font-bold mb-4 text-white"
                            >
                                About Hotel Karan
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                                className="text-lg leading-relaxed mx-auto max-w-2xl text-slate-300"
                            >
                                Welcome to Hotel Karan, where we offer a delightful culinary experience with our exquisite menu and warm ambiance. Our journey began...
                            </motion.p>
                        </div>
                        <div className="flex gap-4 justify-center overflow-hidden">
                            {[
                                {
                                    src: "https://videos.pexels.com/video-files/3007555/3007555-sd_640_360_30fps.mp4",
                                    text: "Experience impeccable cleanliness and stylish ambiance outside our hotel."
                                },
                                // {
                                //     src: "https://videos.pexels.com/video-files/6613032/6613032-sd_640_360_25fps.mp4",
                                //     text: "Immaculate kitchen with top hygiene and precision."
                                // },
                                {
                                    src: "https://videos.pexels.com/video-files/3122106/3122106-sd_640_360_25fps.mp4",
                                    text: "Enjoy a warm, inviting ambiance at our hotel."
                                },
                                {
                                    src: "https://videos.pexels.com/video-files/4170498/4170498-sd_640_360_25fps.mp4",
                                    text: "Safe, reliable food delivery with quality assurance."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                    className="relative flex-shrink-0 " // Each video takes up 25% of the container width
                                >
                                    <video
                                        src={item.src}
                                        alt={`Hotel Karan Video ${index + 1}`}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="rounded-lg shadow-lg w-full h-60 object-cover transition-transform duration-500 transform hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                        <p className="text-white text-lg font-bold text-center p-4">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>



                <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl font-bold mb-8 text-center text-white"
                        >
                            Our History
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                className="flex flex-col justify-center"
                            >
                                <p className="mb-6 text-lg leading-relaxed text-sky-100">
                                    Established in [Year], Hotel Karan has been serving delicious meals to our cherished guests. From our humble beginnings, we have grown into a leading establishment known for our exceptional service and inviting atmosphere. Our commitment to quality and customer satisfaction has always been at the heart of what we do.
                                </p>
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    className="self-start bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                                className="flex justify-center"
                            >
                                <img
                                    src="https://cuveechatham.com/wp-content/uploads/2023/06/cuvee-chef-team-23-slide.jpg"
                                    alt="Hotel Karan History"
                                    className="rounded-lg shadow-lg max-w-full h-auto"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>


                <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl font-bold mb-12 text-center text-white"
                        >
                            Our Values
                        </motion.h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {[
                                {
                                    title: "Quality",
                                    description: "We use the finest ingredients to ensure every dish is exceptional.",
                                    icon: "https://videos.pexels.com/video-files/3769033/3769033-sd_640_360_25fps.mp4" // Replace with appropriate icon
                                },
                                {
                                    title: "Customer Service",
                                    description: "Our guests are our priority, and we strive to exceed their expectations.",
                                    icon: "https://videos.pexels.com/video-files/5223106/5223106-sd_640_360_25fps.mp4" // Replace with appropriate icon
                                },
                                {
                                    title: "Sustainability",
                                    description: "We are committed to eco-friendly practices to preserve our planet.",
                                    icon: "https://videos.pexels.com/video-files/5379003/5379003-sd_960_506_25fps.mp4" // Replace with appropriate icon
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                    className="bg-white shadow-lg rounded-lg p-8 text-center flex flex-col items-center"
                                >
                                    <div className="mb-6">
                                        <video
                                            src={value.icon}
                                            alt={`${value.title} Icon`}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            style={{ objectFit: 'cover' }}
                                            className="h-64 rounded-xl mx-auto mb-4"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                                    <p className="text-lg text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl font-bold mb-12 text-center text-white"
                        >
                            Awards and Recognition
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                        >
                            {[
                                {
                                    src: "https://rdb.rw/wp-content/uploads/2018/12/One-Only-Nyungwe-House-now-among-the-five-star-hotel-in-Rwanda-1024x683.jpg",
                                    title: "Best Hotel In Maharashtra",
                                    year: "2018"
                                },
                                {
                                    src: "https://www.hotelnewsme.com/wp-content/uploads/2023/03/FSX-8515-scaled.jpg",
                                    title: "Popular Restaurant in Chh.Sambhajinagar",
                                    year: "2023"
                                },
                                {
                                    src: "https://worldwidebesthotel.com/wp-content/uploads/2022/08/img-20220802-wa0006.jpg",
                                    title: "Outstanding Service Award",
                                    year: "2022"
                                },
                                // Add more awards as needed
                            ].map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: -2,
                                        boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
                                        transition: { duration: 0.5, ease: "easeInOut" }
                                    }}
                                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
                                >
                                    <motion.img
                                        src={award.src}
                                        alt={award.title}
                                        className="w-full h-48 object-cover"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="p-4 text-center">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                            className="text-xl font-semibold text-gray-900"
                                        >
                                            {award.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                                            className="text-lg text-gray-600"
                                        >
                                            {award.year}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>



                <section className="py-12 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-3xl font-bold mb-8 text-center text-white"
                        >
                            Community Involvement
                        </motion.h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {[
                                {
                                    title: "Charity Food Drives",
                                    description: "Our team regularly organizes food drives to support local families in need. We believe in giving back to the community that supports us.",
                                    imgSrc: "https://www.globalgiving.org/pfil/47865/ph_47865_185108.jpg"
                                },
                                {
                                    title: "Local School Partnerships",
                                    description: "We partner with local schools to provide educational resources and support. Our goal is to contribute to the growth and development of the younger generation.",
                                    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkp467NEZAbivY4em4lp4JzCi2wwBmVpRX8Q&s"
                                },
                                {
                                    title: "Environmental Clean-Up Events",
                                    description: "We organize clean-up events to promote environmental sustainability. Join us in making a positive impact on our surroundings.",
                                    imgSrc: "https://img.freepik.com/premium-photo/person-participating-local-community-cleanup-event-picking-up-environment-clean_697880-581.jpg"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 flex flex-col items-center"
                                >
                                    <img
                                        src={item.imgSrc}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 text-center">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                            className="text-xl font-semibold text-gray-900 mb-4"
                                        >
                                            {item.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                            className="text-lg text-gray-600"
                                        >
                                            {item.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


            </div>
          
            <Footer />
           
        </div>
    );
};

export default About;

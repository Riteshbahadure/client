import React from 'react';
import './articles.css';
import Navbar from './Navbar ';
import Footer from './Footer';

const Articles = () => {
    return (
        <div className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
            <Navbar />
            <div className="bg-gray-100 font-sans leading-normal tracking-normal ">
                {/* Header */}
                <header className="relative bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 pt-5 text-white overflow-hidden">
                    <div className="container mx-auto p-6 text-center">
                        <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Hotel Karan Articles</h1>
                        <p className="text-lg mb-6">Stay updated with the latest news and stories</p>
                    </div>
                    {/* Food Images Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                        {/* Image Card */}
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <video
                                src="https://videos.pexels.com/video-files/5907436/5907436-sd_640_360_25fps.mp4"
                                alt="Delicious Food"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ objectFit: 'cover' }}
                                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl font-semibold">Delicious Cuisine</p>
                            </div>
                        </div>
                        {/* More image cards */}
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <video
                                src="https://videos.pexels.com/video-files/3325972/3325972-sd_640_360_24fps.mp4"
                                alt="Delicious Food"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ objectFit: 'cover' }}
                                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl font-semibold">Tasty Desserts</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <video
                                src="https://videos.pexels.com/video-files/2959312/2959312-sd_640_360_30fps.mp4"
                                alt="Delicious Food"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ objectFit: 'cover' }}
                                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl font-semibold">Hearty Breakfast</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Container */}
                <div className="container mx-auto mt-10 px-4">
                    {/* Hotel News and Updates */}
                    <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-8 rounded-lg shadow-lg mb-12">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-semibold text-white mb-6 animate-slideInUp">Hotel News and Updates</h2>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {/* Article Card */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideInUp border-t-4 border-blue-500">
                                    <h3 className="text-2xl font-bold mb-2">Exciting Renovations</h3>
                                    <p className="text-gray-800 mb-4">We’ve recently completed a major renovation to enhance your stay experience. Check out the new features and improvements!</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Read more</a>
                                </div>
                                {/* Additional Article Cards */}
                                {/* Follow the same pattern for other cards */}
                                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideInUp border-t-4 border-blue-500">
                                    <h3 className="text-2xl font-bold mb-2">New Dining Options</h3>
                                    <p className="text-gray-800 mb-4">We’ve added new dining options to our menu, featuring local and international cuisines. Explore our new offerings!</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Discover more</a>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideInUp border-t-4 border-blue-500">
                                    <h3 className="text-2xl font-bold mb-2">New Dining Options</h3>
                                    <p className="text-gray-800 mb-4">Join us for our upcoming events, including themed parties and live music. Don’t miss out on the fun!</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Discover more</a>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideInUp border-t-4 border-blue-500">
                                    <h3 className="text-2xl font-bold mb-2">Guest Experiences</h3>
                                    <p className="text-gray-800 mb-4">Read about recent guest experiences and see how we’re working to make each stay unforgettable.</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Discover more</a>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideInUp border-t-4 border-blue-500">
                                    <h3 className="text-2xl font-bold mb-2">Special Offers</h3>
                                    <p className="text-gray-800 mb-4">Check out our current special offers and discounts. Book your next stay at a great price!b</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Discover more</a>
                                </div>
                                {/* More article cards as needed */}
                            </div>
                        </div>
                    </section>


                    {/* Dining and Cuisine */}
                    <section className="bg-gradient-to-r px-10 py-8 from-gray-900 via-gray-700 to-gray-900 mb-12 rounded-lg">
                        <h2 className="text-3xl font-semibold text-white mb-4 animate-slideInUp pb-2">Dining and Cuisine</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Featured Dish Card */}
                            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideInUp group">

                                <video
                                    src="https://videos.pexels.com/video-files/4926194/4926194-uhd_2732_1440_30fps.mp4"
                                    alt="Delicious Food"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ objectFit: 'cover' }}
                                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold mb-2">Signature Dish</h3>
                                    <p className="text-gray-700 mb-4">A delectable dish made with fresh ingredients and exquisite flavors.</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Learn more</a>
                                </div>
                            </div>
                            {/* Additional Cards */}
                            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideInUp group">
                                <video
                                    src="https://videos.pexels.com/video-files/5101339/5101339-sd_640_360_25fps.mp4"
                                    alt="Delicious Food"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ objectFit: 'cover' }}
                                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold mb-2">Gourmet Experience</h3>
                                    <p className="text-gray-700 mb-4">Explore our gourmet offerings with a focus on unique flavors and presentation.</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Discover more</a>
                                </div>
                            </div>
                            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideInUp group">

                                <video
                                    src="https://videos.pexels.com/video-files/9020873/9020873-sd_640_360_25fps.mp4"
                                    alt="Delicious Food"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ objectFit: 'cover' }}
                                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold mb-2">Farm-to-Table</h3>
                                    <p className="text-gray-700 mb-4">Savor dishes made from locally sourced, fresh ingredients straight from the farm.</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Read more</a>
                                </div>
                            </div>
                            {/* Seasonal Specials Card */}
                            <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideInUp group">
                                <video
                                    src='https://videos.pexels.com/video-files/2832316/2832316-sd_640_360_30fps.mp4'
                                    alt="Delicious Food"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ objectFit: 'cover' }}
                                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold mb-2">Seasonal Specials</h3>
                                    <p className="text-gray-700 mb-4">Indulge in our special dishes crafted with seasonal ingredients for a fresh and exciting dining experience.</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Find out more</a>
                                </div>
                            </div>

                            {/* More Cards */}
                        </div>
                    </section>


                    {/* Guest Stories */}




                    {/* Practical Information */}
                    {/* <div> <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-blue-900 mb-4 animate-slideInUp">Practical Information</h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Article Card */}
                    {/* <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideInUp">
                                <h3 className="text-2xl font-bold mb-2">Travel Tips</h3>
                                <p className="text-gray-700 mb-4">Useful tips for your stay, from currency exchange to local customs.</p>
                                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Read more</a>
                            </div>
                            {/* More article cards can be added here */}
                    {/* </div>
                    </section><
                        // /div> */}
                </div>


                {/* Guest Stories */}
                <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 pt-10 pb-20">
                    <h2 className="text-4xl font-semibold text-blue-900 mb-4 animate-slideInUp flex justify-center pt-14 text-white">Guest Stories</h2>


                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  pt-7 px-7 lg:-mb-6 ">
                        {/* Story Card */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideInUp">
                            <h3 className="text-2xl font-bold mb-2">A Perfect Anniversary Celebration</h3>
                            <p className="text-gray-700 mb-4">John and Jane Doe celebrated their 25th anniversary at Hotel Karan and had an unforgettable experience with a romantic dinner and a surprise room upgrade.</p>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Read more</a>
                        </div>
                        {/* Additional Story Cards */}

                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideInUp">
                            <h3 className="text-2xl font-bold mb-2">Family Fun Vacation</h3>
                            <p className="text-gray-700 mb-4">The  Smith family enjoyed a fun-filled week at our resort, with plenty of activities for the kids and relaxing spa treatments for the parents.</p>
                            <a href="#n" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Read more</a>
                        </div>
                        {/* More Story Cards */}
                        <div className="bg-white p-6  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-slideInUp">
                            <h3 className="text-2xl font-bold mb-2">Thrilling Hiking Trip</h3>
                            <p className="text-gray-700 mb-4">Sarah and her friends went on a thrilling hiking trip during their stay, exploring beautiful trails and witnessing breathtaking views.</p>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Read more</a>
                        </div>
                    </div>
                </section>


            </div>
            <Footer />
        </div>
    );
};

export default Articles;

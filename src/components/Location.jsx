import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import Navbar from './Navbar ';
import Footer from './Footer';

const Location = () => {
    const latitude = 19.9461;
    const longitude = 75.2217;

    const attractions = [
        {
            name: 'Devgiri Fort',
            distance: '1.2 miles',
            img: 'https://media.licdn.com/dms/image/C5112AQFZeWsemx4yYw/article-cover_image-shrink_600_2000/0/1520217233925?e=2147483647&v=beta&t=apK1gi4cWHinmfAX_XgoycFhe5Qi7mnkGVJVSOz1T_M',
        },
        {
            name: 'Ellora Caves',
            distance: '5.6 miles',
            img: 'https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/12/How-to-Reach-Ellora-Caves.jpg',
        },
        {
            name: 'Bhadra Maruti',
            distance: '11.5 miles',
            img: 'https://tapioca.co.in/wp-content/uploads/2021/08/Bhadra-Maruti-Temple.jpg',
        },
    ];

    return (
        <>
            <Navbar />
            <motion.div
                className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900  min-h-screen w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl font-bold text-white mb-8 text-center w-full"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Our Location
                </motion.h1>
                <motion.div
                    className="w-full h-96 mb-12 shadow-lg rounded-lg overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <MapContainer center={[latitude, longitude]} zoom={13} className="w-full h-full">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        <Marker position={[latitude, longitude]}>
                            <Popup>Hotel Karan is located here.</Popup>
                        </Marker>
                    </MapContainer>
                </motion.div>
                <motion.div
                    className="w-full bg-white p-8 rounded-lg shadow-lg mb-12"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <h2 className="text-3xl font-bold mb-6 text-center py-3">Nearby Attractions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 pb-3 lg:grid-cols-3 gap-6">
                        {attractions.map((attraction, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-300 pb-2 p-4 rounded-lg shadow-md flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <img
                                    src={attraction.img}
                                    alt={attraction.name}
                                    className="w-full h-56 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-2xl font-semibold mb-1">{attraction.name}</h3>
                                <p className="text-gray-700">{attraction.distance}</p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>

                <motion.div
                    className="w-full bg-white p-8 rounded-lg shadow-lg mb-12"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2 }}
                >
                    <h2 className="text-3xl font-bold mb-6 py-4 text-center">Transport Options</h2>
                    <div className="flex flex-col space-y-4">
                        <motion.div
                            className="p-6 bg-blue-50 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-xl font-semibold mb-2">Nearest Airport</h3>
                            <p className="text-gray-800">15 miles</p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-green-50 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-xl font-semibold mb-2">Nearest Train Station</h3>
                            <p className="text-gray-800">2 miles</p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-yellow-50 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-xl font-semibold mb-2">Bus Stop</h3>
                            <p className="text-gray-800">0.5 miles</p>
                        </motion.div>
                    </div>
                </motion.div>
                {/* <motion.div
                    className="w-full bg-white p-8 rounded-lg shadow-lg mb-12"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                >

                </motion.div> */}
            </motion.div>
           <div className=''>
           <Footer />
           </div>
        </>
    );
};

export default Location;

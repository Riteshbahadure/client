import React from 'react';
import './style.css';
import video from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className=''>
      <section className="relative text-white py-14">
        <div className="absolute inset-0">
          <video
            src="https://videos.pexels.com/video-files/2894881/2894881-uhd_2560_1440_24fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: 'cover' }}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-1">Welcome to Hotel Karan</h1>
          <p className="text-lg mb-8">Experience luxury and comfort like never before</p>
        </div>
      </section>

      {/* featured categories */}
      <h2 className="text-3xl font-bold mb-6 mt-32 text-center text-white">What's on your mind!</h2>
      <div className='px-16 max-sm:px-8 mb-10 lg:mb-20'>
        <div className="carousel w-full grid-cols-2 justify-between">
          <div id="slide1" className="carousel-item gap-6 py-4 my-6 mx-4 flex relative w-full">
            <div className="carousel gap-3">
              {[
                {
                  src: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Malai Kofta "
                },
                {
                  src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Chicken Biryani"
                },
                {
                  src: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
                  text: "Dal Tadka"
                },
                {
                  src: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Panner Rice"
                },
                {
                  src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Dum Aloo"
                },

                {
                  src: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Panner Bhurji"
                },
                {
                  src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Gajar Halwa"
                },
                
                {
                  src: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Malai Panner"
                },
                
                {
                  src: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Chicken Masala"
                },
                {
                  src: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Chole Rice"
                },
                {
                  src: "https://plus.unsplash.com/premium_photo-1673793535072-148e7ef7bd41?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  text: "Fresh Biscuits"
                },
              ].map((item, index) => (
                <div key={index} className="carousel-item h-56 transition-transform transform hover:scale-105 duration-300 ease-in-out relative">
                  <img className='rounded-lg w-48 h-full object-cover' src={item.src} alt={`Food ${index + 1}`} />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white px-2 py-1 lg:mt-32 font-bold rounded">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;

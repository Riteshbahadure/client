import React from 'react'

const unUsefiles = () => {
    return (
        <div>

            <section className="py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-3xl font-bold mb-8">Gallery</h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <img src="path_to_gallery_image.jpg" alt="Gallery Image" className="rounded-lg shadow-lg" />
                        {/* Repeat for other gallery images */}
                    </motion.div>
                </div>
            </section>



            <section className="py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-3xl font-bold mb-8">Reservation Information</h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-4"
                    >
                        <p>To make a reservation, please visit our <a href="your_reservation_page_link" className="text-blue-600">reservation page</a>.</p>
                    </motion.div>
                </div>
            </section>

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
        </div>
    )
}

export default unUsefiles
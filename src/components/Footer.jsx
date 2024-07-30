import React from 'react';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { SiSwiggy, SiZomato } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className='bg-slate-100'>
            {/* Section for Footer Content */}
            <div className='max-w-screen-xl mx-auto px-6 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14'>
                    <div className='flex flex-col items-center'>
                        <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/pilih_menu.svg" alt="Choose Menu" />
                        <h1 className='text-center mt-2 text-base md:text-lg lg:text-xl font-medium'>Choose the menu you desire</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/atur_jadwal.svg" alt="Set Schedule" />
                        <h1 className='text-center mt-2 text-base md:text-lg lg:text-xl font-medium'>Set schedule and delivery address</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/approval.svg" alt="Obtain Approval" />
                        <h1 className='text-center mt-2 text-base md:text-lg lg:text-xl font-medium'>Obtain approval from the chef</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/pay.svg" alt="Make Payment" />
                        <h1 className='text-center mt-2 text-base md:text-lg lg:text-xl font-medium'>Ensure your payment is processed securely</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/nikmati.svg" alt="Enjoy Order" />
                        <h1 className='text-center mt-2 text-base md:text-lg lg:text-xl font-medium'>Enjoy your order as per your liking</h1>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className='bg-slate-800 text-white py-10'>
                <div className='max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <h1 className='text-xl font-semibold mb-4'>Karan is a curated foods and beverages artisans</h1>
                        <div className='text-base'>
                            <a href='#' className='hover:underline'>About Karan</a> | 
                            <a href='#' className='hover:underline'> Contact us</a>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-xl font-semibold mb-4'>Social</h1>
                        <div className='flex gap-4 text-3xl'>
                            <a href="#" aria-label="Instagram" className='hover:text-gray-400'><FaInstagram /></a>
                            <a href="#" aria-label="Facebook" className='hover:text-gray-400'><FaFacebookSquare /></a>
                            <a href="#" aria-label="Swiggy" className='hover:text-gray-400'><SiSwiggy /></a>
                            <a href="#" aria-label="Zomato" className='hover:text-gray-400'><SiZomato /></a>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-4'>Karan International 2024</h1>
                        <p className='text-base'>riteshbahdure2@gmail.com</p>
                        <p className='text-base'>+91 7058 16 8515</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

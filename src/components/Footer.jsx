import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { SiSwiggy } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZomato } from "react-icons/si";

const Footer = () => {
    return (
        <div className='bg-white'>
            <div className='flex flex-col md:flex-row gap-10 md:gap-20 px-10  mt-10 md:mt-40 ml-5 mb-10 md:mb-24'>
                <div className='flex flex-col items-center'>
                    <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/pilih_menu.svg" alt="Choose Menu" />
                    <h1 className='w-48 text-center mt-2'>Choose the menu you desire</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/atur_jadwal.svg" alt="Set Schedule" />
                    <h1 className='w-48 text-center mt-2'>Set schedule and delivery address</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/approval.svg" alt="Obtain Approval" />
                    <h1 className='w-48 text-center mt-2'>Obtain approval from the chef</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/pay.svg" alt="Make Payment" />
                    <h1 className='w-48 text-center mt-2'>Make the payment</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='h-24 md:h-32' src="https://s3-ap-southeast-1.amazonaws.com/kimistatic/images/svg/nikmati.svg" alt="Enjoy Order" />
                    <h1 className='w-48 text-center mt-2'>Enjoy your order as per your liking</h1>
                </div>
            </div>
            <div className='bg-slate-800 text-white flex flex-col md:flex-row px-10 md:px-20 pt-10 pb-20 justify-between'>
                <div className='mb-10 md:mb-0'>
                    <h1 className='text-xl font-semibold'>Karan is a curated foods and beverages artisans</h1>
                    <div className='flex gap-5 mt-4 text-base'>
                        <h1>About Karan </h1>
                        <h1>Contact us</h1>
                    </div>
                </div>
                <div className='mb-10 md:mb-0'>
                    <h1 className='text-xl font-semibold'>Social</h1>
                    <div className='flex text-4xl gap-4 mt-4'>
                        <FaInstagram />
                        <FaFacebookSquare />
                        <SiSwiggy />
                        <SiZomato />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>Karan International 2024</h1>
                    <p className='mt-4'>info@backtokaran.com</p>
                    <p>+91 95458 88010</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

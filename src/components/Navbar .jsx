import React from 'react';
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/apis/authApi";
import imgn from "../assets/Hotel Karan.jpg";

const Navbar = () => {
    const { cart } = useSelector(state => state.public);
    const { user } = useSelector(state => state.auth);
    // console.log(user.name)
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-md">
            {/* Top bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white text-sm">
                <div className="flex items-center gap-3">
                    <FaSearch className="self-center" />
                    <span>Find any troubles? Drop us an email at grow@backtokaran.com</span>
                </div>
                <div>
                    {/* {
                    user && user.role === "customer"
                     ?  <span className="cursor-pointer capitalize" onClick={() => navigate('/login')}>{user.name}</span>
                     :  <span className="cursor-pointer" onClick={() => navigate('/login')}>LOGIN</span>
                    } */}
                </div>
            </div>

            {/* Main Navbar */}
            <div className="flex justify-between items-center py-4 px-6 md:px-20">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={imgn} className="h-12 md:h-16 cursor-pointer" alt="Hotel Karan" />
                    {/* <span className="ml-4 text-xl md:text-2xl font-bold text-gray-800">Hotel Karan</span> */}
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 font-semibold">
                    {["SHOP", "Articles", "CHEF GUIDE", "LOCATION", "FAQS", "ABOUT", "CONTACT US", "CHEF DIRECTORY"].map(item => (
                        <span key={item} className="cursor-pointer hover:text-amber-600 transition duration-300">{item}</span>
                    ))}
                </div>

                {/* Cart and Logout */}
                <div className="flex items-center gap-4">
                    <button onClick={logout} className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300">
                        Logout
                    </button>
                    <div className="relative">
                        <Link to="/cart" className="text-gray-800 text-4xl">
                            <RiShoppingBag3Line />
                        </Link>
                        {cart && cart.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;

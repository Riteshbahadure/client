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
    const [logout] = useLogoutMutation();
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-md">
            {/* Top bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white text-sm">
                <div className="flex items-center gap-3">
                    <FaSearch className="self-center" />
                    <span className='max-sm:w-56'>Find any troubles? Drop us an email at grow@backtokaran.com</span>
                </div>
                <div>
                    {user && user.role === "customer" ? (
                        <span className="cursor-pointer font-semibold capitalize" onClick={() => navigate('/profile')}>{user.name}</span>
                    ) : (
                        <span>
                            <Link to="/login" className="cursor-pointer mr-4">LOGIN</Link>
                            <Link to="/register" className="cursor-pointer">REGISTER</Link>
                        </span>
                    )}
                </div>
            </div>

            {/* Main Navbar */}
            <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-20">
                {/* Logo */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img src={imgn} className="h-12 md:h-16 cursor-pointer" alt="Hotel Karan" />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-semibold">
                    <div onClick={()=> navigate("/")} className="cursor-pointer hover:text-amber-600 transition duration-300">SHOP</div>
                    <div onClick={()=> navigate("/article")} className="cursor-pointer hover:text-amber-600 transition duration-300">ARTICLES</div>
                    <div  onClick={()=> navigate("/chefGuide")}   className="cursor-pointer hover:text-amber-600 transition duration-300">CHEF GUIDE</div>
                    <div onClick={()=> navigate("/location")}  className="cursor-pointer hover:text-amber-600 transition duration-300">LOCATION</div>
                    <div onClick={()=> navigate("/faqs")} className="cursor-pointer hover:text-amber-600 transition duration-300">FAQS</div>
                    <div onClick={()=> navigate("/about")} className="cursor-pointer hover:text-amber-600 transition duration-300">ABOUT</div>
                    <div onClick={()=> navigate("/contact")} className="cursor-pointer hover:text-amber-600 transition duration-300">CONTACT US</div>
                    {/* <div className="cursor-pointer hover:text-amber-600 transition duration-300">CHEF DIRECTORY</div> */}
                </div>

                {/* Cart and Logout */}
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                {
                      user === null
                        ? ""
                        : <button onClick={logout} className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300">
                        Logout
                    </button>
                    }
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

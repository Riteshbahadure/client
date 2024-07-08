// import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineWindow } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuListVideo } from "react-icons/lu";
import { useSelector } from "react-redux";
// import { IoTerminal } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../redux/apis/authApi";


const Navbar = () => {
    // const { user } = useSelector(state => state.auth)
    const { cart } = useSelector(state => state.public)
    // const [logout] = useLogoutMutation()
    return <>
        <div className="flex justify-between py-4 bg-slate-200 px-20 font-semibold">
            <div className="flex justify-between gap-6">
                <h1>SHOP</h1>
                <h1>Articles</h1>
                <h1>CHEF GUIDE</h1>
                <h1>LOCATION</h1>
                <h1>FAQS</h1>
                <h1>ABOUT</h1>
                <h1>CONTACT US</h1>
                <h1>CHEF DIRECTORY</h1>
                <h1>LOGIN/REGISTER</h1>

            </div>
            <div className="flex gap-1">

                <h1 className="-mt-1">CART</h1>
                <Link to="/cart" className="indicator">
                    <span className="indicator-item badge badge-success text-black font-bold">
                        {cart && cart.length}
                    </span>
                    <p className='text-black text-xl font-bold'><RiShoppingBag3Line /></p>
                </Link>
            </div>
        </div>
    </>



}

export default Navbar

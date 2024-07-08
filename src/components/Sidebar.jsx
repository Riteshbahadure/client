import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { TbBrandGoogleHome } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { PiArrowElbowLeftDownBold } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoImagesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { SiEight } from "react-icons/si";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/apis/authApi';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const { user } = useSelector(state => state.auth)
    const [logout] = useLogoutMutation()
    return <>
        <div className="drawer  ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <div className='bg-red-400 p-2 px-20 flex justify-between'>
                    <div className=' flex gap-4 items-center'>
                        <label
                            htmlFor="my-drawer"
                            className="btn btn-primary drawer-button">Menu</label>
                        <Link className='text-black' to="/admin/users">users</Link>
                        <Link className='text-black' to="/admin/products">Products</Link>
                        <Link className='text-black' to="/admin/orders">Orders</Link>
                    </div>
                    <div>
                        <details className="dropdown dropdown-left">
                            <summary className="m-1 btn">{user.name}</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a>{user.email}</a></li>
                                <li><button onClick={logout} className='btn btn-error btn-sm'>Logout</button></li>
                            </ul>
                        </details>
                    </div>

                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li className='text-3xl font-bold mb-4'><a><i className='text-green-800 cursor-pointer'><GiShoppingCart /></i> Karan International</a></li>
                    <li className='text-lg font-medium bg-green-200 mb-8 cursor-pointer p-2 rounded-xl text-green-800' ><a > <i><IoHomeOutline /></i>Dashbord</a></li>
                    <span className='text-gray-400 font-medium mb-8 cursor-pointer mx-5'>store management</span>
                    <li className='mb-3 text-lg font-medium text-gray-500 cursor-pointer '><a> <i className='p-2'><LuShoppingCart /></i>Product</a></li>
                    <li className='mb-3 text-lg font-medium text-gray-500 cursor-pointer'><a> <i className='p-2'><IoReorderThreeOutline /></i>Categories</a></li>
                    <li className='mb-3 text-lg font-medium text-gray-500 cursor-pointer'><a> <i className='p-2'><IoBagOutline /></i>Orders
                        <details className="dropdown">
                            <summary className="m-1 btn"><i><IoIosArrowDown /></i></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </details>
                    </a></li>
                    <li className='mb-3 text-lg font-medium text-gray-500'><a> <i className='p-2'><TbBrandGoogleHome /></i>sellers/vendors </a></li>
                    <li className='mb-3 text-lg font-medium text-gray-500'><a> <i className='p-2'><IoPeopleOutline /></i>custormer </a></li>
                    <li className='mb-3 text-lg font-medium text-gray-500'><a> <i className='p-2'><FaRegStar /></i>Review </a></li>
                    <li className='mb-3 text-lg font-medium text-gray-500'><a> <i className='p-2'><PiArrowElbowLeftDownBold /></i>Menu Level
                        <details className="dropdown">
                            <summary className="m-1 btn"><i><IoIosArrowDown /></i></summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a>Two level
                                    <details className="dropdown">
                                        <summary className="m-1 btn"><i><IoIosArrowDown /></i></summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                            <li><a>NavItem 1</a></li>
                                            <li><a>NavItem 2</a></li>
                                        </ul>
                                    </details>
                                </a></li>
                                <li><a>Three level
                                    <details className="dropdown">
                                        <summary className="m-1 btn"><i><IoIosArrowDown /></i></summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                            <li><a>NavItem 1</a></li>
                                            <li><a>NavItem 2</a></li>
                                        </ul>
                                    </details>
                                </a></li>
                            </ul>
                        </details>
                    </a></li>
                    <div className='flex justify-around'>
                        <span className='text-gray-400 font-medium text mt-3 mx-5' >Site settings</span>
                        <span className='bg-blue-200 mt-3 text-blue-800 m-5 font-semibold rounded-md pb-1'>comming soon</span>
                    </div>
                    <li className='mb-5 text-lg font-medium text-gray-300'><a> <i className='p-2'><IoNewspaperOutline /></i>Blog </a></li>
                    <li className='mb-5 text-lg font-medium text-gray-300'><a> <i className='p-2'><IoImagesOutline /></i>Media </a></li>
                    <li className='mb-5 text-lg font-medium text-gray-300'><a> <i className='p-2'><IoSettingsOutline /></i>store setting </a></li>
                    <div className='flex justify-around'>
                        <span className='text-gray-400 font-medium text mt-3'>Support</span>
                        <span className='bg-blue-200 mt-3 text-blue-800 m-5 font-semibold rounded-md pb-1'>comming soon</span>
                    </div>
                    <li className='mb-5 text-lg font-medium text-gray-300'><a> <i className='p-2'><FaHeadphones /></i>Support Ticket </a></li>
                    <li className='mb-5 text-lg font-medium text-gray-300'><a> <i className='p-2'><AiOutlineQuestionCircle /></i>help Center </a></li>
                    <li className='mb-5 text-lg font-medium text-gray-300'><a> <i className='p-2'><SiEight /></i>How freshCart Work</a></li>
                    <span className='text-gray-400 font-medium mb-8 text mx-5'>Our Apps</span>
                    <li className='mb-5 text-lg font-medium text-gray-300'><a> <i className='p-2'><FaApple /></i>Apple Store</a></li>
                    <li className='mb-5 text-lg font-medium text-gray-300'><a> <i className='p-2'><IoLogoGooglePlaystore /></i>Google Play Store</a></li>
                </ul>
            </div>
        </div>
    </>
}

export default Sidebar
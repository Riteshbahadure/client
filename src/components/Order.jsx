import React, { useContext, useState } from 'react'
import { PiArrowElbowLeftDown } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { createContext } from 'react';


const Order = () => {
    const [show, setShow] = useState(true)

    return <>
        <div className='hidden md:block '>
            <div className='flex h-screen overflow-x-scroll'>
                <div className='hidden md:block w-full bg-white border-e border-e-black'>
                    <div className='p-5'>
                        <img className='h-[30px]' src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="" />
                    </div>
                    <div className='p-5'>
                        <div>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'><span className='mt-1'><IoHomeOutline /></span><p className=''>Dashboard</p></p>
                            </div>
                        </div>
                        <h1 className='mt-5'>Store Managements</h1>

                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'><span className='mt-1'><BsCart /></span><p className=''>Products</p></p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><FaList /></span>
                                    <p className=''>Categories</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className="dropdown">
                                <div className='p-3 hover:bg-sky-100 rounded-md'>
                                    <div tabIndex={0} role="button" className="flex text-slate-600 font-semibold gap-3">
                                        <span className='mt-1'><IoBagOutline /></span>
                                        <p className=''>Ordes</p>
                                        <span className='ms-32'><MdOutlineKeyboardArrowDown /></span>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52">
                                        <div onClick={e => setShow(false)} className='p-3 cursor-pointer hover:bg-sky-100 rounded-md'>
                                            <p className='flex text-slate-600 font-semibold gap-3'>
                                                <span className='mt-1'><BsDot /></span>
                                                <p className=''>List</p>
                                            </p>
                                        </div>
                                        <div onClick={e => setShow(true)} className='p-3 cursor-pointer hover:bg-sky-100 rounded-md'>
                                            <p className='flex text-slate-600 font-semibold gap-3'>
                                                <span className='mt-1'><BsDot /></span>
                                                <p className=''>Single</p>
                                            </p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><BsShop /></span>
                                    <p className=''>Sallers / Vendors</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><MdPeopleOutline /></span>
                                    <p className=''>Customers</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><CiStar /></span>
                                    <p className=''>Reviews</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>Menu Level</p>
                                    <span className=''><MdOutlineKeyboardArrowDown /></span>
                                </p>
                            </div>
                        </div>
                        <div className='flex '>
                            <h1 className='mt-5'>Site Setting</h1>
                            <div className="mt-7 ms-2 px-1 bg-sky-100 rounded-sm h-5 font-bold text-black text-sm">Comming Soon</div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>Blog</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>Media</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>
                                        Store Settings</p>
                                </p>
                            </div>
                        </div>
                        <div className='flex '>
                            <h1 className='mt-5'>Support</h1>
                            <div className="mt-7 ms-2 px-1 bg-sky-100 rounded-sm h-5 font-bold text-black text-sm">Comming Soon</div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>Support Ticket</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>Help Center</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>How Karan International Works</p>
                                </p>
                            </div>
                        </div>
                        <h1 className='mt-5'>Our Apps</h1>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>Apple Store</p>
                                </p>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='p-3 hover:bg-sky-100 rounded-md'>
                                <p className='flex text-slate-600 font-semibold gap-3'>
                                    <span className='mt-1'><PiArrowElbowLeftDown /></span>
                                    <p className='w-60'>Google Play Store</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <List show={show} set={setShow} />
                    <Single show={show} set={setShow} />
                </div>
            </div>
        </div>
        <div className='md:hidden lg:hidden'>
            <List show={show} set={setShow} />
            <Single show={show} set={setShow} />
        </div>
    </>
}
const List = ({ show, setShow }) => {
    return <>
        <div className='md:max-w-[950px]'>
            {
                !show && <div className='bg-white max-w-full h-full p-5'>
                    <div className=''>
                        <div className='flex gap-32 md:flex md:justify-between lg:justify-between p-5 bg-white'>
                            <div className='flex max-w-full'>
                                <div onClick={e => setSidebar(true)}>
                                    <span className='flex md:hidden lg:hidden bg-white text-black font-bold text-4xl'><RiPlayListAddLine /></span>
                                </div>
                                <input type="text" className='input input-success input-bordered border-black bg-white input-md focus:border-green-500' placeholder='Search' />
                            </div>
                            <div className='flex'>
                                <p className='text-3xl text-black font-bold'><IoIosNotificationsOutline /></p>
                                <img className='h-[40px] max-w-[40px] rounded-full' src="https://freshcart.codescandy.com/assets/images/avatar/avatar-1.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl text-black p-3'>Order List</h1>
                            <div className='flex gap-3 md:p-3'>
                                <a href=""><span className='text-green-500 font-semibold'>Dashboard</span></a>
                                <span className='text-slate-300 font-semibold'>/ Order list</span>
                            </div>
                            <div className='flex md:justify-center mb-20 text-start'>
                                <div className="card bg-white w-full md:w-[90%] shadow-xl">
                                    <div className="card-body">
                                        <div className='grid grid-cols-1 md:flex md:justify-between lg:justify-between'>
                                            <input type="text" className='input w-full md:w-[30%] lg:w-[20%] input-success input-bordered border-black bg-white input-md focus:border-green-500' placeholder='Search' />
                                            <select className="border w-full md:w-[30%] lg:w-[20%]  p-2 rounded-md select-success border-black bg-white text-black font-semibold">
                                                <option className='text-black font-semibold' value="1">Status</option>
                                                <option className='text-black font-semibold' value="2">Success</option>
                                                <option className='text-black font-semibold' value="3">Pending</option>
                                                <option className='text-black font-semibold' value="3">Cancel</option>
                                            </select>
                                        </div>
                                        <div className="overflow-x-auto max-w-[100%]">
                                            <table className="border table max-w-full">
                                                <thead>
                                                    <tr className='hover:bg-sky-100'>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'>
                                                            <input id='check' type="checkbox" className='bg-white checkbox-sm checkbox-success' />
                                                        </th>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'>Image</th>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'>Order Name</th>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'>Customer</th>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'>Date & Time</th>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'>Payment</th>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'>Status</th>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'>Amount</th>
                                                        <th className='bg-sky-100  text-center text-black font-bold p-2'></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        [...Array(5)].map(item => <tr className='text-center h-[20px] hover:bg-sky-100'>
                                                            <th className='text-black'> <input id='check' type="checkbox" className='bg-white checkbox-sm checkbox-success' /></th>
                                                            <td className='flex justify-center'><img className='h-[50px]' src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg" alt="" /></td>
                                                            <td className='text-black'>FC#1007</td>
                                                            <td className='text-black'>Jennifer Sullivan</td>
                                                            <td className='text-black'>01 May 2023 (10:12 am)</td>
                                                            <td className='text-black'>Paypal</td>
                                                            <td className='text-black'><div className="badge badge-success">Success</div></td>
                                                            <td className='text-black'>$12.99</td>
                                                            <td className='text-black'><span className='text-black font-bold text-xl'><BsThreeDotsVertical /></span></td>
                                                        </tr>

                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='md:flex lg:flex md:justify-between lg:justify-between'>
                                            <p className='text-black font-semibold p-2'>Showing 1 to 8 of 12 entries</p>
                                            <div className="flex">
                                                <button className="p-3 bg-slate-300 rounded-md text-black font-bold">Previous</button>
                                                <button className="join-item btn btn-success bg-green-600 btn-md">1</button>
                                                <button className="join-item btn btn-success bg-white btn-md ">2</button>
                                                <button className="join-item btn btn-success bg-white btn-md">3</button>
                                                <button className="join-item btn btn-success bg-white btn-outline">Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>
}
const Single = ({ show, setShow, setSidebar, sidebar }) => {

    return <>

        <div className='md:w-[950px]'>
            {
                show && <div className='flex'>
                    <div className='bg-white flex-1'>
                        <div className=''>
                            <div className='flex flex-1 gap-32 md:flex md:justify-between lg:justify-between p-5 bg-white'>
                                <div className='flex'>
                                    <div onClick={e => setSidebar(true)}>
                                        <span className='flex md:hidden lg:hidden bg-white text-black font-bold text-4xl'><RiPlayListAddLine /></span>
                                    </div>
                                    <input type="text" className='input input-success h-10 input-bordered border-black bg-white input-md focus:border-green-500' placeholder='Search' />
                                </div>
                                <div className='flex gap-10'>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-error">5</span>
                                        <p className='text-3xl text-black font-bold'><IoIosNotificationsOutline /></p>
                                    </div>
                                    <img className='h-[40px] w-[40px] rounded-full' src="https://freshcart.codescandy.com/assets/images/avatar/avatar-1.jpg" alt="" />
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl text-black p-3'>Order Single</h1>
                                <div className='block md:flex md:justify-between p-10 pe-10'>
                                    <div>
                                        <a href="">
                                            <span className='hover:text-green-500 text-black font-semibold'>Dashboard</span>
                                        </a>
                                        <span className='text-slate-400 font-semibold'>/ Order list</span>
                                    </div>
                                    <button className="btn bg-green-500 text-black mt-3">Back to all orders</button>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className="card card-compact w-[90%] bg-white shadow-xl">
                                    <div className="card-body">
                                        <div className='block md:flex md:justify-between'>
                                            <div className='flex '>
                                                <h1 className='font-bold text-black text-3xl'>Order ID: #FC001</h1>
                                                <div className="badge badge-warning mt-3">pending</div>
                                            </div>
                                            <div className='block md:flex gap-3 pe-8'>
                                                <select className="w-full border p-2 rounded-md select-success border-black bg-white text-black font-semibold">
                                                    <option className='text-black font-semibold' value="1">Status</option>
                                                    <option className='text-black font-semibold' value="2">Success</option>
                                                    <option className='text-black font-semibold' value="3">Pending</option>
                                                    <option className='text-black font-semibold' value="3">Cancel</option>
                                                </select>
                                                <div className='flex mt-2 md:flex gap-5'>
                                                    <button className="p-3 rounded-md px-4 text-base bg-green-400 text-black">Save</button>
                                                    <button className="btn bg-slate-600">Download Invoice</button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-3'>
                                            <div className='p-3'>
                                                <h1 className='m-3 font-bold text-black '>Customer Details</h1>
                                                <p className='m-3 font-bold text-slate-700'>John Alex</p>
                                                <a className='m-3 font-bold text-slate-600'>anderalex@example.com</a>
                                                <p className='m-3 font-bold text-slate-600'>+998 99 22123456</p>
                                                <p className='m-3 font-bold text-green-600'>View Profile</p>
                                            </div>
                                            <div className='p-3'>
                                                <h1 className='m-3 font-bold text-black  '>Shoping Address</h1>
                                                <p className='m-3 font-bold text-slate-700'>Gerg Harvell</p>
                                                <p className='m-3 font-bold text-slate-600'>568, Suite Ave.</p>
                                                <p className='m-3 font-bold text-slate-600'>Austrlia, 235153</p>
                                                <p className='m-3 font-bold text-slate-600'>Contact No. +91 99999 12345</p>
                                            </div>
                                            <div className='p-3'>
                                                <h1 className='m-3 font-bold text-black  '>Order Details</h1>
                                                <p className='m-3 font-bold text-slate-700'>Order ID: FC001</p>
                                                <p className='m-3 font-bold text-slate-600'>Order Date: October 22, 2023</p>
                                                <p className='m-3 font-bold text-slate-600'>+998 99 22123456</p>
                                                <p className='m-3 font-bold text-slate-600'>Order Total: $734.28</p>
                                            </div>
                                        </div>
                                        <table class="">
                                            <thead>
                                                <tr>
                                                    <th className='bg-sky-100 text-start text-black p-2'>Products</th>
                                                    <th className='bg-sky-100 text-start text-black p-2'>Price</th>
                                                    <th className='bg-sky-100 text-start text-black p-2'>Quality</th>
                                                    <th className='bg-sky-100 text-start text-black p-2'>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='border-b border-b-black'>
                                                        <div className='flex'>
                                                            <img className='h-[100px] w-[100px]' src="https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg" alt="" />
                                                            <p className='text-black font-bold mt-10'>NutriChoise Digestive</p></div>
                                                    </td>
                                                    <td className='text-black text-start border-b border-b-black font-bold'>$18.0</td>
                                                    <td className='text-black text-start border-b border-b-black font-bold'>1</td>
                                                    <td className='text-black text-start border-b border-b-black font-bold'>$18.00</td>
                                                </tr>
                                                <tr>
                                                    <td className='border-b border-b-black'>
                                                        <div className='flex'>
                                                            <img className='h-[100px] w-[100px]' src="https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg" alt="" />
                                                            <p className='text-black font-bold mt-10'>NutriChoise Digestive</p></div>
                                                    </td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>$18.0</td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>1</td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>$18.00</td>
                                                </tr>
                                                <tr>
                                                    <td className='border-b border-b-black'>
                                                        <div className='flex'>
                                                            <img className='h-[100px] w-[100px]' src="https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg" alt="" />
                                                            <p className='text-black font-bold mt-10'>NutriChoise Digestive</p></div>
                                                    </td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>$18.0</td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>1</td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>$18.00</td>
                                                </tr>
                                                <tr>
                                                    <td className='border-b border-b-black'>
                                                        <div className='flex'>
                                                            <img className='h-[100px] w-[100px]' src="https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg" alt="" />
                                                            <p className='text-black font-bold mt-10'>NutriChoise Digestive</p></div>
                                                    </td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>$18.0</td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>1</td>
                                                    <td className='text-black border-b border-b-black text-start font-bold'>$18.00</td>
                                                </tr>
                                                <tr>
                                                    <td>

                                                    </td>
                                                    <td></td>
                                                    <td className='text-black text-start font-bold p-3 border-b-slate-500 border-b '>Sub Total:</td>
                                                    <td className='text-black text-start font-bold p-3 border-b-slate-500 border-b '>$80.00</td>
                                                </tr>
                                                <tr>
                                                    <td>

                                                    </td>
                                                    <td></td>
                                                    <td className='text-black text-start font-bold p-3 border-b-slate-500 border-b'>Shipping Cost </td>
                                                    <td className='text-black text-start font-bold p-3 border-b-slate-500 border-b'>$10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>

                                                    </td>
                                                    <td></td>
                                                    <td className='text-black text-start font-bold p-3 border-b-slate-500 border-b'>Grand Total</td>
                                                    <td className='text-black text-start font-bold p-3 border-b-slate-500 border-b'>$90.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className='md:flex md:justify-around'>
                                            <div className=''>
                                                <h1 className='text-black font-bold text-xl'>Payment Info</h1>
                                                <p>Cash on Delivery</p>
                                            </div>
                                            <div className=''>
                                                <div>
                                                    <h1 className='text-black font-bold text-xl'>Notes</h1>
                                                    <textarea className='w-full bg-white text-black rounded-md p-3 border border-black' placeholder='Write note for order' id=""></textarea>
                                                </div>
                                                <button className="btn btn-success">Save Notes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>
}


export default Order


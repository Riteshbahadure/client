import { useState } from "react"
import { CiHeart } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Details = () => {
    const [count, setCount] = useState(0)
    return <>
        <div className='flex p-7 justify-between ' >
            <div className="left ">
                <img src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" alt="" />

            </div>

            <div className="right justify-normal font-bold  " >
                <p className='text-green-400'>Bakery Biscuits</p>
                <span className='text-black-800'>Napolitanke Ljesnjak</span>
                <h2 className='text-green-400'> **** (30 reviews)</h2>
                <h2 className='text-bold'> $32 $35 26% Off </h2>
                <hr />

                <button className="btn btn-light">250g</button>
                <button className="btn btn-light">500g</button>
                <button className="btn btn-light">1kg</button>

                <hr />

                <div className="flex-1 gap-10">
                    <button onClick={e => setCount(count + 1)}>+</button>
                    <h1>{count}</h1>
                    <button onClick={e => setCount(count - 1)}>-</button>
                    <hr />
                    <button className="btn btn-success gap-5"><RiShoppingBag3Line />Add to cart</button>
                    <button className="btn btn-ghost gap-4"><i><FaArrowRightArrowLeft /></i></button>
                    <button className="btn btn-ghost gap-4"><i><CiHeart /></i></button>

                    {/* <button className="hover:bg-gray-400 w-20"></button> */}

                    <hr />
                    <p className="justify-between" >Product Code: <span>FBB00255</span></p>
                    <p >Availability:<span>In Stock</span></p>
                    <p >Type: <span>Fruits</span></p>
                    <p >Shipping: <span>01 day shipping. ( Free pickup today)</span></p>



                    <hr />
                    <select className="select select-bordered hover:bg-gray-400  ">
                        <option disabled selected >Share</option>
                        <option >Facebook <FaFacebook /> </option>
                        <option>Instagram <FaInstagram /> </option>
                        <option>Twitter <FaTwitter /> </option>

                    </select>




                </div>
            </div>

        </div>

        <div className=' flex '>
            <div className="left space-x-4 flex w-56 p-7 justify-items-center ">


                <img src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg" alt="" />
                <img src="https://freshcart.codescandy.com/assets/images/products/product-single-img-2.jpg" alt="" />
                <img src="https://freshcart.codescandy.com/assets/images/products/product-single-img-3.jpg" alt="" />
                <img src="https://freshcart.codescandy.com/assets/images/products/product-single-img-4.jpg" alt="" />

            </div>



        </div>

        <hr />
        <div className="flex space-x-10  btn-ligtgreen p-7">
            <button className="font-extrabold ">Product Details </button>
            <button className="font-extrabold">Information  </button>
            <button className="font-extrabold">Reviews </button>
            <button className="font-extrabold">Seller Info </button>

        </div>
        <br />
        <hr />

        {/* <br /> */}
        <div className="p-7  ">
            <h1 className="font-extrabold">Nutrient Value & Benefits</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div>
                <h1 className="font-extrabold">Storage Tips</h1>
                <p>Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <h1 className="font-extrabold">Unit</h1>
                <p>3 units</p>
            </div>
            <div>
                <h1 className="font-extrabold">Seller</h1>
                <p>DMart Pvt. LTD</p>
            </div>
            <div>
                <h1 className="font-extrabold">Disclaimer</h1>
                <p>Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed.</p>
            </div>

        </div>

    </>
}

export default Details

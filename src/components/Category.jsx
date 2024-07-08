import { CiBellOn } from "react-icons/ci";
import { GiOpenedFoodCan } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCookie } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { RiDrinksLine } from "react-icons/ri";
import { FaToiletPaper } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { GiFruitBowl } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";

const Category = () => {
    return <>
        <div className=''>
            <div className=' h-13 w-full flex justify-between p-5'>
                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                <div className='flex p-5'>
                    <button className=' rounded-full bg-slate-100 h-11 w-11 hover:bg-slate-200 p-3'><CiBellOn /></button>
                    <img className='cursor-pointer h-11 w-12 object-cover rounded-full ml-8 ' src="https://media.istockphoto.com/id/1294423557/photo/woman-with-beauty-brown-hair-portrait-of-brunette-woman-with-beautiful-long-hairstyle-fashion.jpg?s=1024x1024&w=is&k=20&c=sIiLorRJR3x2xYMhkLhdG_IeSzVY0kgboCKi_52NqZ8=" alt="" />
                </div>
            </div>
            <div>
                <div className='flex justify-between '>
                    <div className='p-7'>
                        <h1>Categories</h1>
                        <p><strong className='cursor-pointer'>Dashboard</strong>/categories</p>
                    </div>
                    <div className='p-7'>
                        <button className="btn btn-primary">Primary</button>
                    </div>
                </div>
            </div>
        </div>

        {/* table content Start */}
        <div className="p-5">
            <div class="card border-solid">
                <div class="card-header flex justify-between m-5 p-2">
                    <input type="text" placeholder="Search Category" className="input input-bordered w-full max-w-xs" />
                    <select class="form-select rounded">
                        <option selected>Stetus</option>
                        <option value="1">published</option>
                        <option value="2">unpublished</option>
                    </select>
                </div>
                <div class="card-body">
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>icons</th>
                                    <th>Name</th>
                                    <th>Product</th>
                                    <th>Status</th>
                                    <th>.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>

                                    </th>
                                    <td className=""><GiOpenedFoodCan /></td>
                                    <td><strong>Snacks  & Munchies</strong></td>
                                    <td>12</td>
                                    <td><button className="bg-green-500 text-black rounded p-2">Published</button></td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td><FaCookie /></td>
                                    <td><strong>Backry & buscuites</strong></td>
                                    <td>8 </td>
                                    <td><button className="bg-green-500 text-black rounded p-2">Published</button></td>
                                    <td><BsThreeDotsVertical /></td>

                                </tr>
                                {/* row 3 */}
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td><LuBaby /></td>
                                    <td><strong>Baby Care</strong></td>
                                    <td>32</td>
                                    <td><button className="bg-green-500 text-black rounded p-2">Published</button></td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                                {/* row 4 */}
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td><RiDrinksLine /></td>
                                    <td><strong>Cold Drinks & Juices</strong></td>
                                    <td>34</td>
                                    <td><button className="bg-green-500 text-black rounded p-2">Published</button></td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td><FaToiletPaper /></td>
                                    <td><strong>Toiletries</strong></td>
                                    <td>23</td>
                                    <td><button className="bg-red-300 text-black rounded p-2">Unpublished</button></td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td><GiMilkCarton />
                                    </td>
                                    <td><strong>Dairy, Bread & Eggs</strong></td>
                                    <td>16</td>
                                    <td><button className="bg-green-500 text-black rounded p-2">Published</button></td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td><IoFishOutline /></td>
                                    <td><strong>Chicken, Meat & Fish</strong></td>
                                    <td>14</td>
                                    <td><button className="bg-green-500 text-black rounded p-2">Published</button></td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td><GiFruitBowl /></td>
                                    <td><strong>Fruits & Vegetables</strong></td>
                                    <td>32</td>
                                    <td><button className="bg-green-500 text-black rounded p-2">Published</button></td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                                <tr className="hover:bg-slate-400">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td><MdOutlinePets /></td>
                                    <td><strong>Pet Food</strong></td>
                                    <td>25</td>
                                    <td><button className="bg-red-300 text-black rounded p-2">Unpublished</button></td>
                                    <td><BsThreeDotsVertical /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer flex justify-between">
                    <div className="m-5 p-2"><strong className="">Showing 1 to 8 of 12</strong></div>
                    <div className="m-5 p-2">
                        <button className="btn btn-primary">Privious</button>
                        <button className="bg-green-500 w-12 h-12 rounded-xl">1</button>
                        <button className="hover:bg-green-500 w-12 h-12 rounded-xl">2</button>
                        <button className="hover:bg-green-500 w-12 h-12 rounded-xl">3</button>
                        <button className="btn hover:bg-green-300">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Category
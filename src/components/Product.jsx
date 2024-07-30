import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/publicSlice';
import { useNavigate } from 'react-router-dom';
import { useGetAllProuctsQuery } from '../redux/apis/admin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const { data } = useGetAllProuctsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.name} added to cart`);
    };

    return (
        <>
            <header className='pb-5'>
                <h1 className='text-4xl font-bold text-start lg:px-20 max-sm:text-4xl max-sm:text-center text-white mb-2'>Explore Our Hotel</h1>
                {/* <p className='text-xl text-center text-indigo-600'>Discover your perfect stay</p> */}
            </header>
            <main className='container mx-auto mt-12 px-4 max-sm:px-7'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {data && data.map(item => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105"
                        >
                            <div className='relative'>
                                <img
                                    className='w-full h-64 object-cover'
                                    src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`}
                                    alt={item.name}
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition'>
                                    <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col justify-between h-56">
                                <div>
                                    <p className='text-gray-600 mb-4 h-20'>{item.desc}</p>
                                    <p className='text-xl font-bold text-indigo-600 mt-5 mb-1'>${item.price}</p>
                                </div>
                                <div className="mt-4 flex space-x-2">
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="flex-1 bg-indigo-500 text-white px-2 rounded-md hover:bg-indigo-600 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => { handleAddToCart(item); navigate("/cart"); }}
                                        className="flex-1 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                                    >
                                        View in Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            {/* <ToastContainer /> */}
        </>
    );
};

export default Product;

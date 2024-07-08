import React from 'react';
// import { useGetAllProductsQuery } from '../redux/apis/admin';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/publicSlice';
import { useGetAllProuctsQuery } from '../redux/apis/admin';

const Product = () => {
    const { data } = useGetAllProuctsQuery();
    const dispatch = useDispatch();
    
    return <>
    <h1 className='text-4xl font-semibold pl-20'>Our Products</h1>
     <div className='container mx-auto mt-12 px-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {data && data.map(item => (
                    <div 
                        key={item.id} 
                        className="transform transition duration-500 hover:scale-105 hover:shadow-2xl card bg-gray-100 shadow-md rounded-lg overflow-hidden"
                    >
                        <figure className='relative'>
                            <img 
                                className='w-full h-80 object-cover transition duration-500' 
                                src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} 
                                alt={item.name} 
                            />
                            <figcaption className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center'>
                                {item.name}
                            </figcaption>
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-xl font-semibold mb-2">{item.name}</h2>
                            <p className='text-gray-600 mb-4'>{item.desc}</p>
                            <p className='text-indigo-600 text-xl font-bold mb-4'>${item.price}</p>
                            <div className="text-right">
                                <button
                                    onClick={() => dispatch(addToCart(item))}
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors w-full duration-300"
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default Product;

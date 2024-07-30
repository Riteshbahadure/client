import React, { useState, useEffect } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/publicSlice';

const Cart = () => {
    const { cart } = useSelector(state => state.public);
    const dispatch = useDispatch();

    // Initialize quantities with state
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        setQuantities(
            cart.reduce((acc, item) => {
                acc[item.id] = 1; // Default quantity
                return acc;
            }, {})
        );
    }, [cart]);

    // Function to handle quantity change
    const handleQuantityChange = (id, amount) => {
        setQuantities(prevQuantities => {
            const newQuantities = { ...prevQuantities };
            if (newQuantities[id] + amount >= 1) {
                newQuantities[id] += amount;
            }
            return newQuantities;
        });
    };

    // Function to calculate total price
    const calculateTotal = () => {
        return cart.reduce((acc, item) => {
            const quantity = quantities[item.id] || 1; // Use default quantity if not found
            return acc + item.price * quantity;
        }, 0);
    };

    // Function to handle item removal
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    // Handle empty cart scenario
    if (!cart || cart.length === 0) {
        return (
            <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
                <h1 className="text-2xl font-semibold mb-4 text-gray-700">Cart is Empty</h1>
                <Link to="/" className="btn btn-primary">Go to Shop</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-10 px-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden md:mx-10 lg:mx-20">
                <div className="p-6">
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
                            <p className="text-gray-500">Delivering to 382480</p>
                        </div>
                        <button onClick={() => dispatch(emptyCart())} className='btn btn-error animate-pulse max-sm:mt-4'>
                            Empty Cart
                        </button>
                    </div>
                    <div className="alert alert-success mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='font-semibold text-gray-800'>You've got FREE delivery. Start checkout now!</span>
                    </div>
                    {cart.map(item => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center mb-6 border-b border-gray-200 pb-6">
                            <a href="#" className="flex-shrink-0 mb-4 md:mb-0">
                                <img className='w-32 max-sm:h-44 max-sm:w-72 h-32 object-cover rounded-lg' src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt={item.name} />
                            </a>
                            <div className="flex-grow md:ml-6 max-sm:mt-3">
                                <h1 className='font-bold text-lg text-gray-800'>{item.name}</h1>
                                <p className='text-gray-500'>{item.desc}</p>
                                <button className='flex items-center max-sm:mt-3 text-red-500 mt-2 hover:text-red-600 transition-colors' onClick={() => handleRemoveItem(item.id)}>
                                    {/* <FaRegTrashAlt className='mr-1 ' /> Remove */}
                                </button>
                            </div>
                            {/* <div className='flex items-center mt-4 md:mt-0'>
                                <button onClick={() => handleQuantityChange(item.id, -1)} className="btn btn-outline">-</button>
                                <span className="mx-2 text-lg">{quantities[item.id] || 1}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)} className="btn btn-outline">+</button>
                            </div> */}
                            <div className='font-bold text-xl text-gray-800 text-right mt-4 md:mt-0 md:ml-10'>
                                Rs {item.price * (quantities[item.id] || 1)}
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-10">
                        <div className="text-2xl font-bold text-gray-800">Total: Rs {calculateTotal().toFixed(2)}</div>
                        <div className="mt-4 md:mt-0">
                            <Link to="/checkout" className="btn btn-info animate-bounce">Proceed to Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

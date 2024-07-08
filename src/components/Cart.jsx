import React, { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyCart } from '../redux/slices/publicSlice';

const Cart = () => {
    const { cart } = useSelector(state => state.public);
    const dispatch = useDispatch();

    // Initialize quantities with state
    const [quantities, setQuantities] = useState(cart.reduce((acc, item) => {
        acc[item.id] = 1;
        return acc;
    }, {}));

    const handleQuantityChange = (id, amount) => {
        setQuantities(prevQuantities => {
            const newQuantities = { ...prevQuantities, [id]: prevQuantities[id] + amount };
            if (newQuantities[id] < 1) {
                newQuantities[id] = 1;
            }
            return newQuantities;
        });
    };

    const total = cart.reduce((acc, item) => acc + item.price * quantities[item.id], 0);

    if (!cart || cart.length === 0) {
        return (
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold mb-4">Cart is Empty</h1>
                <Link to="/" className="btn btn-primary">Go to Shop</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-20">
            <div className="card card-compact w-full px-28 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="card-body p-6">
                    <div className='flex justify-between items-center mb-6'>
                        <div>
                            <h2 className="card-title text-2xl font-bold">Shopping Cart</h2>
                            <p className="text-gray-500">Delivering to 382480</p>
                        </div>
                        <button onClick={() => dispatch(emptyCart())} className='btn btn-danger'>
                            Empty Cart
                        </button>
                    </div>
                    <div className="alert alert-success mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>You've got FREE delivery. Start checkout now!</span>
                    </div>
                    {cart.map(item => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center mb-6">
                            <a href="#" className="flex-shrink-0 mb-3 md:mb-0">
                                <img className='w-20 h-20 object-cover' src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt={item.name} />
                            </a>
                            <div className="flex-grow md:ml-6">
                                <h1 className='font-bold text-lg'>{item.name}</h1>
                                <p className='text-gray-500'>{item.desc}</p>
                                <button className='flex items-center text-red-500 mt-2' onClick={() => {/* Handle remove item */ }}>
                                    <FaRegTrashAlt className='mr-1' /> Remove
                                </button>
                            </div>
                            <div className='flex items-center mt-4 md:mt-0'>
                                <button onClick={() => handleQuantityChange(item.id, -1)} className="btn btn-outline">-</button>
                                <span className="mx-2">{quantities[item.id]}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)} className="btn btn-outline">+</button>
                            </div>
                            <div className='font-bold text-xl text-right mt-4 md:mt-0 md:ml-10'>
                                ${item.price * quantities[item.id]}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-10">
                        <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
                        <div>
                            <Link to="/checkout" className="btn btn-info mr-2">Proceed to Checkout</Link>
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
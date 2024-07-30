import React, { useEffect, useState } from 'react';
import Navbar from './Navbar ';
import Footer from './Footer';
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { useAddOrderMutation } from '../redux/apis/orderApi';
import { emptyCart } from '../redux/slices/publicSlice';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);
    const { cart } = useSelector(state => state.public);
    const [placeOrder, { isSuccess }] = useAddOrderMutation();
    const dispatch = useDispatch();

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

    useEffect(() => {
        if (isSuccess) {
            toast.success("Order placed successfully");
            dispatch(emptyCart());
            navigate("/success");
        }
    }, [isSuccess, dispatch, navigate]);

    const initialValues = {
        name: '',
        address: '',
        mobile: '',
        paymentMethod: 'Cash On Delivery'
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        address: Yup.string().required('Address is required'),
        mobile: Yup.string().required('Mobile Number is required').matches(/^[0-9]+$/, 'Must be a valid number')
    });

    const handlePlaceOrder = (values) => {
        const products = cart.map(item => item._id);
        placeOrder({ products, customer: user._id, ...values });
    };

    if (!cart || cart.length === 0) {
        return (
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold mb-4">Cart is Empty</h1>
                <Link to="/" className="btn btn-primary">Go to Shop</Link>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto my-10 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <p className="text-gray-500">Delivering to 382480</p>
                            </div>
                            <button onClick={() => dispatch(emptyCart())} className="btn btn-danger">
                                Empty Cart
                            </button>
                        </div>
                        <div className="alert alert-success">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>You've got FREE delivery. Start checkout now!</span>
                        </div>
                        {cart.map(item => (
                            <div key={item.id} className="mt-14 flex items-center justify-between mb-6 border-b pb-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                <img className="w-20 h-20 object-cover rounded-lg shadow-md" src={`${import.meta.env.VITE_BACKEND_URL}/${item.image}`} alt={item.name} />
                                <div className="ml-4 flex-grow">
                                    <h1 className="font-bold text-lg">{item.name}</h1>
                                    <p className="text-gray-500">{item.desc}</p>
                                    <button className="flex items-center text-red-500 mt-2" onClick={() => {/* Handle remove item */ }}>
                                        <FaRegTrashAlt className="mr-1" /> Remove
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => handleQuantityChange(item.id, -1)} className="btn btn-outline mr-2 max-sm:mr-0">-</button>
                                    <span className="mx-2">{quantities[item.id]}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)} className="btn btn-outline ml-2 max-sm:ml-0">+</button>
                                </div>
                                <div className="font-bold ml-3 text-xl">
                                    Rs.{item.price * quantities[item.id]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6 lg:mb-0 lg:-mt-10  text-center">Your Details</h2>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handlePlaceOrder}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="mb-4 lg:mt-12">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            className="input input-bordered w-full"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                                        <Field
                                            type="text"
                                            name="address"
                                            placeholder="Enter your address"
                                            className="input input-bordered w-full"
                                        />
                                        <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Mobile</label>
                                        <Field
                                            type="number"
                                            name="mobile"
                                            placeholder="Enter your mobile number"
                                            className="input input-bordered w-full"
                                        />
                                        <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="mb-4 lg:mt-7">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method</label>
                                        <div className="flex items-center lg:mt-2">
                                            <Field
                                                type="radio"
                                                id="cod"
                                                name="paymentMethod"
                                                value="Cash On Delivery"
                                                checked
                                                readOnly
                                                className="mr-2"
                                            />
                                            <label htmlFor="cod" className="text-gray-700  font-bold">Cash On Delivery</label>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:mt-8 items-center text-lg font-bold mb-6">
                                        <span>Total:</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full text-white font-bold text-lg"
                                        disabled={isSubmitting}
                                    >
                                        Buy Now
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;

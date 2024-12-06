import React, { useState } from 'react';
import './Coffee.css';
import { Plus, Minus, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Pagination } from '../pagination/Pagination';

export const Coffee = () => {
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState('');
    const coffeePrice = 14;
    const totalAmount = quantity * coffeePrice;
    const [showModal, setShowModal] = useState(false);

    const addQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const generateUpiLink = () => {
        const upiId = '9834153020@ybl'; // Replace with your UPI ID
        const userName = 'Akshay Bhaltilak'; // Replace with your name
        const amount = totalAmount; // Total payment amount

        // Generate the UPI deep link
        const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
            userName
        )}&am=${amount}&cu=INR&tn=${encodeURIComponent(
            note || 'Thanks for your support!'
        )}`;

        return upiLink;
    };

    return (
        <div className="container1 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center">
            <div className="container2 p-8 rounded-lg shadow-md bg-black/30 w-full max-w-2xl">
                <div className="container_heading text-center mb-8">
                    <h2 className="text-4xl font-bold">Buy me a Coffee</h2>
                </div>

                <div className="main_container_coffee flex flex-col items-center">
                    <div className="coffee_img mb-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/256/11471/11471245.png"
                            alt="Coffee"
                            className="w-24 h-24"
                        />
                    </div>
                    <h3 className="font-bold text-2xl text-black mb-4">
                        Starting from ₹14/coffee
                    </h3>
                    <div className="quantity_container flex items-center text-black gap-4 mb-6">
                        <button
                            type="button"
                            onClick={removeQuantity}
                            className="rounded-full bg-gray-700 px-3 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-600 focus:outline-none"
                        >
                            <Minus className="h-4 w-4" />
                        </button>
                        <span className="quantity text-2xl font-bold">{quantity}</span>
                        <button
                            type="button"
                            onClick={addQuantity}
                            className="rounded-full bg-gray-700 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus:outline-none"
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mb-6">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Write a note..."
                    />
                </div>

                <div className="coffee_price flex flex-col items-center">
                    <h2 className="text-sm font-semibold text-gray-400 flex items-center mb-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/9784/9784453.png"
                            alt="Currency"
                            className="w-5 h-5 mr-2"
                        />
                        ₹{totalAmount}
                    </h2>
                    <button
                        type="button"
                        onClick={openModal}
                        className="inline-flex items-center rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600"
                    >
                        Buy a Coffee for Akshay
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>

                {showModal && (
                    <div className="modal w-[300px] rounded-md border bg-black/60 p-4 text-white mt-6">
                        <button
                            className="absolute top-2 right-2 text-white text-xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h1 className="text-lg font-semibold mb-4">Confirm Payment</h1>
                        <p className="text-sm mb-2">Total Amount: ₹{totalAmount}</p>
                        <p className="text-sm mb-2">Quantity: {quantity}</p>
                        <p className="text-sm mb-4">Note: {note || 'No note provided'}</p>
                        <div className="flex justify-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/256/455/455705.png"
                                alt="Payment"
                                className="w-32 h-32"
                            />
                        </div>
                        <a
                            href={generateUpiLink()}
                            className="inline-flex items-center rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600 mt-4"
                        >
                            Proceed to Pay
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                )}
                <Pagination result="About" next="/" prev="/contact" className="mt-10" />
            </div>
        </div>
    );
};

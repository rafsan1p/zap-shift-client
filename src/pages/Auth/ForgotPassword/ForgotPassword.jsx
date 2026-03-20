import React from 'react';
import { Link } from 'react-router';

const ForgotPassword = () => {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Forgot Password</h1>
            <p className="text-gray-400 text-sm mb-7">Enter your email address and we'll send you a reset link.</p>

            <form className="flex flex-col gap-4">
                <div>
                    <label className="text-sm text-gray-600 mb-1 block">Email</label>
                    <input type="email" placeholder="Email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition" />
                </div>
                <button type="submit" className="w-full bg-[#CAEB45] text-gray-900 font-bold py-2.5 rounded-lg hover:bg-[#b8d93a] transition">
                    Send
                </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
                Remember your password? <Link to="/login" className="text-[#5a8a00] font-medium hover:underline">Login</Link>
            </p>
        </div>
    );
};

export default ForgotPassword;

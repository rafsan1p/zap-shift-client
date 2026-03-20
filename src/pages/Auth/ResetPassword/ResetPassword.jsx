import React from 'react';
import { useNavigate } from 'react-router';

const ResetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Reset Password</h1>
            <p className="text-gray-400 text-sm mb-7">Reset your password.</p>

            <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); navigate('/login'); }}>
                <div>
                    <label className="text-sm text-gray-600 mb-1 block">New Password</label>
                    <input type="password" placeholder="Password" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition" />
                </div>
                <div>
                    <label className="text-sm text-gray-600 mb-1 block">Confirm Password</label>
                    <input type="password" placeholder="Password" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition" />
                </div>
                <button type="submit" className="w-full bg-[#CAEB45] text-gray-900 font-bold py-2.5 rounded-lg hover:bg-[#b8d93a] transition">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;

import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="w-full">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1">Welcome Back</h1>
            <p className="text-gray-500 text-base mb-7">Login with ZapShift</p>

            <form className="flex flex-col gap-4">
                <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1 block">Email</label>
                    <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CAEB45] transition" />
                </div>
                <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1 block">Password</label>
                    <div className="relative">
                        <input type={showPass ? 'text' : 'password'} placeholder="Password" className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm outline-none focus:border-[#CAEB45] transition" />
                        <button type="button" onClick={() => setShowPass(p => !p)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                        </button>
                    </div>
                </div>

                <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-[#5a8a00] -mt-1">Forget Password?</Link>

                <button type="submit" className="w-full bg-[#CAEB45] text-gray-900 font-bold py-3 rounded-lg hover:bg-[#b8d93a] transition text-base">
                    Login
                </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
                Don't have any account? <Link to="/register" className="text-[#5a8a00] font-semibold hover:underline">Register</Link>
            </p>

            <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400">Or</span>
                <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition">
                <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                Login with google
            </button>
        </div>
    );
};

export default Login;

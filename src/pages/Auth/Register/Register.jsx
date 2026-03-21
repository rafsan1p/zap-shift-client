import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false);
    const {registerUser} = useAuth();

    const handleRegistration = (data) => {
        console.log('After register', data);
        registerUser(data.email, data.password)
        .then(res =>{
            console.log(res.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="w-full">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1">Create an Account</h1>
            <p className="text-gray-800 text-base mb-5">Register with ZapShift</p>

            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#aaa" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>

            <form onSubmit={handleSubmit(handleRegistration)} className="flex flex-col gap-4">
                <div>
                    <label className="text-base font-semibold text-gray-800 mb-1 block">Name</label>
                    <input type="text" {...register('text', { required: true })} placeholder="Name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition" />
                </div>

                <div>
                    <label className="text-base font-semibold text-gray-800 mb-1 block">Email</label>
                    <input type="email" {...register('email', { required: true })} placeholder="Email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition" />

                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is Required</p>}
                </div>

                <div>
                    <label className="text-base font-semibold text-gray-800 mb-1 block">Password</label>
                    <div className="relative">
                        <input type={showPass ? 'text' : 'password'} {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/
                        })} placeholder="Password" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm outline-none focus:border-[#CAEB45] transition" />

                        <button type="button" onClick={() => setShowPass(p => !p)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                        </button>
                    </div>
                    {errors.password?.type === 'required' && <p className='text-red-500  mt-1'>Password is Required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500 mt-1'>Password must be 6 characters or longer</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-500 mt-1'>Password must have one uppercase, lowercase and special character</p>}
                </div>

                <button type="submit" className="w-full bg-[#CAEB45] text-gray-900 font-bold py-2.5 rounded-lg hover:bg-[#b8d93a] transition">
                    Register
                </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
                Already have an account? <Link to="/login" className="text-[#5a8a00] font-medium hover:underline">Login</Link>
            </p>

            <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400">Or</span>
                <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition">
                <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /></svg>
                Register with google
            </button>
        </div>
    );
};

export default Register;

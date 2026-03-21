import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

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

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;

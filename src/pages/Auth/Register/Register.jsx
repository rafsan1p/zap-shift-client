import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPass, setShowPass] = useState(false);
    const { registerUser, updateUserProfile, sendVerificationEmail } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [authError, setAuthError] = useState('');

    const handleRegistration = (data) => {
        setAuthError('');
        const profileImg = data.photo[0];

        registerUser(data.email, data.password)
        .then(res => {
            const formData = new FormData();
            formData.append('image', profileImg);
            const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
            axios.post(image_API_URL, formData)
                .then(imgRes => {
                    const userProfile = {
                        displayName: data.name,
                        photoURL: imgRes.data.data.url
                    };
                    updateUserProfile(userProfile)
                        .then(() => {
                            sendVerificationEmail()
                                .then(() => {
                                    navigate('/enter-code', { state: { email: data.email, from: location.state || '/' } });
                                })
                                .catch(err => setAuthError(err.message));
                        })
                        .catch(error => setAuthError(error.message));
                })
                .catch(() => {
                    // If image upload fails, still send verification
                    sendVerificationEmail()
                        .then(() => {
                            navigate('/enter-code', { state: { email: data.email, from: location.state || '/' } });
                        })
                        .catch(err => setAuthError(err.message));
                });
        })
        .catch(error => {
            setAuthError(error.message);
        });
    };

    return (
        <div className="w-full">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1">Create an Account</h1>
            <p className="text-gray-800 text-base mb-5">Register with ZapShift</p>

            <form onSubmit={handleSubmit(handleRegistration)} className="flex flex-col gap-4">
                <div>
                    <label className="text-base font-semibold text-gray-800 mb-1 block">Name</label>
                    <input type="text" {...register('name', { required: true })} placeholder="Name" className="input w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition" />

                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is Required</p>}

                </div>

                <div>
                    <label className="text-base font-semibold text-gray-800 mb-1 block">Photo</label>
                    <input type="file" {...register('photo', { required: true })} placeholder="Your Photo" className="file-input w-full border border-gray-300 rounded-lg text-sm outline-none focus:border-[#CAEB45] transition" />

                    {errors.photo?.type === 'required' && <p className='text-red-500'>Photo is Required</p>}

                </div>

                <div>
                    <label className="text-base font-semibold text-gray-800 mb-1 block">Email</label>
                    <input type="email" {...register('email', { required: true })} placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition" />

                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is Required</p>}
                </div>

                <div>
                    <label className="text-base font-semibold text-gray-800 mb-1 block">Password</label>
                    <div className="relative">
                        <input type={showPass ? 'text' : 'password'} {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/
                        })} placeholder="Password" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm outline-none focus:border-[#CAEB45] transition" />

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

                {authError && <p className="text-red-500 text-sm -mt-2">{authError}</p>}
            </form>

            <p className="text-sm text-gray-500 mt-4">
                Already have an account? <Link state={location.state} to="/login" className="text-[#5a8a00] font-medium hover:underline">Login</Link>
            </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;

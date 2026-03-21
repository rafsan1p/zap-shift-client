import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser, sendVerificationEmail } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [authError, setAuthError] = useState('');

    const handleLogin = (data) => {
        setAuthError('');
        signInUser(data.email, data.password)
        .then(res => {
            const user = res.user;
            if (!user.emailVerified) {
                sendVerificationEmail()
                    .then(() => {
                        navigate('/enter-code', { state: { email: data.email, from: location?.state || '/' } });
                    })
                    .catch(err => setAuthError(err.message));
            } else {
                navigate(location?.state || '/');
            }
        })
        .catch(error => {
            setAuthError('Invalid email or password. Please try again.');
            console.log(error);
        });
    };


    return (
        <div className="w-full">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1">Welcome Back</h1>
            <p className="text-gray-800 text-base mb-7">Login with ZapShift</p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
                {/* email field */}
                <div>
                    <label className="text-sm font-semibold text-gray-800 mb-1 block">Email</label>
                    <input type="email" {...register('email', { required: true })} placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CAEB45] transition" />

                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is Required</p>}
                </div>

                {/* password field */}
                <div>
                    <label className="text-sm font-semibold text-gray-800 mb-1 block">Password</label>
                    <div className="relative">
                        <input type={showPass ? 'text' : 'password'} {...register('password', {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/
                        })} placeholder="Password" className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm outline-none focus:border-[#CAEB45] transition" />

                        <button type="button" onClick={() => setShowPass(p => !p)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            {showPass ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                        </button>
                    </div>
                    {errors.password?.type === 'required' && <p className='text-red-500  mt-1'>Password is Required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-500 mt-1'>Password must be 6 characters or longer</p>}
                    {errors.password?.type === 'pattern' && <p className='text-red-500 mt-1'>Password must have one uppercase, lowercase and special character</p>}
                </div>

                <Link to="/forgot-password" className="text-sm text-gray-400 hover:text-[#5a8a00] -mt-1">Forget Password?</Link>

                <button type="submit" className="w-full bg-[#CAEB45] text-gray-900 font-bold py-3 rounded-lg hover:bg-[#b8d93a] transition text-base">
                    Login
                </button>

                {authError && <p className="text-red-500 text-sm -mt-2">{authError}</p>}
            </form>

            <p className="text-sm text-gray-500 mt-4">
                Don't have any account? <Link state={location.state} to="/register" className="text-[#5a8a00] font-semibold hover:underline">Register</Link>
            </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;

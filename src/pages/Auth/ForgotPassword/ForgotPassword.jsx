import React, { useState } from 'react';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { resetPassword } = useAuth();
    const [sent, setSent] = useState(false);
    const [authError, setAuthError] = useState('');

    const handleForgotPassword = (data) => {
        setAuthError('');
        resetPassword(data.email)
            .then(() => {
                setSent(true);
            })
            .catch(error => {
                setAuthError('No account found with this email address.');
                console.log(error);
            });
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Forgot Password</h1>
            <p className="text-gray-400 text-sm mb-7">Enter your email and we'll send you a reset link.</p>

            {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-700 font-semibold text-sm">Reset link sent!</p>
                    <p className="text-green-600 text-sm mt-1">Check your inbox and follow the link to reset your password.</p>
                </div>
            ) : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleForgotPassword)}>
                    <div>
                        <label className="text-sm font-semibold text-gray-800 mb-1 block">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition"
                        />
                        {errors.email?.type === 'required' && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        {authError && <p className="text-red-500 text-sm mt-1">{authError}</p>}
                    </div>
                    <button type="submit" className="w-full bg-[#CAEB45] text-gray-900 font-bold py-2.5 rounded-lg hover:bg-[#b8d93a] transition">
                        Send Reset Link
                    </button>
                </form>
            )}

            <p className="text-sm text-gray-500 mt-4">
                Remember your password? <Link to="/login" className="text-[#5a8a00] font-medium hover:underline">Login</Link>
            </p>
        </div>
    );
};

export default ForgotPassword;

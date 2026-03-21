import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { auth } from '../../../firebase/firebase.init';
import useAuth from '../../../hooks/useAuth';

const EnterCode = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { sendVerificationEmail } = useAuth();
    const destination = location.state?.from || '/';
    const email = location.state?.email || '';

    const [checking, setChecking] = useState(false);
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState('');
    const [resent, setResent] = useState(false);

    // Poll every 3 seconds to check if user verified their email
    useEffect(() => {
        const interval = setInterval(async () => {
            const user = auth.currentUser;
            if (user) {
                await user.reload();
                if (user.emailVerified) {
                    setVerified(true);
                    clearInterval(interval);
                    setTimeout(() => navigate(destination), 1500);
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [navigate, destination]);

    const handleResend = () => {
        setError('');
        setResent(false);
        sendVerificationEmail()
            .then(() => setResent(true))
            .catch(err => setError(err.message));
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Verify Your Email</h1>
            <p className="text-gray-400 text-sm mb-8">
                We sent a verification link to <span className="font-semibold text-gray-700">{email}</span>. Open it to verify your account.
            </p>

            {verified ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-700 font-semibold text-sm">Email verified! Redirecting...</p>
                </div>
            ) : (
                <div className="bg-[#f5fce8] border border-[#CAEB45] rounded-lg p-4 mb-6 flex items-start gap-3">
                    <div className="mt-0.5">
                        <svg className="w-5 h-5 text-[#5a8a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-800">Check your inbox</p>
                        <p className="text-sm text-gray-500 mt-0.5">Click the verification link in the email. This page will automatically redirect once verified.</p>
                    </div>
                </div>
            )}

            <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 border-2 border-[#CAEB45] border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-400">Waiting for verification...</span>
            </div>

            {resent && <p className="text-green-600 text-sm mb-3">Verification email resent successfully.</p>}
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
                onClick={handleResend}
                className="w-full border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition text-sm"
            >
                Resend Verification Email
            </button>
        </div>
    );
};

export default EnterCode;

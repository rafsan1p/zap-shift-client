import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet, Link } from 'react-router';
import authImage from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white">
            {/* Left panel — 50% on desktop */}
            <div className="w-full md:flex-1 flex flex-col px-8 sm:px-12 py-10">
                <Link to="/"><Logo /></Link>
                <div className="flex-1 flex flex-col justify-center">
                    {/* On mobile/tablet: centered. On PC: pushed right with auto left margin */}
                    <div className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto lg:mr-60">
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Right panel — 50% on desktop */}
            <div className="hidden md:flex md:flex-1 bg-[#f5fce8] items-center justify-center p-8">
                <img src={authImage} alt="auth" className="w-full max-w-md object-contain" />
            </div>
        </div>
    );
};

export default AuthLayout;

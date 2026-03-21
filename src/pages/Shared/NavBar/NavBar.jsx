import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const navLinkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-full text-sm font-medium transition ${isActive ? 'bg-[#CAEB45] text-gray-900' : 'text-gray-700 hover:bg-gray-100'
    }`;

const NavBar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        })
    }

    const links = (
        <>
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
            <li><NavLink to="/coverage" className={navLinkClass}>Coverage</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
            <li><NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink></li>
            <li><NavLink to="/rider" className={navLinkClass}>Be a Rider</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-white shadow-sm px-4 sm:px-8 mb-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl p-0">
                    <Logo />
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {
                    user ? <NavLink onClick={handleLogOut} to="/login" className="btn text-sm font-medium text-gray-700 px-4 py-1.5 hover:bg-gray-100 rounded-full transition">LogOut</NavLink>

                    : <NavLink to="/login" className="btn text-sm font-medium text-gray-700 px-4 py-1.5 hover:bg-gray-100 rounded-full transition">Sign In</NavLink>
                }
                <div className="relative flex items-center">
                    <NavLink to="/rider" className="bg-[#CAEB45] text-gray-900 font-semibold text-sm px-5 py-2 pr-10 rounded-full hover:bg-[#b8d93a] transition">
                        Be a Rider
                    </NavLink>
                    <span className="absolute -right-3 w-9 h-9 bg-gray-900 text-[#CAEB45] rounded-full flex items-center justify-center text-sm font-bold shadow">↗</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar></NavBar>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
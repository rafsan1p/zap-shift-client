import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import Loading from '../components/loading/loading';
import useAuth from '../hooks/useAuth';

const RootLayout = () => {
    const { loading } = useAuth();

    if (loading) return <Loading />;

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
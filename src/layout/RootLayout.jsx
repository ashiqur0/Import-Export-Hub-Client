import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar />

            <div className='min-h-screen'>
                <Outlet />
            </div>            

            <Footer />
        </div>
    );
};

export default RootLayout;
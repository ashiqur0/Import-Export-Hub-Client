import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Banner from '../components/home/Banner';

const RootLayout = () => {
    return (
        
        <div className='bg-slate-900'>
            <Navbar />
            
            <div className='min-h-screen'>
                <Outlet />
            </div>            

            <Footer />
        </div>
    );
};

export default RootLayout;
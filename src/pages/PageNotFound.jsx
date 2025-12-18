import React from 'react';
import errorImg from '../assets/error-404.png'
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import useAuth from '../hooks/useAuth';

const PageNotFound = () => {

    const { toggle } = useAuth();

    return (
        <div>
            <title>Page Not Found</title>
            <Navbar></Navbar>
            <div className={`${toggle && 'bg-slate-900'} w-full md:mx-auto flex justify-center items-center py-20 px-10`}>
                <img src={errorImg} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;
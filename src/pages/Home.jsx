import React, { Suspense } from 'react';
import LatestProducts from '../components/home/LatestProducts';
import GlobalTraders from '../components/home/GlobalTraders';
import Banner from '../components/home/Banner';
import TopExportsCategory from '../components/home/TopExportsCategory';

const Home = () => {

    return (
        <div className='w-full'>
            <Banner></Banner>

            <div className='md:max-w-7xl md:mx-auto mx-2'>
                <LatestProducts />
                <TopExportsCategory />
            </div>
            <GlobalTraders />
        </div>
    );
};

export default Home;
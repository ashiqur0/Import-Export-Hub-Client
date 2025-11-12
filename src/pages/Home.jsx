import React from 'react';
import Banner from '../components/home/Banner';
import LatestProducts from '../components/home/LatestProducts';
import GlobalTraders from '../components/home/GlobalTraders';
import TopExportsCategory from '../components/home/TopExportsCategory';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <LatestProducts />
            <TopExportsCategory />
            <GlobalTraders />
        </div>
    );
};

export default Home;
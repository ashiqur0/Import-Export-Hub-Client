import React from 'react';
import Banner from '../components/home/Banner';
import LatestProducts from '../components/home/LatestProducts';
import GlobalTraders from '../components/home/GlobalTraders';
import TopExportsCategory from '../components/home/TopExportsCategory';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div className=''>
            <Banner data={data} />
            <div className='w-7xl mx-auto'>
                <LatestProducts data={data} />
                <TopExportsCategory />
                <GlobalTraders />
            </div>
        </div>
    );
};

export default Home;
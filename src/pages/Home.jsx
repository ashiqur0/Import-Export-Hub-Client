import React, { Suspense } from 'react';
import Banner from '../components/home/Banner';
import LatestProducts from '../components/home/LatestProducts';
import GlobalTraders from '../components/home/GlobalTraders';
import TopExportsCategory from '../components/home/TopExportsCategory';
import { useLoaderData } from 'react-router';
import Loading from '../components/common/Loading';

const Home = () => {
    const data = useLoaderData();

    return (
        <div className=''>
            <Banner data={data} />
            <div className='max-w-7xl md:mx-auto mx-2'>
                <Suspense fallback={<Loading></Loading>}>
                    <LatestProducts data={data} />
                </Suspense>
                
                <TopExportsCategory />
                <GlobalTraders />
            </div>
        </div>
    );
};

export default Home;
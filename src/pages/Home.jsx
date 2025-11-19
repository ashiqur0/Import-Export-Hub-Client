import React, { Suspense, use } from 'react';
import Banner from '../components/home/Banner';
import LatestProducts from '../components/home/LatestProducts';
import GlobalTraders from '../components/home/GlobalTraders';
import TopExportsCategory from '../components/home/TopExportsCategory';
import Loading from '../components/common/Loading';

const latestProductsPromise = fetch('http://localhost:5000/latest-products').then(res => res.json());
const Home = () => {
    
    const latestProducts = use(latestProductsPromise);
    // console.log(latestProducts);

    return (
        <div className=''>
            <Banner data={latestProducts} />
            <div className='max-w-7xl md:mx-auto mx-2'>
                <Suspense fallback={<Loading></Loading>}>
                    <LatestProducts latestProducts={latestProducts} />
                </Suspense>
                
                <TopExportsCategory />
                <GlobalTraders />
            </div>
        </div>
    );
};

export default Home;
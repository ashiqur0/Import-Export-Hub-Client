import React from 'react';
import Products from '../common/Products';

const LatestProducts = ({latestProducts}) => {
    console.log(latestProducts);

    return (
        <div className='my-10'>
            <h1 className='md:text-3xl text-2xl font-semibold mb-5'>Latest products</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    latestProducts.map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default LatestProducts;
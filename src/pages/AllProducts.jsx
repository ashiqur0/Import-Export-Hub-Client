import React, { use } from 'react';
import Products from '../components/common/Products';
import AuthContext from '../context/AuthContext';

const AllProducts = () => {
    const { allProducts:data } = use(AuthContext);
    // console.log(data);

    return (
        <div className='max-w-7xl mx-2 md:mx-auto my-10'>
            <h1 className='md:text-3xl text-2xl font-semibold mb-5'>All Products page({data.length})</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    data.map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default AllProducts;
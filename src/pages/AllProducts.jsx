import React, { use } from 'react';
import Products from '../components/common/Products';
import AuthContext from '../context/AuthContext';
const AllProducts = () => {
    const { allProducts } = use(AuthContext);

    return (
        <div className='max-w-7xl mx-2 md:mx-auto my-10'>
            <title>All Products</title>
            <h1 className='md:text-3xl text-2xl font-semibold mb-5'>All Products page({allProducts.length})</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    allProducts.map(product => <Products key={product._id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default AllProducts;
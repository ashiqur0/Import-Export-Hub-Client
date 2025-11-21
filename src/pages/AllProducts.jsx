import React, { use } from 'react';
import Products from '../components/common/Products';
import AuthContext from '../context/AuthContext';
// import { useLoaderData } from 'react-router';

const AllProducts = () => {
    const { allProducts } = use(AuthContext);
        // const prod = useLoaderData();
    // console.log(data);

    return (
        <div className='max-w-7xl mx-2 md:mx-auto my-10'>
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
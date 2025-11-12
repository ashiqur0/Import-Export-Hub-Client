import React from 'react';
import { useLoaderData } from 'react-router';
import Products from '../components/common/Products';

const AllProducts = () => {
    const data = useLoaderData();

    return (
        <div className='max-w-7xl mx-2 md:mx-auto my-10'>
            <h1 className='md:text-3xl text-2xl font-semibold mb-5'>All Products page({data.length})</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    data.map(product => <Products key={product.name} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default AllProducts;
import React from 'react';
import Products from '../common/Products';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';
import { useState } from 'react';

const LatestProducts = () => {

    const axios = useAxios();
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/latest-products')
            .then(data => setLatestProducts(data.data))
    }, [axios])

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
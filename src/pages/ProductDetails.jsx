import React from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../context/AuthContext';
import { FaLocationDot } from 'react-icons/fa6';

const ProductDetails = () => {
    // const { id } = useParams();
    const currentProduct = useLoaderData();
    // const { allProducts } = use(AuthContext);

    // const currentProduct = allProducts.find(product => product._id == id);
    // console.log(currentProduct);

    return (
        <div className='max-w-7xl md:mx-auto mx-3 my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-5 bg-slate-800 md:p-10 p-3 rounded-xl h-full'>
                <div className='w-full h-full'>
                    <img src={currentProduct.productImage} alt={currentProduct.productName} className='rounded-xl md:w-full md:h-100 overflow-hidden' />
                </div>

                <div className='h-full flex flex-col justify-between space-y-5'>
                    <div className='space-y-5'>
                        <h1 className='text-2xl font-semibold'>{currentProduct.productName}</h1>

                        <p><span className='font-semibold'>Description: </span>{currentProduct.product_description}</p>

                        <div className='flex items-center gap-4'>
                            <div className='space-y-2'>
                                <p className='font-semibold'>Exporter: </p>
                                <p className='font-semibold'>Country Origin: </p>
                                <p className='font-semibold'>Ratings: </p>
                                <p className='font-semibold'>Price: </p>
                                <p className='font-semibold'>Available Quantity: </p>
                            </div>
                            <div className='space-y-2'>
                                <p>{currentProduct.exporter_name}</p>
                                <div className='flex items-center gap-1'>
                                    <FaLocationDot />
                                    <p>{currentProduct.originCountry}</p>
                                </div>
                                <p>{currentProduct.rating}</p>
                                <p>${currentProduct.price}</p>
                                <p>{currentProduct.availableQuantity}</p>
                            </div>
                        </div>
                    </div>
                    <button>Import Now</button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;
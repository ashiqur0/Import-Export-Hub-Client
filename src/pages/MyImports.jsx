import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyImports = () => {

    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [importedProduct, setImportedProduct] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/import/?email=${user.email}`)
            .then(data => {
                setImportedProduct(data.data);
            })
    }, [axiosSecure, user]);

    const handleRemove = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/import/${id}?email=${user.email}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bid has been deleted.",
                                icon: "success"
                            });

                            // update the state with remaining bids
                            const remainingImportedProduct = importedProduct.filter(product => product._id != id);
                            setImportedProduct(remainingImportedProduct);
                        }
                    })
            }
        });
    }

    return (
        <div className='md:max-w-7xl md:mx-auto mx-3'>
            <title>My Imports</title>
            <h1 className='text-2xl font-semibold my-5'>My Imported Product ({importedProduct.length})</h1>

            <div className=''>
                <div className='md:grid grid-cols-16 gap-5 text-xl font-semibold mt-5 hidden'>
                    <p className='w-20 h-15 col-span-2 ml-3'>Image</p>
                    <p className='col-span-2'>Name</p>
                    <p className='col-span-2 ml-8'>Price</p>
                    <p className='col-span-2'>Rating</p>
                    <p className='col-span-2'>Origin</p>
                    <div className='col-span-2'>Action</div>
                    <p className='col-span-2 text-center'>Quantity</p>
                    <div className='col-span-2 ml-13'>Details</div>
                </div>

                <div className='md:flex hidden flex-col'>
                    {
                        importedProduct.map(product => <div key={product._id} className='mb-3 grid grid-cols-16 justify-between items-center hover:border border-slate-800 p-2 rounded-xl'>
                            <img src={product.productImage} alt="" className='w-20 h-15 col-span-2 rounded-sm' />
                            <p className='col-span-2'>{product.productName}</p>
                            <p className='col-span-2 ml-8'>{product.price}</p>
                            <p className='col-span-2'>{product.rating}</p>
                            <p className='col-span-2'>{product.originCountry}</p>
                            <div onClick={() => handleRemove(product._id)} className='btn btn-outline btn-xs col-span-2 hover:bg-slate-900 w-2/3'>remove</div>
                            <p className='col-span-2 text-center'>{product.importedQuantity}</p>
                            <Link to={`/products/productsDetails/${product.productId}`} className='btn btn-outline btn-xs col-span-2 hover:bg-slate-900 w-2/3 ml-13'>see details</Link>

                        </div>)
                    }
                </div>

                <div className='md:hidden'>
                    {
                        importedProduct.map(product => <div key={product._id} className='bg-slate-800 px-4 py-5 rounded-xl mb-4'>
                            <img src={product.productImage} alt={product.productName} className='w-full rounded-xl h-50 overflow-hidden' />
                            <div className='flex items-center my-3'>
                                <div className='flex flex-col font-bold'>
                                    <p className=''>Name</p>
                                    <p className=''>Price</p>
                                    <p className=''>Rating</p>
                                    <p className=''>Origin</p>
                                    <p className=''>Quantity</p>
                                </div>
                                <div className='flex flex-col ml-2'>
                                    <p className=''>:</p>
                                    <p className=''>:</p>
                                    <p className=''>:</p>
                                    <p className=''>:</p>
                                    <p className=''>:</p>
                                </div>
                                <div className='flex flex-col ml-3'>
                                    <p className=''>{product.productName}</p>
                                    <p className=''>{product.price}</p>
                                    <p className=''>{product.rating}</p>
                                    <p className=''>{product.originCountry}</p>
                                    <p className=''>{product.importedQuantity}</p>
                                </div>                                
                            </div>

                            <div className='grid grid-cols-2 items-center gap-5'>
                                <div onClick={() => handleRemove(product._id)} className='btn btn-outline btn-xs hover:bg-slate-900 text-[1rem] font-medium py-3'>Remove</div>
                                <Link to={`/products/productsDetails/${product.productId}`} className='btn btn-outline btn-xs hover:bg-slate-900 text-[1rem] font-medium py-3'>See details</Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyImports;
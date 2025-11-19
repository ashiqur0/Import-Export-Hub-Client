import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyImports = () => {

    const axios = useAxios();
    const [importedProduct, setImportedProduct] = useState([]);

    useEffect(() => {
        axios.get('/import')
            .then(data => {
                setImportedProduct(data.data);
            })
    }, [axios]);

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

                axios.delete(`/import/${id}`)
                    .then(data => {
                        // console.log('after delete', data);
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
            <h1 className='text-2xl font-semibold my-5'>My Imported Product ({importedProduct.length})</h1>

            <div className=''>
                <div className='grid grid-cols-16 gap-5 text-xl font-semibold mt-5'>
                    <p className='w-20 h-15 col-span-2'>Image</p>
                    <p className='col-span-3'>Name</p>
                    <p className='col-span-2'>Price</p>
                    <p className='col-span-1'>Rating</p>
                    <p className='col-span-2'>Origin</p>
                    <div className='col-span-2'>Action</div>
                    <p className='col-span-2 text-center'>Quantity</p>
                    <div className='col-span-2'>Details</div>
                </div>
                {
                    importedProduct.map(product => <div key={product._id} className='mb-3 grid grid-cols-16 gap-5'>
                        <img src={product.productImage} alt="" className='w-20 h-15 col-span-2 rounded-sm' />
                        <p className='col-span-3'>{product.productName}</p>
                        <p className='col-span-2'>{product.price}</p>
                        <p className='col-span-1'>{product.rating}</p>
                        <p className='col-span-2'>{product.originCountry}</p>
                        <div onClick={() => handleRemove(product._id)} className='btn btn-outline btn-xs col-span-2'>remove</div>
                        <p className='col-span-2 text-center'>{product.importedQuantity}</p>
                        <Link to={`/products/productsDetails/${product.productId}`} className='btn btn-outline btn-xs col-span-2'>see details</Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyImports;
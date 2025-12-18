import React, { use, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useRef } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyExports = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = use(AuthContext);
    const updateExportModalRef = useRef(null);
    const [exportedProduct, setExportedProduct] = useState([]);//map hocche
    const [updateProduct, setUpdateProduct] = useState({});

    const [productName, updateProductName] = useState();
    const [productPhoto, updateProductPhoto] = useState();
    const [productPrice, updateProductPrice] = useState();
    const [productOrigin, updateProductOrigin] = useState();
    const [productRating, updateProductRating] = useState();
    const [productAvailableQuantity, updateProductAvailableQuantity] = useState();

    useEffect(() => {
        // get exported product list
        axiosSecure.get(`/products/?email=${user.email}`)
            .then(data => {
                setExportedProduct(data.data);
            })
    }, [axiosSecure, user]);

    const handleDelete = (id) => {
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

                axiosSecure.delete(`/products/${id}?email=${user.email}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });

                            // update the state with remaining products
                            const remainingProducts = exportedProduct.filter(product => product._id != id);
                            setExportedProduct(remainingProducts);
                        }
                    })
            }
        });
    }

    const handleUpdateExportModalOpen = (id) => {
        const product = exportedProduct.find(product => product._id == id);

        updateProductName(product.productName);
        updateProductPhoto(product.productImage)
        updateProductPrice(product.price)
        updateProductOrigin(product.originCountry);
        updateProductRating(product.rating);
        updateProductAvailableQuantity(product.availableQuantity)

        setUpdateProduct(product);
        updateExportModalRef.current.showModal();
    }

    const handleUpdate = (id) => {
        const exporter_email = user.email;
        const update = { productName, productPhoto, productPrice, productOrigin, productRating, productAvailableQuantity, exporter_email };

        // updating product information
        axiosSecure.put(`/products/${id}?email=${user.email}`, update)
            .then(data => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your product has been updated.",
                        icon: "success"
                    });

                    // update the state with updated product details
                    axiosSecure.get(`/products/?email=${user.email}`)
                        .then(data => {
                            setExportedProduct(data.data);
                        })
                }
            })
    }

    return (
        <div className='md:max-w-7xl md:mx-auto mx-3'>
            <title>My Exports</title>
            <h1 className='text-2xl font-semibold py-5'>My Exported Product({exportedProduct.length})</h1>

            <div className=''>
                <div className='md:grid grid-cols-16 gap-5 text-xl font-semibold mt-5 hidden'>
                    <p className='w-20 h-15 col-span-2 ml-3'>Image</p>
                    <p className='col-span-2'>Name</p>
                    <p className='col-span-2'>Price</p>
                    <p className='col-span-2'>Rating</p>
                    <p className='col-span-2'>Origin</p>
                    <div className='col-span-2'>Action</div>
                    <p className='col-span-2 text-center'>Quantity</p>
                    <div className='col-span-2 ml-13'>Details</div>
                </div>

                <div className='md:flex hidden flex-col'>
                    {
                        exportedProduct.map(product => <div key={product._id} className='mb-3 grid grid-cols-16 justify-between items-center hover:border border-slate-800 p-2 rounded-xl'>
                            <img src={product.productImage} alt={product.productName} className='w-20 h-15 col-span-2 rounded-sm' />
                            <p className='col-span-2'>{product.productName}</p>
                            <p className='col-span-2'>{product.price}</p>
                            <p className='col-span-2'>{product.rating}</p>
                            <p className='col-span-2'>{product.originCountry}</p>
                            <p onClick={() => handleDelete(product._id)} className='btn btn-outline btn-xs col-span-2 w-2/3 hover:bg-slate-900'>delete</p>
                            <p className='col-span-2 text-center'>{product.availableQuantity}</p>
                            <p onClick={() => handleUpdateExportModalOpen(product._id)} className='btn btn-outline btn-xs col-span-2 w-2/3 ml-13 hover:bg-slate-900'>update</p>
                        </div>)
                    }
                </div>

                <div className='md:hidden'>
                    {
                        exportedProduct.map(product => <div key={product._id} className='bg-slate-800 px-4 py-5 rounded-xl mb-4'>
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
                                    <p className=''>{product.availableQuantity}</p>
                                </div>                                
                            </div>

                            <div className='grid grid-cols-2 items-center gap-5 '>
                                <p onClick={() => handleDelete(product._id)} className='btn btn-outline btn-xs hover:bg-slate-900 text-[1rem] font-medium py-3'>Delete</p>
                                <p onClick={() => handleUpdateExportModalOpen(product._id)} className='btn btn-outline btn-xs hover:bg-slate-900 text-[1rem] font-medium py-3'>Update</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* modal to update exported product */}
            <dialog ref={updateExportModalRef} id="my_modal_1" className="modal">
                <div className="modal-box bg-slate-800">
                    <div className="">
                        <form method="dialog" onSubmit={() => handleUpdate(updateProduct._id)}>
                            <fieldset className='fieldset'>

                                <label htmlFor="label">Product Name</label>
                                <input
                                    type="text"
                                    className='input w-full bg-slate-800'
                                    name='product_name'
                                    value={productName}
                                    onChange={(e) => updateProductName(e.target.value)}
                                />

                                <label htmlFor="label">Product Image</label>
                                <input
                                    type="text"
                                    className='input w-full bg-slate-800'
                                    name='product_image'
                                    value={productPhoto}
                                    onChange={(e) => updateProductPhoto(e.target.value)}
                                />

                                <label htmlFor="label">Product Price</label>
                                <input
                                    type="text"
                                    className='input w-full bg-slate-800'
                                    name='product_price'
                                    value={productPrice}
                                    onChange={(e) => updateProductPrice(e.target.value)}
                                />

                                <label htmlFor="label">Origin Country</label>
                                <input
                                    type="text"
                                    className='input w-full bg-slate-800'
                                    name='origin_country'
                                    value={productOrigin}
                                    onChange={(e) => updateProductOrigin(e.target.value)}
                                />

                                <label htmlFor="label">Rating</label>
                                <input
                                    type="text"
                                    className='input w-full bg-slate-800'
                                    name='rating'
                                    value={productRating}
                                    onChange={(e) => updateProductRating(e.target.value)}
                                />

                                <label htmlFor="label">Available Quantity</label>
                                <input
                                    type="text"
                                    className='input w-full bg-slate-800 mb-7'
                                    name='available_quantity'
                                    value={productAvailableQuantity}
                                    onChange={(e) => updateProductAvailableQuantity(e.target.value)}
                                />

                                <div className='flex gap-5 items-center mt-5'>
                                    <button type='submit'
                                        className='btn'>Update</button>

                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Cancel</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default MyExports;
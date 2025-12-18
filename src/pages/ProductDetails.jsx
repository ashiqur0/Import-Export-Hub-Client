import React, { use, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../context/AuthContext';
import { FaLocationDot } from 'react-icons/fa6';
import Swal from 'sweetalert2'
import useAxiosSecure from '../hooks/useAxiosSecure';

const ProductDetails = () => {

    const product = useLoaderData();

    const { user } = use(AuthContext);
    const [quantity, setQuantity] = useState(product.availableQuantity);
    const importModalRef = useRef(null);
    const axiosSecure = useAxiosSecure();

    const handleImportModalOpen = () => {
        importModalRef.current.showModal();
    }

    const handleImport = (e) => {
        e.preventDefault();
        const importedQuantity = parseInt(e.target.quantity.value);

        const importedProduct = {
            productId: product._id,
            productImage: product.productImage,
            productName: product.productName,
            price: product.price,
            rating: product.rating,
            originCountry: product.originCountry,
            importedQuantity: importedQuantity,
            importer_email: user?.email
        }

        const availableQuantity = product.availableQuantity - importedQuantity;

        if (availableQuantity >= 0) {
            axiosSecure.post(`/import/?email=${user.email}`, importedProduct)
                .then((data) => {
                    if (data.data.insertedId) {
                        setQuantity(availableQuantity);

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Import successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

            axiosSecure.patch(`/products/${product._id}?email=${user.email}`, { availableQuantity })
                .then(data => {
                    console.log('updated product', data.data);
                })
        } else if (availableQuantity < 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Importing quantity is greater then Available Quantity",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        importModalRef.current.close();
    }

    return (
        <div className='max-w-7xl md:mx-auto mx-3 my-10'>
            <title>Products Details</title>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-start md:gap-10 gap-5 bg-slate-800 md:p-10 p-3 rounded-xl h-full'>
                <div className='w-full h-full'>
                    <img src={product.productImage} alt={product.productName} className='rounded-xl md:w-full md:h-100 overflow-hidden' />
                </div>

                <div className='h-full flex flex-col justify-between space-y-5'>
                    <div className='space-y-5'>
                        <h1 className='text-2xl font-semibold'>{product.productName}</h1>

                        <p><span className='font-semibold'>Description: </span>{product.product_description}</p>

                        <div className='flex items-center gap-4'>
                            <div className='space-y-2'>
                                <p className='font-semibold'>Exporter </p>
                                <p className='font-semibold'>Country Origin </p>
                                <p className='font-semibold'>Ratings </p>
                                <p className='font-semibold'>Price </p>
                                <p className='font-semibold'>Available Quantity </p>
                            </div>
                            <div className='space-y-2'>
                                <p>{`: `}{product.exporter_name}</p>
                                <div className='flex items-center gap-1'>
                                    {`: `}<FaLocationDot />
                                    <p>{product.originCountry}</p>
                                </div>
                                <p>{`: `}{product.rating}</p>
                                <p>{`: `}${product.price}</p>
                                <p>{`: `}{quantity}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleImportModalOpen}>Import Now</button>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn">open modal</button> */}
            <dialog ref={importModalRef} id="my_modal_1" className="modal">
                <div className="modal-box bg-slate-800">
                    <div className="">
                        <form method="dialog" onSubmit={handleImport}>
                            <fieldset className='fieldset'>
                                <label className='label'>Quantity</label>
                                <input
                                    type="text"
                                    name="quantity"
                                    className='input w-full bg-slate-800'
                                />
                                <div className='flex gap-5 items-center mt-5'>
                                    <button type='submit'
                                        className='btn'>Import</button>

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

export default ProductDetails;
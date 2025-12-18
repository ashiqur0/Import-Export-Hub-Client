import React, { use } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const AddExport = () => {

    const { user } = use(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { toggle } = useAuth();

    const handleAddExport = (e) => {
        e.preventDefault();

        const name = e.target.product_name.value;
        const image = e.target.product_image.value;
        const price = e.target.product_price.value;
        const country = e.target.origin_country.value;
        const rating = e.target.rating.value;
        const quantity = e.target.available_quantity.value;

        const newProduct = {
            productName: name,
            productImage: image,
            price: price,
            originCountry: country,
            rating: rating,
            availableQuantity: quantity,
            exporter_name: user.name,
            exporter_email: user.email
        };

        // create a new product || only logged in user can create a new product
        axiosSecure.post(`/products/?email=${user.email}`, newProduct)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product Exported Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        e.target.reset();
    }

    return (
        <div className='md:max-w-7xl md:mx-auto mx-3'>
            <title>Add Exports</title>
            <h1 className='text-2xl font-semibold my-5'>Export a product</h1>

            <div className={`md:w-2/5 mx-auto ${toggle && 'bg-slate-800'} md:p-6 p-2 rounded-xl border border-slate-400`}>
                <form onSubmit={handleAddExport}
                    className='card-body'>
                    <fieldset className='fieldset'>

                        <label htmlFor="label">Product Name</label>
                        <input
                            type="text"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='product_name'
                            placeholder= 'Product Name'
                            required
                        />

                        <label htmlFor="label">Product Image</label>
                        <input
                            type="text"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='product_image'
                            placeholder= 'Product Image'
                            required
                        />

                        <label htmlFor="label">Product Price</label>
                        <input
                            type="text"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='product_price'
                            placeholder= 'Product Price'
                            required
                        />

                        <label htmlFor="label">Origin Country</label>
                        <input
                            type="text"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='origin_country'
                            placeholder= 'Origin Country'
                            required
                        />

                        <label htmlFor="label">Rating</label>
                        <input
                            type="text"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='rating'
                            placeholder= 'Rating'
                            required
                        />

                        <label htmlFor="label">Available Quantity</label>
                        <input
                            type="text"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='available_quantity'
                            placeholder= 'Available Quantity'
                            required
                        />

                        <button type='submit'>Add Export</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddExport;
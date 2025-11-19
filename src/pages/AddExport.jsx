import React, { use } from 'react';
import useAxios from '../hooks/useAxios';
import AuthContext from '../context/AuthContext';

const AddExport = () => {

    const { user } = use(AuthContext);
    // console.log(user.email);

    const axios = useAxios();

    const handleAddExport = (e) => {
        e.preventDefault();

        const name = e.target.product_name.value;
        const image = e.target.product_image.value;
        const price = e.target.product_price.value;
        const country = e.target.origin_country.value;
        const rating = e.target.rating.value;
        const quantity = e.target.available_quantity.value;
        const exporter_name = user.name;
        const exporter_email = user.email;
        const newProduct = {
            productName: name,
            productImage: image,
            price: price,
            originCountry: country,
            rating: rating,
            availableQuantity: quantity,
            exporter_name: exporter_name,
            exporter_email: exporter_email
        };
        // console.log(newProduct);
        axios.post('/products', newProduct)
            .then(data => {
                console.log('after saving to products database', data.data);
            })
    }

    return (
        <div className='md:max-w-7xl md:mx-auto mx-3'>
            <h1 className='text-2xl font-semibold my-5'>Export a product</h1>

            <div className='md:w-2/5 mx-auto bg-slate-800 md:p-6 p-2 rounded-xl'>
                <form onSubmit={handleAddExport}
                    className='card-body'>
                    <fieldset className='fieldset'>

                        <label htmlFor="label">Product Name</label>
                        <input
                            type="text"
                            className='input w-full bg-slate-800'
                            name='product_name'
                            required
                        />

                        <label htmlFor="label">Product Image</label>
                        <input
                            type="text"
                            className='input w-full bg-slate-800'
                            name='product_image'
                            required
                        />

                        <label htmlFor="label">Product Price</label>
                        <input
                            type="text"
                            className='input w-full bg-slate-800'
                            name='product_price'
                            required
                        />

                        <label htmlFor="label">Origin Country</label>
                        <input
                            type="text"
                            className='input w-full bg-slate-800'
                            name='origin_country'
                            required
                        />

                        <label htmlFor="label">Rating</label>
                        <input
                            type="text"
                            className='input w-full bg-slate-800'
                            name='rating'
                            required
                        />

                        <label htmlFor="label">Available Quantity</label>
                        <input
                            type="text"
                            className='input w-full bg-slate-800 mb-7'
                            name='available_quantity'
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
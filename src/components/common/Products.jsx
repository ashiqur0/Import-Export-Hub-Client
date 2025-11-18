// import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Products = ({ product }) => {
    // const {user} = use(AuthContext);
    const { _id, productImage, productName, price, originCountry, rating, availableQuantity } = product;
    // console.log(product);

    return (
        <div className="card w-full shadow-md p-4 flex flex-col justify-between bg-slate-800 border border-slate-700">
            <figure className="">
                <img
                    src={productImage}
                    alt="Shoes"
                    className="rounded-xl w-full h-55 overflow-hidden" />
            </figure>

            <div className="space-y-3 mt-5">
                <h2 className="card-title">{productName}</h2>
                <p>Country origin: {originCountry}</p>
                <p>Available: {availableQuantity}</p>
                <div className='flex justify-between items-center'>
                    <p>Price: ${price}</p>
                    <div className='flex items-center gap-2 justify-center'>
                        <FaStar />
                        <p>{rating}</p>
                    </div>
                </div>
                {/* to={`${user? `/auth/productDetails/${_id}`:'/auth/login'}`} */}
                <Link to={`/products/productsDetails/${_id}`} className="card-actions ">
                    <button className='btn btn-primary w-full'>See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;
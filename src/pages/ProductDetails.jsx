import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const params = useParams();
    console.log(params);
    
    return (
        <div>
            <h1>Product details page</h1>
        </div>
    );
};

export default ProductDetails;
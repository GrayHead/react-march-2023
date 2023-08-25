import React from 'react';
import {getProductById} from "../../api/products/products.service.api";

const ProductShort = ({onChoseProduct, data: {id, title, description}}) => {


    let onAllProductDetailClick = () => {
        onChoseProduct(id);
    };
    return (
        <li>
            {id} {title}
            <br/>
            {description}

            <button onClick={onAllProductDetailClick}>all product details</button>
        </li>
    );
};

export default ProductShort;

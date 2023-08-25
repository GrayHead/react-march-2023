import React from 'react';

const ProductDetails = ({details}) => {
    let {
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images
    } = details;

    return (
        <div>
            <h2>{id} {title} {price}</h2>
            <div>{rating}*</div>
            <p>{description}</p>
            <img src={thumbnail} alt=""/>
            <br/>
            <div>
                {
                    images.map((url, index) => (
                        <>
                            <img key={index} src={url} alt=""/>
                            <br/>
                        </>
                    ))
                }

            </div>


        </div>
    );
};

export default ProductDetails;

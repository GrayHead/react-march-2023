import React, {useEffect, useState} from 'react';
import ProductShort from "../product-short/ProductShort";
import {getProductById, getProducts} from "../../api/products/products.service.api";
import ProductDetails from "../product-details/ProductDetails";

const ProductsLayout = () => {
    let title = 'Products Main Layout';
    const [products, setProducts] = useState([]);
    const [chosenProduct, setChosenProduct] = useState(null);
    const onChoseProduct = (prodId) => {
        getProductById(prodId).then(value => {
            setChosenProduct({...value});
        });


    }

    useEffect(() => {

        getProducts()
            .then(({products}) => {
                setProducts(prevState => [...products]);

            });


        return () => {
            console.log('use effect done');
        }

    }, []);


    return (
        <div>
            <h1>{title}</h1>
            {chosenProduct && <>
                <hr/>
                <div><ProductDetails details={chosenProduct}/></div>
                <hr/>
            </>

            }
            <ul>
                {

                    products.map((value) => <ProductShort key={value.id} data={value}
                                                          onChoseProduct={onChoseProduct}/>)

                }
            </ul>
        </div>
    )
        ;
};

export default ProductsLayout;

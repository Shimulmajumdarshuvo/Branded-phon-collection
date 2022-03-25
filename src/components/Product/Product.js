import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { product } = props;
    const { name, picture, price } = product;
    return (
        <div className='product'>
            <img src={picture}></img>
            <p className='product-name'> Name : {name}</p>
            <p>Price : ${price}</p>
        </div>


    );
};

export default Product;
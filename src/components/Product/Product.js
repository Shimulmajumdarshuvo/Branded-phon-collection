import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);


    const { handleClicked, product } = props;
    const { name, picture, price } = product;



    return (

        <div className='product'>
            <img src={picture}></img>
            <div className='product-info'>
                <p className='product-name'> Name : {name}</p>
                <p>Price : ${price}</p>
            </div>

            <div>
                <button onClick={() => props.handleClicked(props.product)} className='btn-cart'>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;
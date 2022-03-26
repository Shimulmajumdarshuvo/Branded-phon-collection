import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);


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
                <button onClick={() => handleClicked(product)} className='btn-cart'>
                    <p className='text-content'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;
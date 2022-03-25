import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)


    return (
        <div className='cart'>
            <h2>Selected Phon</h2>
            {
                cart.map(phon => <p>Name:{phon.name}</p>)
            }
            <button className='btn-carts'>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <button className='btn-carts'>
                <p>CHOOSE AGAIN</p>
            </button>

        </div>
    );
};

export default Cart;
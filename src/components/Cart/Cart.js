import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart, reset, chooseOne } = props;
    return (
        <div className='cart'>
            <h2>Selected Phon</h2>
            {
                cart.map(phon => <p key={phon.id}>Name:{phon.name}</p>)
            }

            <button onClick={() => chooseOne(cart)} className='btn-carts'>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <button onClick={reset} className='btn-carts'>
                <p>CHOOSE AGAIN</p>
            </button>


        </div>
    );
};

export default Cart;
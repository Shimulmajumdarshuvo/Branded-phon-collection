import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart, reset, random, chooseOne } = props;
    console.log(random);



    return (
        <div className='cart'>
            <h2>Selected Phon</h2>
            {
                cart.map(phon => <p>Name:{phon.name}</p>)
            }


            <div>
                <h2>
                    Name:{random.name}
                </h2>

            </div>



            <button onClick={chooseOne} className='btn-carts'>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <button onClick={reset} className='btn-carts'>
                <p>CHOOSE AGAIN</p>
            </button>


        </div>
    );
};

export default Cart;
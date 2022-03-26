import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [random, setRandom] = useState({});

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleClicked = (product) => {
        const newItem = [...cart, product]

        setCart(newItem);

    }
    const reset = () => {
        setCart([]);

    }

    const chooseOne = (cart) => {
        const random = Math.floor(Math.random() * cart.length)
        const randomItem = cart[random];
        setCart([randomItem]);


    }

    return (
        <div className='shop-container'>

            <div className="products-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClicked={handleClicked}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                {
                    <Cart cart={cart} reset={reset} chooseOne={chooseOne}></Cart>
                }



            </div>
        </div>
    );
};

export default Shop;
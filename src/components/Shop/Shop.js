import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];

            return product;
        })
            console.log(previousCart);
            setCart(previousCart);

    },[])

    
    const handleAddProduct = (product) =>{
        // console.log('product added', product);
        const ToBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === ToBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== ToBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd => <Product showAddToCart={true} handleAddProduct={handleAddProduct} product={pd} key={pd.key}></Product>)
                    }
            </div>

            <div className="cart-container">
                <h2>ORDER SUMMERY</h2>
                <Cart cart={cart}>
                    <Link to="/Review">
                        <button className="addCart-btn">Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
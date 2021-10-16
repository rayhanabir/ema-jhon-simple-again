import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res =>res.json())
        .then(data =>{
            setProducts(data)
            setDisplayProduct(data)
        })
    },[])

   useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart =[];
            for(const key in savedCart){
              const addedProduct = products.find(product =>product.key ===key);
               if(addedProduct){
                   const quantity = savedCart[key];
                   addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
               }
            }
            setCart(storedCart);
        }
   }, [products])


    const handleAddToCart = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
       //save cart on local storage
       addToDb(product.key)
    }

    const handleSearch = event =>{
        const searchText =(event.target.value);
        const matchedProducts = products.filter(product =>product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProduct(matchedProducts);
        console.log(matchedProducts);
    }

    return (
        <>
        <div className="search-container">
            <input type="text" 
            onChange={handleSearch}
            placeholder='search your product'/>
        </div>
        
          
            <div className="shop-container">
                <div className="product-container">
                    
                    {
                        displayProduct.map(product=> <Product product={product}
                             key={product.key}
                             handleAddToCart={handleAddToCart}>

                             </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        
        </>
    );
};

export default Shop;
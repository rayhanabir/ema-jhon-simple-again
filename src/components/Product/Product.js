import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const{img, name, price, seller, stock, star} = props.product
    return (
        <div>
           <section className='products'>
                <div className="product-img">
                        <img src={img} alt="" />
                </div>
                <div className="product-info">
                        <h3 className='pd-name'>{name}</h3>
                        <p>by:{seller}</p>
                        <h4>${price}</h4>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <Rating
                        initialRating={star}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly
                        />
                        <br />
                        <button onClick={()=>props.handleAddToCart(props.product)} className='btn-regular'>
                           {element} Add To Cart</button>
                </div>
           </section>
        </div>
    );
};

export default Product;
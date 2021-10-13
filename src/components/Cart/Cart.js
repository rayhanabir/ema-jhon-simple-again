import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
         total = total + product.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total+shipping) * 0.10;
    const grandTotal = total+ tax + shipping;
    return (
        <div>
            <div className="cart">
                <h2>Order Summary</h2>
                <p>Order Qty:{cart.length}</p>
                <p>Total :{total.toFixed(2)}</p>
                <p>Tax:{tax.toFixed()}</p> 
                <p>Shipping Cost:{shipping}</p> 
                <p>Grand Total:{grandTotal.toFixed(2)}</p>
                <button className="procced-btn">Procced To Order</button>
            </div>
        </div>
    );
};

export default Cart;
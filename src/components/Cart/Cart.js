import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const {cart}=props;
//    console.log(cart)
    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        quantity=quantity+ product.quantity;
        total=total+product.price * product.quantity;
        shipping=shipping+product.shipping;
    }

    let tax= (total* 10/100).toFixed(2);
    let taxn= parseFloat(tax);
    let grandtotal=total+shipping+taxn;

    return (
        <div className='cart'>
             <h4>Oder Summary</h4>
            <p>product-items: {quantity}</p>
             <p>Total-price:${total}</p>
             <p>Total-Shipping:${shipping}</p>
             <p>Tex:${taxn}</p>
             <h5>Grand Total:${grandtotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;
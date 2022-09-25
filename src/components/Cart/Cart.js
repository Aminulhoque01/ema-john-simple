import React from 'react';
import Product from '../Product/Product';

const Cart = ({cart}) => {
   
    return (
        <div>
             <h4>Oder Summary</h4>
            <p>product-items: {cart.length}</p>
             {/* <p>Total-price:{cart.price}</p> */}
        </div>
    );
};

export default Cart;
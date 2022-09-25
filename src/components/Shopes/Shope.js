import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';



import './Shope.css'

const Shope = () => {
    const [products, setproducts]= useState([]);

    const [cart, setcart]= useState([]);

    
    const handlerAddTOCart =(product)=>{
        console.log(product)
        const newCart= [...cart, product]
        setcart(newCart);
        
    }

    useEffect( ()=>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])

    
 
    return (
        <div className='shope-container'>
           <div className='product-container'>
            {
                products.map(product =><Product 
                    key={product.id}
                    product={product}
                    handlerAddTOCart={handlerAddTOCart}
                    ></Product>)
            }
            
           </div>
           <div className='card-container'>
                <Cart cart={cart}></Cart>
           </div>

        </div>
    );
};

export default Shope;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';



import './Shope.css'

const Shope = () => {
    const [products, setproducts]= useState([]);

    const [cart, setcart]= useState([]);

    
    const handlerAddTOCart =(product)=>{
        // console.log(product)
        const newCart= [...cart, product]
        setcart(newCart);

        addToDb(product.id)
        
    }

    useEffect( ()=>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])

    useEffect(()=>{
        const storedCart= getStoredCart();
        // console.log(storedCart);
        for(const id in storedCart){
            const addedProduct= products.find(product=>product.id===id)
            console.log(addedProduct)
        }
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
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

    
    const handlerAddTOCart =(selectedProduct)=>{
        // console.log(product)
        let newCart=[];
        const exists=cart.find(product=>product.id===selectedProduct.id)

        if(!exists){
            selectedProduct.quantity=1;
             newCart= [...cart, selectedProduct];

        }else{
            const rest=cart.filter(product=>product.id===selectedProduct.id);
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists]
        }
       setcart(newCart);

        addToDb(selectedProduct.id)
        
    }

    useEffect( ()=>{
        fetch('Products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    },[])

    useEffect(()=>{
        const storedCart= getStoredCart();
        const saveCart=[];
        // console.log(storedCart);
        for(const id in storedCart){
            const addedProduct= products.find(product=>product.id===id)
            if(addedProduct){
                const quantity= storedCart[id]
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct);
            }
        }

        setcart(saveCart);
    },[products])
 
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
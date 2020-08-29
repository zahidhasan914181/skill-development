import React from 'react';
import "./cart.css";
import Showcart from './ShowCart/Showcart';

const Cart = (props) => {
    const carts = props.cart
    let total=0 ;
    let totalPrice = carts.reduce((total,cart)=>total+cart.price,0)
    totalPrice = totalPrice.toFixed(2)
    let key = 0 ;
    
    return (
        <div className="cart">            
            <h4>Enrolling  : {carts.length}</h4> 
            <h4>Total : $ {totalPrice}</h4> 

            {
                carts.map((cart)=><Showcart cancelHandeller={props.cancelHandeller} key={key++} carts={cart}></Showcart>)
            }    
            
            <button className="btn btn-primary">Order Condirm</button>  
        </div>
    );
};

export default Cart;
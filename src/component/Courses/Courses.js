import React, { useState } from 'react';
import data from '../../Fake Data/data'
import Details from './Details/Details'
import Cart from './Cart/Cart';

const Courses = () => {
    const [cart, setCart] = useState([]);  
    const cartHandeler = (item) => {
        const newElement = [...cart, item]
        setCart(newElement)        
    }  
    const cancelHandeller = (data) =>{
        const id = data.id ;
        console.log(id);
    }
    return (
        <div className="display">
            <div className="items row">
                    <div className="col-md-9">
                    {
                        data.map((data)=><Details key={data.id} cartHandeler={cartHandeler} data={data}></Details>)
                    }
                    </div>
                    <div className="col showCart">
                <Cart cancelHandeller={cancelHandeller} cart={cart}></Cart>
            </div>
                </div>
        </div>
    );
};

export default Courses;
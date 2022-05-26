import React, { useEffect, useState } from 'react';
import Card from './Card';

const Services = () => {
    const [carts,setCart]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service',{
            method:'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setCart(data)
        })
    },[])
    return (
        <div className="service">
            <h1 className='text-center font-bold text-3xl'>Service</h1>
        <div className='grid grid-cols-3 gap-5 mx-10'>
            {
                carts.map(cart=><Card
                    key={cart._id}
                    cart={cart}
                ></Card>)
            }
           
            
        </div>
        </div>
    );
};

export default Services;
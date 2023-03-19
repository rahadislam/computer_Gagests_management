import React, { useEffect, useState } from 'react';
import Card from './Card';

const Services = () => {
    const [carts, setCart] = useState([]);
    useEffect(() => {
        fetch('https://computer-management.up.railway.app/service', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setCart(data)
            })
    }, [])
    return (
        <div className="service ">
            <h1 className='text-center text-3xl font-bold  py-5 pb-10 '><span className=' '>
                <span className=''>Our S</span>ervice
            </span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-10/12 mx-auto py-10'>
                {
                    carts.map(cart => <Card
                        key={cart._id}
                        cart={cart}
                    ></Card>)
                }


            </div>
        </div>
    );
};

export default Services;
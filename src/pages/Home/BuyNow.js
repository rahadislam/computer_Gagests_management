import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Useproduct from '../../hooks/Useproduct';

const BuyNow = () => {
    const { id } = useParams();
    const [product] = Useproduct(id);
    const [user]=useAuthState(auth);
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const [order,setOrder]=useState(0);
    const orderNum=parseInt(order);
    const productNum=parseInt(product.minquantity);
    

    
    
    const onSubmit=(data)=>{
        
        const orders={
            name:data.name,
            order:order,
            phone:data.phone

        }
        
        console.log(orders)
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            },
            body: JSON.stringify(orders)
        })
        .then(res =>res.json())
        .then(inserted =>{
            if(inserted.insertedId){
                toast(' Order successfully')
                reset();
            }
            else{
                toast.error('Failed to Orders ');
            }
        })


    }

    return (
        <div class="hero min-h-screen bg-base-200">
            
            <div class="hero-content flex-col flex-row-reverse lg:flex-row-reverse">
                
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                    <h1 className='text-xl capitalize mb-2 text-center font-bold '>please give your details information for Order </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                    
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs mt-5"
                        placeholder='Name'
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    
                    
                    <input
                        type="text"
                        placeholder='Phone'
                        className="input input-bordered w-full max-w-xs mt-5"
                        {...register("phone", {
                            required: {
                                value: true,
                            }
                        })}
                    />
                    <input
                        type="text"
                        placeholder='Your Order Quntity'
                        onChange={(event)=>setOrder(event.target.value)}
                        className="input input-bordered w-full max-w-xs mt-5"
                    />
                    
                    <span><small> {
                        productNum < orderNum ? '':`Minimum product must order at list ${product.minquantity} !`
                    }</small></span>
                    
                    <input disabled={productNum > orderNum}  className='btn btn-primary my-5 w-28  text-white' type="submit"  value="Order" />
                    
                </div>
                    </form>
                </div>
                </div>
                <div class="text-center ">
                    <img src={product.img} className='w-1/2 mx-auto' alt="" />
                    <p className='font-serif mt-3'>Name: {product.name}</p>
                    <p className='font-serif mt-3'>Minimum: {product.minquantity}</p>
                    <p className='font-serif mt-3'>Available: {product.Quantity}</p>
                    <p className='font-serif mt-3'>Price: {product.Price}$</p>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;
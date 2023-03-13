import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Useproduct from '../../hooks/Useproduct';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const BuyNow = () => {
   
    const { id } = useParams();
    const [product] = Useproduct(id);
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [order, setOrder] = useState(0);
    const orderNum = parseInt(order);
    const productNum = parseInt(product.minquantity);




    const onSubmit = (data) => {

        const orders = {
            name: data.name,
            order: order,
            phone: data.phone

        }

        fetch('https://computer-management.up.railway.app//order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast(' Order successfully')
                    reset();
                }
                else {
                    toast.error('Failed to Orders ');
                }
            })


    }

    return (
        <div class="hero min-h-screen ">

            <div class="hero-content flex-row-reverse">

                <div>
                    <h1>Product Order Information</h1>
                </div>

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

                    <div><small> {
                        productNum < orderNum ? '':`Minimum product must order at list ${product.minquantity} !`
                    }</small></div>

                    <input disabled={productNum > orderNum}  className='btn btn-primary my-5 w-28  text-white' type="submit"  value="Order" />

                </div>
                    </form>
                </div>
                </div>

            </div>
        </div>
        
    );
};

export default BuyNow;
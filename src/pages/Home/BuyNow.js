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

        fetch('http://localhost:5000/order', {
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
        // <div class="hero min-h-screen ">

        //     <div class="hero-content flex-row-reverse">

        //         <div>
        //             <h1>Product Order Information</h1>
        //         </div>

        //         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div class="card-body">
        //             <h1 className='text-xl capitalize mb-2 text-center font-bold '>please give your details information for Order </h1>
        //             <form onSubmit={handleSubmit(onSubmit)}>
        //             <div className="form-control w-full max-w-xs">

        //             <input
        //                 type="text"
        //                 className="input input-bordered w-full max-w-xs mt-5"
        //                 placeholder='Name'
        //                 {...register("name", {
        //                     required: {
        //                         value: true,
        //                         message: 'Name is required'
        //                     }
        //                 })}
        //             />


        //             <input
        //                 type="text"
        //                 placeholder='Phone'
        //                 className="input input-bordered w-full max-w-xs mt-5"
        //                 {...register("phone", {
        //                     required: {
        //                         value: true,
        //                     }
        //                 })}
        //             />
        //             <input
        //                 type="text"
        //                 placeholder='Your Order Quntity'
        //                 onChange={(event)=>setOrder(event.target.value)}
        //                 className="input input-bordered w-full max-w-xs mt-5"
        //             />

        //             <div><small> {
        //                 productNum < orderNum ? '':`Minimum product must order at list ${product.minquantity} !`
        //             }</small></div>

        //             <input disabled={productNum > orderNum}  className='btn btn-primary my-5 w-28  text-white' type="submit"  value="Order" />

        //         </div>
        //             </form>
        //         </div>
        //         </div>

        //     </div>
        // </div>
        <div className='flex'>
            <div className='w-8/12'>

                <form onSubmit={handleSubmit(onSubmit)} className="my-10">

                    <div class=" w-screen h-screen bg-white">

                        <div class="container  my-4 px-4 lg:px-16">

                            <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                                <div class="flex">
                                    <h1 class="font-bold uppercase text-4xl">provide valid information</h1>
                                </div>
                                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="First Name*" />
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Last Name*" />
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" placeholder="Email*" />
                                    <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number" placeholder="Phone*" />
                                </div>
                                <div class="my-4">
                                    <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                                </div>
                                <div class="my-2 w-1/2 lg:w-1/4">
                                    <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                                </div>
                            </div>

                            
                        </div>

                    </div>

                   
                </form>

            </div>
            <div className='my-10 ml-10 flex '>
                
                <img src={product.img} alt="" class="w-36 h-36" />

                <div className='pl-5'>
                    <h1 className='text-3xl'>{product.name}</h1>
                    <p className='text-xs py-3 '>{product.description}</p>
                    <div className="flex items-center gap-3">
                    <div className='w-1/2'>
                        <span className='flex items-center text-slate-600'><BsFillArrowUpCircleFill className='mr-2 text-red-500'></BsFillArrowUpCircleFill> min:{product.minquantity} </span>

                    </div>

                    <div>
                        <span className='flex items-center'><BsFillArrowDownCircleFill className='mr-2 text-green-500'></BsFillArrowDownCircleFill> Qty:{product.Quantity}
                        </span>
                    </div>



                </div>

                </div>

                
           
            </div>
        </div>
    );
};

export default BuyNow;
import React, { useEffect, useState } from 'react';
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
    const productNum = parseInt(product.minquantity);
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        fetch('https://restcountries.com/v3.1/all', { signal: abortController.signal })
            .then(res => res.json())
            .then(data => setCountry(data));
        return () => {
            abortController.abort();
        };
    }, [])

    const [alart,setAlart]=useState("");
    console.log(alart);



    const onSubmit = (data) => {


        const orders = {
            name: data.name,
            order: order,
            phone: data.phone,
            img: product.img,
            price: product.Price

        }

        fetch('https://computer-management.up.railway.app/order', {
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
                    setAlart("Please go to dashboard payment now")
                    
                }
                else {
                    toast.error('Failed to Orders ');
                }
            })


    }

    return (
        // <div class="hero min-h-screen ">

        //     <div class="hero-content flex-row-reverse">



        //         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div class="card-body">
        //             <h1 className='text-xl capitalize mb-2 text-center font-bold '>please give your details information for Order </h1>
        //             <form onSubmit={handleSubmit(onSubmit)}>
        //             <div className="form-control w-full flex">
        //             <div>
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
        //             </div>
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
        <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg mx-auto my-5">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Name
                    </label>
                    <input {...register("name")} class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" />

                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Phone
                    </label>
                    <input {...register("phone")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="Phone" />
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Address
                    </label>
                    <textarea {...register("address")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Type Address" />

                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">


                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        country
                    </label>
                    <div class="relative">
                        <select {...register("country")} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            {
                                country.map(c => <option>
                                    {c.name.common}
                                </option>)
                            }
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Quntity
                    </label>
                    <input onChange={(event) => setOrder(event.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="...........Pis" />
                    <small className='text-red-400 font-bold mt-3'> {
                        productNum <= order ? '' : `Minimum product order  ${product.minquantity} !`
                    }</small>
                </div>
            </div>
            <input disabled={productNum > order} className='btn btn-primary capitalize my-5 w-28  text-white' type="submit" value="Order Now" />

            <p className='text-xl text-green-500 capitalize font-bold '>{alart}</p>


        </form>

    );
};

export default BuyNow;
import React from 'react';
import { useForm } from 'react-hook-form';

const Additems = () => {

    
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        // const service={
        //     name:data.name,
        //     price:data.Price
        // }
        // console.log(service);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
        reset();
    }
    return (
        <div className='w-96 mx-auto'>
            <h1 className='text-center font-bold text-2xl'>Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Products Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is required'
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("Quantity", {
                            required: {
                                value: true,
                                message: 'Quantity is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.Quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Quantity.message}</span>}
                        {errors.Quantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Quantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder=" Minimum Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minquantity", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}
                        {errors.minquantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("Price", {
                            required: {
                                value: true,
                                message: 'Price is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.Price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Price.message}</span>}
                        {errors.Price?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.Price.message}</span>}
                    </label>
                </div>

                <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="ADD NOW" />
            </form>

        </div>
    );
};

export default Additems;
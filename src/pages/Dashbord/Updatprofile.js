import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Updatprofile = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const imgkey='dee40fb0dbdc793e083e03a4e2908ed3';
    const onSubmit = data => {
        console.log(data.img[0]);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgkey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const addservice = {
                    name: data.name,
                    email:data.email,
                    linked:data.linked,
                    project:data.project,
                    img: img
                }
                // send to your database 
                fetch('https://computer-management.up.railway.app/userUpdate', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(addservice)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success(' Update successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to Update ');
                    }
                })

            }
            
        })
    }
    return (
        <div className='w-96 mx-auto'>
            <h1 className='text-center font-bold text-2xl'>Update Your Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" Name"
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
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'email is required'
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Linkedin Profile link</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Linkedin"
                        className="input input-bordered w-full max-w-xs"
                        {...register("linked", {
                            required: {
                                value: true,
                                message: 'Linkid is required'
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
                        <span className="label-text">Project link</span>
                    </label>
                    <input
                        type="text"
                        placeholder=" Project Link"
                        className="input input-bordered w-full max-w-xs"
                        {...register("project", {
                            required: {
                                value: true,
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minquantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}
                        {errors.minquantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.minquantity.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label" htmlFor='image'>
                        <span className="btn btn-outline btn-info capitalize" >Images Upload</span>
                    </label>
                    <input 
                    
                        id='image'                                 
                        type="file"
                        placeholder="Price"
                        className="input hidden input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Images is required'
                            }
                        })}
                    />
                    
                </div>

                <input className='btn btn-primary w-full max-w-xs text-white capitalize' type="submit" value="Update Profile" />
            </form>

        </div>
    );
};

export default Updatprofile;
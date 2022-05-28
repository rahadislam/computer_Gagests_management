import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import profile from '../../images/profile.png'

const Review = () => {
    const [user] = useAuthState(auth);
    
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const [rating,setRating]=useState(0);
    // const rating=15;
    // const stars = Array(rating).fill(0)


    const onSubmit=data=>{
        const reviews={
            name:user.displayName,
            img:user.photoURL,
            rating:rating,
            description:data.description
        }
        fetch('https://boiling-ravine-29801.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            },
            body: JSON.stringify(reviews)
        })
        .then(res =>res.json())
        .then(inserted =>{
            if(inserted.insertedId){
                toast(' added successfully')
                reset();
            }
            else{
                toast.error('Failed to add ');
            }
        })

    

    }
    return (
        <div>
            {/* {
                stars.map((_,index)=><p>hello</p>)
            } */}
            <div class="card w-96 bg-base-100 shadow-xl mx-auto my-10">
                <div class="card-body">
                    <div class={`avatar ${!user ? "offline" : "online"} mx-3`} >
                        <div class="w-12 rounded-full">

                            <img src={!user.photoURL ? profile : user.photoURL} alt='' />
                        </div>
                    </div>
                    <h2 class="card-title">{user?.displayName}</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                    
                    <textarea
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
                    <div className='flex mt-5'>
                    <label className="label">
                        <span className="label-text">Rating:</span>
                    </label>
                    <select className='w-10 bg-slate-100' onChange={e=>setRating(e.target.value)}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </div>
                    <input className='btn btn-primary my-5 w-28  text-white' type="submit" value="Send" />
                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Review;
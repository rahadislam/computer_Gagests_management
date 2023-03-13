import React, { useEffect, useState } from 'react';
import profile from '../../images/profile.png';
import { AiOutlineStar } from 'react-icons/ai';

const ReviewDetails = () => {
    const [reviews,setReview]=useState([]);
    // const count=reviews.map(r=>Array(r.rating).fill(0))
    // console.log(count);
    

    // const stars = Array(count).fill(0);

    
    
    useEffect(()=>{
        fetch('https://computer-management.up.railway.app//review',{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setReview(data);
        })
    },[])

    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl py-5 pb-10 '><span className='border-green-500 rounded border-b-4 '>
            <span className='text-4xl text-green-500 font-medium '>Our C</span>astomer Reviwes
                </span></h1>
           
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-10/12 mx-auto  pt-10'>
                {
                    reviews.map(review=>
                    <div class="card w-11/12 bg-base-100 shadow-2xl mb-10">
                    <div class="card-body">
                    { <div class='avatar mx-3 ' >
                        <div class="w-12 rounded-full mx-auto border-2 border-green-400 drop-shadow-xl">

                            <img src={!review.img ? profile : review.img} alt='' />
                        </div>
                    </div>
                    }



                        <h2 class="text-center text-xl font-medium">{review.name}</h2>
                        <p className='text-center text-slate-400'>{review.description}</p>
                        {/* <p className='font-bold'>Rating:{review.rating}</p> */}
                        <div className='flex justify-center'>
                            <span><AiOutlineStar className='text-yellow-500'></AiOutlineStar></span>
                            <span><AiOutlineStar className='text-yellow-500'></AiOutlineStar></span>
                            <span><AiOutlineStar className='text-yellow-500'></AiOutlineStar></span>
                            <span><AiOutlineStar className='text-yellow-500'></AiOutlineStar></span>
                            <span><AiOutlineStar className='text-yellow-500'></AiOutlineStar></span>
                        </div>
                        
                       {/* {
                            stars.map((_,index)=><p>hello</p>)
                        } */}
                        
                    </div>
                </div>)
                }
                
            </div>
        </div>
    );
};

export default ReviewDetails;
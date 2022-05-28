import React, { useEffect, useState } from 'react';
import profile from '../../images/profile.png'

const ReviewDetails = () => {
    const [reviews,setReview]=useState([]);
    // const count=reviews.map(r=>Array(r.rating).fill(0))
    // console.log(count);
    

    // const stars = Array(count).fill(0);

    
    
    useEffect(()=>{
        fetch('https://boiling-ravine-29801.herokuapp.com/review',{
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
            <h1 className='text-center font-bold text-3xl my-5'>Our Castomer Reviwes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10'>
                {
                    reviews.map(review=>
                    <div class="card w-80 bg-base-100 shadow-xl">
                    <div class="card-body">
                    { <div class={`avatar ${!review.img ? "offline" : "online"} mx-3`} >
                        <div class="w-12 rounded-full">

                            <img src={!review.img ? profile : review.img} alt='' />
                        </div>
                    </div>
                    }



                        <h2 class="card-title">{review.name}</h2>
                        <p>{review.description}</p>
                        <p className='font-bold'>Rating:{review.rating}</p>
                        
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
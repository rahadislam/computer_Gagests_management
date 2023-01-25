import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Card = ({cart}) => {

    return (
            <div class="card w-11/12 bg-base-100 shadow-2xl mb-5">
              
                <figure class="">
                    <img src={cart.img} alt="Shoes" class="h-60" />
                </figure>
                <div className='p-5'>
                    <span className='font-medium text-slate-400'>${cart.Price} USD</span>
                    <h1 className='font-medium text-xl'>{cart.name}</h1>
                    <div className="flex items-center gap-3">
                        <div className='w-1/2'>
                        <span className='flex items-center text-slate-600'><BsFillArrowUpCircleFill className='mr-2 text-red-500'></BsFillArrowUpCircleFill> Minimum : {cart.minquantity} Pis</span>
                        
                        </div>

                        <div>
                        <span className='flex items-center'><BsFillArrowDownCircleFill className='mr-2 text-green-500'></BsFillArrowDownCircleFill> Available :{cart.Quantity}</span>
                        </div>
                        
                        
                       
                    </div>
                    <div className='flex flex-row-reverse'>
                    <Link class="mt-3 btn btn-sm text-white bg-green-500 border-none hover:bg-green-600 text-right" to={`/buynow/${cart._id}`}>Buy Now</Link>
                    </div>
                    
                </div>
               
            </div>
    );
};

export default Card;
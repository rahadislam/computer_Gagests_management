import React from 'react';
import sub from '../../images/subscription-removebg-preview.png';
import { TbBellRinging } from 'react-icons/tb';

const Subscrib = () => {
  return (
    <div className='bg-slate-50 py-10'>
      <div className='w-4/12 mx-auto '>
        <h1 className='text-center text-3xl font-bold tracking-[.30em]'>Subscription</h1>
        <img src={sub} className='w-2/4 mx-auto' alt="" />

        <div class="form-control w-8/12 mx-auto">
          <h2 className='py-3 font-bold text-center'>Subscrib to get the latest <span className='text-red-600'>news & updates</span></h2>
          <div class="input-group">
            <input type="text" placeholder="example@gmail.com" class="input input-bordered" />
            <button class="btn bg-primary text-white border-none  shadow-2xl hover:bg-secondary">
              <TbBellRinging className='mr-2 text-xl'></TbBellRinging>
              Subscrib
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscrib;
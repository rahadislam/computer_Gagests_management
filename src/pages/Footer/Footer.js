import React from 'react';
import { Link } from 'react-router-dom';
import brandlogo from '../../images/RAHAD LLC (1).png';
import { BsFacebook,BsLinkedin,BsTwitter,BsYoutube } from 'react-icons/bs';
import { AiFillYoutube,AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer class=" bg-[#000000e9]">
            
            
           <div className='w-3/12 mx-auto py-5'>
            <img src={brandlogo} className='w-40 mx-auto rounded-full' alt="" />
            <p className='text-center font-bold text-slate-300'>Our experienced team of warehouse professionals is dedicated to providing customized solutions that are tailored to meet the unique requirements of your business</p>
            <div className="flex justify-center items-center mt-4">
                <Link className='mr-2 text-3xl text-[#134269] bg-white rounded-full' to='www.facebook.com/rahadislam'><BsFacebook></BsFacebook></Link>

                <Link className='mr-2 text-3xl text-[#3335a3] bg-white rounded-full' to='www.linkedin.com/rahadislam'><BsLinkedin></BsLinkedin></Link>

                <Link className='mr-2 text-3xl text-red-600 bg-white ' to='www.youtube.com'><AiFillYoutube></AiFillYoutube></Link>

                <Link className='mr-2 text-3xl text-[#3335a3] bg-white rounded-full' to='www.twitter.com'><AiFillTwitterCircle></AiFillTwitterCircle></Link>
            </div>
           </div>
           <div>
            <h2 className='bg-black py-5 text-center text-white'>Copyright by <span className='text-red-600'>©RahadIslam </span> | Rahad LLC</h2>
           </div>
            
        </footer>
    );
};

export default Footer;
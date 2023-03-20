import React from 'react';
import bannar from '../../images/hero-img.png';
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <div className="hero min-h-screen lg:px-16" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannar} className="w-2/4" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Elegant and creative solutions</h1>
                    <p className="py-6 text-justify lg:pr-16 font-medium text-slate-600">Our experienced team of warehouse professionals is dedicated to providing customized solutions that are tailored to meet the unique requirements of your business. Whether you need short-term or long-term storage, cross-docking services, or complete supply chain management, we have the expertise and resources to get the job done right.</p>
                    <Link to='/services' class="btn bg-primary text-white border-none  shadow-2xl hover:bg-secondary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
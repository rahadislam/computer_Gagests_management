import React from 'react';
import bannar from '../../images/hero-img.png';

const Bannar = () => {
    return (
        <div className="hero min-h-screen px-16">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannar} className="w-2/4" alt=''/>
        <div>
            <h1 className="text-5xl font-bold">Elegant and creative solutions</h1>
            <p className="py-6">We are team Elegant and creative solutions </p>
            <button class="btn bg-primary text-white border-none  shadow-2xl hover:bg-secondary">Get Started</button>
        </div>
    </div>
</div>
    );
};

export default Bannar;
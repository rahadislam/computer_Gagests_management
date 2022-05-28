import React from 'react';
import it1 from '../../images/it1.jpg';
import it2 from '../../images/it2.webp';
import it3 from '../../images/it3.png';
import it4 from '../../images/it4.png';

const IntoArea = () => {
    return (
        <div className='py-10'>
        <h1 className='text-3xl text-center font-bold'>Our Company Provider</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 py-10'>
            <div className='h-30 w-30 mx-auto'>
                <img className='h-24 w-24' src={it1} alt="" />
                
                <p className='text-center font-bold'>IBOS IT</p>
            </div>
            <div className='h-30 w-30 mx-auto'>
                <img className='h-24 w-24 mx-auto' src={it2} alt="" />
                
                <p className='text-center font-bold'>CVMI Ltd</p>
            </div>
            <div className='h-30 w-30 mx-auto'>
                <img className='h-24 w-24' src={it3} alt="" />
                
                <p className='text-center font-bold'>AWS Company</p>
            </div>
            <div className='h-30 w-30 mx-auto'>
                <img className='h-24 w-24' src={it4} alt="" />
                
                <p className='text-center font-bold'>DDC </p>
            </div>

        </div>
    </div>
    );
};

export default IntoArea;
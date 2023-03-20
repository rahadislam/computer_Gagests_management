import React from 'react';
import country from '../../images/country.png'
import project from '../../images/project.png'
import cleants from '../../images/cleants.png'
import feedback from '../../images/feedback.png'

const Business = () => {
    return (
        <div className='py-10'>
            <h1 className='text-3xl font-bold  text-center pb-10'><span className=''><span className=''>Our B</span>usiness </span></h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
                <div className='h-30 w-30 mx-auto'>
                    <img className='h-16 w-16' src={country} alt="" />
                    <h1 className='text-2xl text-center font-bold'>72+</h1>
                    <p className='text-center font-bold'>Countrys</p>
                </div>
                <div className='h-30 w-30 mx-auto'>
                    <img className='h-16 w-16 mx-auto' src={project} alt="" />
                    <h1 className='text-2xl text-center font-bold'>1000+</h1>
                    <p className='text-center font-bold'>Project Complete</p>
                </div>
                <div className='h-30 w-30 mx-auto'>
                    <img className='h-16 w-16' src={cleants} alt="" />
                    <h1 className='text-2xl text-center font-bold'>450+</h1>
                    <p className='text-center font-bold'>Clients</p>
                </div>
                <div className='h-30 w-30 mx-auto'>
                    <img className='h-16 w-16' src={feedback} alt="" />
                    <h1 className='text-2xl text-center font-bold'>1M +</h1>
                    <p className='text-center font-bold'>Feedback</p>
                </div>

            </div>
        </div>
    );
};

export default Business;
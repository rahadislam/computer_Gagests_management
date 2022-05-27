import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10 w-3/4 mx-auto'>
            <h1 className='text-center text-3xl font-bold my-5'>Our Blogs</h1>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div class="collapse-content">
                    <p>tabindex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
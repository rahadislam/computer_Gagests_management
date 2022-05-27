import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10 w-3/4 mx-auto'>
            <h1 className='text-center text-3xl font-bold my-5'>Our Blogs</h1>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p>Code-splitting is another important optimization technique for a React application.Both react-window and react-virtualized are two popular windowing libraries that can implement this concept. </p>
                </div>
            </div>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <p>someway to react state manage 
                        1.local state
                        2.global state 
                        3.server this.state.
                        4.url state
                    </p>
                </div>
            </div>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>Prototype-based programming is a style of object-oriented programming in which behaviour reuse known as inheritance is performed via a process of reusing existing objects that serve as prototypes.</p>
                </div>
            </div>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                Why you do not set the state directly in React?
                </div>
                <div class="collapse-content">
                    <p>While a React component can have initial state, the real power is in updating its state — after all, if we didn't need to update the state, the component shouldn't have any state. State is only reserved for data that changes in our component and is visible in the UI. Instead of directly modifying the state using this.</p>
                </div>
            </div>
            <div tabindex="0" class="mb-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
                    One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
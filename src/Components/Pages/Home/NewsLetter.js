import React from 'react';

const NewsLetter = () => {
    return (
        <div id='newsletter' className='grid sm:grid-cols-1 lg:grid-cols-2 bg-emerald-300 mt-12 p-16 '>
            <div className='text-left text-white'>
                <h1 className=' text-3xl'>JOIN OUR NEWSLETTER</h1>
                <p>Stay connected to TOOLS HOUSE with important information and promotions.</p>
            </div>
            <div className='lg:text-right' >
                <input type="text" placeholder="Type here" class="mr-3 input input-bordered w-full max-w-xs" />
                <button className='btn btn-primary'>SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default NewsLetter;
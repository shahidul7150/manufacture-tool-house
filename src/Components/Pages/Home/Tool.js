import React from 'react';

const Tool = ({ tool }) => {
    const{name,img,price,description,minimum,quantity}=tool
    return (
        <div className='shadow-lg py-5 '>
            <img src={img} alt="" />
            <div className='px-4'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <p>{description}</p>
            <h3 className=' font-bold text-primary'>Price Unit: {price}</h3>
            <p><small>Minimum Order: {minimum}</small></p>
            <p className='text-secondary'><small>Available Unites:{quantity}</small></p>
            <button className='btn btn-primary outline-none border-0 mt-2'>book now</button>
            </div>
        </div>
    );
};

export default Tool;
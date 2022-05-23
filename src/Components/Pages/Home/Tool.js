import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const{_id,name,img,price,description,minimum,quantity}=tool;
    const navigate = useNavigate();
    const navigateToPurchaseDetail = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className='shadow-lg py-5 '>
            <img src={img} alt="" />
            <div className='px-4'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <p>{description}</p>
            <h3 className=' font-bold text-primary'>Price Unit: {price}</h3>
            <p><small>Minimum Order: {minimum}</small></p>
            <p className='text-secondary'><small>Available Unites:{quantity}</small></p>
            <button onClick={()=>navigateToPurchaseDetail(_id)} className='btn btn-primary outline-none border-0 mt-2'>book now</button>
            </div>
        </div>
    );
};

export default Tool;
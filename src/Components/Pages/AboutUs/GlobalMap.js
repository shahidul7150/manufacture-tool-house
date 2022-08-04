import React from 'react';
import image from "../../../assets/world-map.jpg";
const GlobalMap = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-2xl text-center font-bold py-3'>Our Global Customer Base</h1>
<hr className='py-3'/>
            <img src={image} alt="" />
        </div>
    );
};

export default GlobalMap;
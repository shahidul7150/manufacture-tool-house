import React, { useState } from 'react';
import './Announce.css';
const Announce = () => {
    const [announceStyle, setAnnounceStyle] = useState('background1 text-white flex items-center justify-between px-5 py-5 ')
    
    const handleClose = () => {
        setAnnounceStyle(announceStyle + " hidden ")
    }
    return (
        <div className={announceStyle} >
            <h1 className='text-2xl text-white'>Hurry up it's 40% off now </h1>
            <h2 className='cursor-pointer text-2xl text-white font-semibold ' onClick={handleClose}>x</h2>

           
        </div>
    );
};

export default Announce;
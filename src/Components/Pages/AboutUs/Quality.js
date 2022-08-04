import React from 'react';
import image from '../../../assets/tools-quality-1.png';
const Quality = () => {
    return (
        <div className='lg:flex flex-row-reverse mx-12 my-12 items-center bg-[#6EE7B7] p-12 rounded-2xl'>
            <div className='bg-[#0DB0D8] p-8 rounded-lg'>
                <img  src={image} alt="" />
            </div>
            <div className='mr-10  '>
                <h1 className='text-2xl font-bold text-white'>Quality Policy</h1>
                <p className='text-white'>We have in house production facility and maintain stringent International Standards for Quality, Safety and Accuracy.. All products are evaluated and tested under extreme engineering conditions to meet customer requirements.

As a world-class Tool Manufacturing Company, it has been an esteemed participant at all leading fairs and Tools Industry meets of the world. Close contacts with customers and personal visits by experts add more to the customer experience. Exclusive global presence and international exposure make Ozar the true frontruner in adopting the latest technology trends being evolved worldwide. We have our eyes set on being recognized as the Innovator and thought leader of Tools related products and technologies in domestic and global markets.</p>
            </div>
        </div>
    );
};

export default Quality;
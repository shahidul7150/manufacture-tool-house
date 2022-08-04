import React from 'react';
import image from '../../../assets/mission.png';
const OurMission = () => {
    return (
        <div className='lg:flex mx-12 my-12 items-center bg-[#6EE7B7] p-12 rounded-2xl'>
            <div className='bg-[#0DB0D8] p-5 mr-10 rounded-lg'>
                <img  src={image} alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold text-white'>Our Mission</h1>
                <p className='text-white'>Our mission is to be the leading manufacturer of tools across a broad spectrum of market sectors, growing our business by offering industry leading quality, design innovation and value for money with unprecedented customer service. The Packaging of each category is unique; the attractive multi-colour designs conform to international standards – including bar-coding for customer convenience. Ozar is available at various leading Industrial Tool Distributors, located in all continents. We are increasing our footprints in domestic India market at a war footing pace. We stock the tools inventory for fast and timely delivery.</p>
            </div>
        </div>
    );
};

export default OurMission;
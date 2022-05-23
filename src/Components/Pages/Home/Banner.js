import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate=useNavigate()
    return (
        <div id='banner' class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/R0tkMQT/tools.jpg" class="max-w-sm " alt=''/>
          <div>
            <h1 class="text-5xl font-bold">Make Your Work Accurately Like <br />as a  Professional!</h1>
            <p class="py-6">Tools make your working experience is more than effective when you use manual technology.So do not miss this chance make your working skill for your portfolio. </p>
            <button onClick={()=>navigate('/dashboard')} class="btn btn-primary">store here</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
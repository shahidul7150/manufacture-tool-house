import React from 'react';
import { useNavigate } from 'react-router-dom';

const NowAvailable = () => {

    const navigate=useNavigate()
    return (
        <div class="card card-side bg-base-200 rounded-none mx-12 my-20 items-center">
        <img width="50%" src="https://i.ibb.co/G3Nn976/COMBO.jpg" alt="Movie"/>
        <div class="card-body ">
          <h2 class=" text-center text-4xl font-bold">Combo Pack available now</h2>
          <p className='text-center text-xl text-gray-400'>Combo pack make your work more responsive</p>
          <div class="card-actions justify-center ">
            <button onClick={()=>navigate('/service')} class="btn btn-primary ">Check Now</button>
          </div>
        </div>
      </div>
    );
};

export default NowAvailable;
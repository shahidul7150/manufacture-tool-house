import React from 'react';
import { useNavigate } from 'react-router-dom';

const NowAvailable = () => {

    const navigate=useNavigate()
    return (
        <div className='grid sm:grid-cols-1  lg:grid-cols-2 mx-12 bg-teal-100 shadow-md my-20 items-center'>

            {/* <div className="  bg-base-200 rounded-none mx-12 my-20 items-center">
            <img width="50%" src="https://i.ibb.co/G3Nn976/COMBO.jpg" alt="Movie"/>
            <div className="card-body ">
              <h2 className=" text-center text-4xl font-bold">Combo Pack available now</h2>
              <p className='text-center text-xl text-gray-400'>Combo pack make your work more responsive</p>
              <div className="card-actions justify-center ">
                <button onClick={()=>navigate('/service')} className="btn btn-primary ">Check Now</button>
              </div>
            </div>
            </div> */}
            

            <div>
            <img height="100%" src="https://i.ibb.co/G3Nn976/COMBO.jpg" alt="Movie"/>
            </div>
            <div>
                <div>
                <h2 className=" text-center lg:text-4xl font-bold">Combo Pack available now</h2>
              <p className='text-center lg:text-xl text-gray-500'>Combo pack make your work more responsive</p>
                </div>
                <div className="card-actions justify-center mt-2 pb-5 ">
                <button onClick={()=>navigate('/service')} className="sm:btn btn-md btn-primary rounded-md  lg:btn lg:btn-primary ">Check Now</button>
              </div>
            </div>
        </div>
        );
};

export default NowAvailable;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user ] = useAuthState(auth);
    console.log(user);
    console.log(user?.metadata.creationTime);
    return (
        <div className='text-center items-center bg-slate-200 lg:w-4/6 mx-auto p-14 mt-10 rounded-xl'>
          <div className='lg:flex items-center justify-center  mb-5 bg-slate-50 p-5  rounded-xl shadow-lg'>
          <img className='rounded-full mr-4' src={user?.photoURL} alt="User Img" />
            <div className='text-left'>
            <h2 className='text-sm lg:text-xl font-black'>Name: {user?.displayName}</h2>
            <p><small>Member Since : {user?.metadata?.creationTime}</small></p>
            </div>

          </div>
            <h2 className='text-lg font-bold'>Email: {user?.email}</h2>
            <p><small>User Id: {user?.uid} </small></p>
            <p><small></small></p>
            <p> <small>User Last SignIn : {user?.metadata.lastSignInTime}</small></p>

        </div>
    );
};

export default MyProfile;
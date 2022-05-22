import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Social = () => {
   
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user);
    }

  return (
 
      <button onClick={()=>signInWithGoogle()} class="btn btn-primary">
        <img
          width="24px"
          className="mx-3"
          src="https://logodix.com/logo/422807.png"
          alt=""
        />
        Login with Google
      </button>
 
  );
};

export default Social;

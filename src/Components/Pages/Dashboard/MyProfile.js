import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user.photoURL);
    return (
        <div>
            <img src={user?.photoURL} alt="" />
            <h2>Name: {user?.displayName}</h2>
            <h2>Name: {user?.email}</h2>
            <p><small>{user?.metadata.lastSignInTime}</small></p>

        </div>
    );
};

export default MyProfile;
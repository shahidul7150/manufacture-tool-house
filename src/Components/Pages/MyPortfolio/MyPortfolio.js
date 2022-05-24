import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
const MyPortfolio = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <h2>{user?.displayName}</h2>
        </div>
    );
};

export default MyPortfolio;
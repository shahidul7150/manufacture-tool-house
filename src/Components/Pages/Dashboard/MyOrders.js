import React ,{useState,useEffect}from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const MyOrders = () => {

    const [booking,setBooking]=useState([])
    const [user] = useAuthState(auth);


    useEffect(()=>{
    const url=`http://localhost:5000/booking?result=${user.email}`
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>setBooking(data))

    },[user])
    return (
        <div>
            <h1>Order
                {booking.length}
                {booking.name}   
            </h1>
        </div>
    );
};

export default MyOrders;
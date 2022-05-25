import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrders = () => {
  const [booking, setBooking] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `http://localhost:5000/myBooking?email=${user.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooking(data);
      });
  }, [user]);
  console.log(booking);
  return (
    <div>
      <h1>
        Order
        {booking.length}
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product name</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book) => (
                <tr>
                  <th>1</th>
                  <td>{book.purchase}</td>
                  <td>{book.Amount}</td>
                  <td >
                      <button class=" mr-2 btn btn-xs btn-primary">pay</button >
                      <button class="mr-2 btn btn-xs btn-error text-white">order cancel</button>
                  </td>
                </tr>
              ))}

              
            </tbody>
          </table>
        </div>
      </h1>
    </div>
  );
};

export default MyOrders;

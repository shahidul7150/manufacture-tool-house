import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrders = () => {
  const [booking, setBooking] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `https://obscure-harbor-94819.herokuapp.com/myBooking?email=${user.email}`;
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
        {booking.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Product name</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((book, index) => (
                  <tr key={index}>
                    <th>1</th>
                    <td>{book.purchase}</td>
                    <td>{book.Amount}</td>
                    <td>
                      {book.price && !book.paid && (
                        <Link to={`/dashboard/payment/${book._id}`}>
                          <button className=" mr-2 btn btn-xs btn-primary">
                            pay
                          </button>
                        </Link>
                      )}
                      {book.price && book.paid && (
                        <span className=" mr-2 text-success font-bold">
                          Paid
                        </span>
                      )}
                      { (book.price && book.paid)&&
                        <button disabled className="mr-2 btn btn-xs btn-error text-white">
                          order cancel
                        </button>
                      }
                      {(book.price && !book.paid)&& <button className="mr-2 btn btn-xs btn-error text-white">
                        order cancel
                      </button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-36 ">
            <p className=" text-4xl ">Your Store is Empty</p>
            <p>Please add a product</p>
          </div>
        )}
      </h1>
    </div>
  );
};

export default MyOrders;

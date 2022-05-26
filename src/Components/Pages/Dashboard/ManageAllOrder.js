import React, { useEffect, useState } from 'react';
const ManageAllOrder = () => {
  const [allOrder, setAllOrder] = useState([]);
  useEffect(() => {
    fetch('https://obscure-harbor-94819.herokuapp.com/booking')
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);


  
  const handleDelete = (id) => {

    const url = `https://obscure-harbor-94819.herokuapp.com/product/${id}`;

    fetch(url, {
      method:"DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = allOrder.filter((order) => order._id !== id);
        setAllOrder(remaining);
      });
    console.log('Hello');
  };
  return (
    <div>
      <p>Manage all order :{allOrder.length}</p>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.L</th>
              <th>Image</th>
              <th>Product</th>
              <th>Avatar name</th>
              <th>Paid Status</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {allOrder.map((order,index) => (
              <tr key={index}>
                <th>{index+1}</th>
                <td><img width="36px" src={order.img} alt="" /></td>
                <td>{order.purchase}</td>
                <td>{order.avatarName}</td>
                <td>pay</td>
                <td> <button onClick={() => handleDelete(order._id)} className="btn btn-xs btn-error">Remove</button></td>

               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;

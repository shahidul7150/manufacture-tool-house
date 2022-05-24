import React, { useEffect, useState } from 'react';
const ManageAllOrder = () => {
  const [allOrder, setAllOrder] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/booking')
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);
  return (
    <div>
      <p>Manage all order :{allOrder.length}</p>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>S.L</th>
              <th>Image</th>
              <th>Product</th>
              <th>Avatar name</th>
              
            </tr>
          </thead>
          <tbody>
            {allOrder.map((order,index) => (
              <tr>
                <th>{index+1}</th>
                <td><img width="36px" src={order.img} alt="" /></td>
                <td>{order.purchase}</td>
                <td>{order.avatarName}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;

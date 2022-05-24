import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {

    const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
    return (
        <div>
      <p> {tools.length} Items Product available Now</p>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>S.L</th>
              <th>Image</th>
              <th>Name</th>
              <th>Minimum</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool,index) => (
              <tr>
                <th>{index+1}</th>
                <td><img width="36px" src={tool.img} alt="" /></td>
                <td>{tool.name}</td>
                <td>{tool.minimum}</td>
                <td>{tool.quantity}</td>
                <td>{tool.price}</td>
                <td><button className="btn btn-success">Update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageAllProducts;
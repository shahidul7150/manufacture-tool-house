import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch('https://obscure-harbor-94819.herokuapp.com/product')
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handleDelete = (id) => {

    const url = `https://obscure-harbor-94819.herokuapp.com/product/${id}`;

    fetch(url, {
      method:"DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = tools.filter((tool) => tool._id !== id);
        setTools(remaining);
      });
    console.log('Hello');
  };
  return (
    <div>
      <p> {tools.length} Items Product available Now</p>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.L</th>
              <th>Image</th>
              <th>Name</th>
              <th>Minimum</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <img width="36px" src={tool.img} alt="" />
                </td>
                <td>{tool.name}</td>
                <td>{tool.minimum}</td>
                <td>{tool.quantity}</td>
                <td>{tool.price}</td>
                <td>
                  <button className="btn btn-xs btn-success">Update</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(tool._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllProducts;

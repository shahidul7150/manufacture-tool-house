import React, { useEffect, useState } from 'react';

const AllUser = () => {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    fetch('https://obscure-harbor-94819.herokuapp.com/user')
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);
  return (
    <div>
      {allUser.length}

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>All User </th>
             
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                    <td>
                        <button className='btn btn-success text-white'>Make Admin</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;

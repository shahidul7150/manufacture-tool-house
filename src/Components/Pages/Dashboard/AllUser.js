import React, { useEffect, useState } from 'react';

const AllUser = () => {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);
  return (
    <div>
      {allUser.length}

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>All User </th>
             
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((user, index) => (
              <tr>
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

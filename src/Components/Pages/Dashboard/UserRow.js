import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user,refetch }) => {
    const { email,role } = user;
    const makeAdmin = () => {
        fetch(`https://obscure-harbor-94819.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                res.json()
            })
            .then(data => {
                if (data?.modifiedCount > 0) {
                    
                    refetch()
                    toast.success(`Successfully made an admin`)
                }

        })
    }
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
              {role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs ">Make Admin</button>
                  :<button disabled className="btn btn-xs"> Admin</button>
        }
      </td>
    </tr>
  );
};

export default UserRow;

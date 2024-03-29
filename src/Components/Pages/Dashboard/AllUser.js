import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';


const AllUser = () => {


  const { data: users, isLoading, refetch } = useQuery('users', () =>
    fetch('https://obscure-harbor-94819.herokuapp.com/user', {
    method: 'GET',
    headers: {
      authorization:`Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <Loading/>
  }
  return (
    <div>
     {users?.length}
      
     <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>User Email</th>
        <th>Action to Admin</th>
        
      </tr>
    </thead>
    <tbody>
     
            {
              users?.map((user,index) => <UserRow
                key={user?._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>)
      }

     
    </tbody>
  </table>
</div>



    </div>
  );
};

export default AllUser;

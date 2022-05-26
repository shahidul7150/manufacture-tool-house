import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';


const AllUser = () => {


  const { data: users, isLoading, refetch } = useQuery('users', () =>
    fetch('http://localhost:5000/user', {
    method: 'GET',
    headers: {
      authorization:`Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <h2>Loading...........</h2>
  }
  // const [allUser, setAllUser] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:5000/user', {
  //     method: "GET",
  //     headers: {
  //       authorization:`Bearer ${localStorage.getItem('accessToken')}`
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setAllUser(data));
  // }, []);

  // console.log(users)
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
                key={user._id}
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

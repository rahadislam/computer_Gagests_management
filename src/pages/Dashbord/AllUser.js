import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Users from './Users';

const AllUser = () => {
    const { data: users, isLoading,refetch} = useQuery('user', () => fetch('https://computer-management.up.railway.app//user').then(res => res.json()));
    if (isLoading) {
        return <p>Loading.......</p>
    }
   
    
    return (
        <div class="overflow-x-auto w-full">
            <h1>Total User:{users.length}</h1>
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Email</th>
              <th>Add Admin</th>
              <th>Delete Admin</th>
            </tr>
          </thead>
          <tbody>
              {
                  users.map(user=><Users
                  key={user._id}
                  user={user}
                  refetch={refetch}
                  ></Users>)
              }
          </tbody>
          
        </table>
      </div>
    );
};

export default AllUser;
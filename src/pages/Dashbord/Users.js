import React from 'react';
import { toast } from 'react-toastify';

const Users = ({user,refetch}) => {
    const {_id,email,role}=user;
    const handelAdmin=()=>{
        fetch(`https://computer-management.up.railway.app/user/admin/${email}`,{
            method:'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })
        .then(res=>{
          if(res.status === 403){
              toast.error('You have no power make admin');
          }
          return res.json()})

        .then(data=>{
          if(data.modifiedCount > 0){
            refetch();
            toast.success('Congartulation ! You Successfully admin');

          }
            
        })

    }
const handelDelete=(_id)=>{
  fetch(`https://computer-management.up.railway.app/user/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount) {
                toast.success(` is deleted.`)
                refetch();
        }
    })
}

    return (
        
        <tr>
        <th>
                        <label>
                          <input type="checkbox" class="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div class="flex items-center space-x-3">
                          <div class="avatar">
                            
                          </div>
                          <div>
                            <div class="font-bold">{email}</div>
                          </div>
                        </div>
                      </td>
                      
                      
                      <th>
                        <button disabled={role==='admin'} onClick={()=>handelAdmin()} class="btn btn-sm bg-green-400 border-none text-white capitalize">Admin</button>
                      </th>
                      <th>
                        <button  onClick={()=>handelDelete(_id)} class="btn btn-sm bg-red-600 border-none text-white capitalize">Delete</button>
                      </th>
                    </tr>
    );
};

export default Users;
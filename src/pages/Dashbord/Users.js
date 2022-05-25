import React from 'react';
import { toast } from 'react-toastify';

const Users = ({user,refetch}) => {
    const {email,role}=user;
    const handelAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            refetch();
            toast.success('Congartulation ! You Successfully admin')
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
                        <button disabled={role==='admin'} onClick={()=>handelAdmin()} class="btn btn-sm bg-red-600 border-none text-white">Admin</button>
                      </th>
                    </tr>
    );
};

export default Users;
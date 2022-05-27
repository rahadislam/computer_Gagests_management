import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Allorders = () => {
    const { data: order, isLoading,refetch } = useQuery('order', () => fetch('http://localhost:5000/order').then(res => res.json()));
    if (isLoading) {
        return <p>Loading.......</p>
    }

    const handelDelete=(_id)=>{
        
        fetch(`http://localhost:5000/order/${_id}`,{
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
        <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Orders</th>
              <th>Phone</th>
              <th>Details</th>
              <th>Paymet</th>
            </tr>
          </thead>
          <tbody>
              {
                  order.map(s=><tr>
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
                            <div class="font-bold">{s.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {s.order}
                      </td>
                      <td>{s.phone}</td>
                      <th>
                        <button onClick={()=>handelDelete(s._id)} class="btn btn-sm bg-red-600 border-none text-white capitalize">Delete</button>
                      </th>
                      <th>
                        <button onClick={()=>handelDelete(s._id)} class="btn btn-sm bg-teal-400 border-none text-white capitalize">Paymet Now</button>
                      </th>
                    </tr>)
              }
            
            
            
            
          </tbody>
          
        </table>
      </div>
    );
};

export default Allorders;
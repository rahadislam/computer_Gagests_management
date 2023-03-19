import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Allitem = () => {


    const { data: service, isLoading,refetch } = useQuery('service', () => fetch('https://computer-management.up.railway.app/service').then(res => res.json()));
    if (isLoading) {
        return <p>Loading.......</p>
    }

    const handelDelete=(_id)=>{
        
        fetch(`https://computer-management.up.railway.app/service/${_id}`,{
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
        <th>Avilable</th>
        <th>Price</th>
        <th>Minimum</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
        {
            service.map(s=><tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={s.img} alt='' />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{s.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {s.Quantity}
                </td>
                <td>$ {s.Price}</td>
                <td>{s.minquantity}</td>
                <th>
                  <button onClick={()=>handelDelete(s._id)} class="btn btn-sm bg-red-600 border-none text-white capitalize">Delete</button>
                </th>
              </tr>)
        }
      
      
      
      
    </tbody>
    
  </table>
</div>
    );
};

export default Allitem;
import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col  bg-slate-50 p-5">
            <h1 className='font-bold text-2xl '>Dashbord</h1>
            <Outlet></Outlet>
            
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-100 text-base-content">
        
      <li><Link to='/dashbord'>Add Items</Link></li>
      <li><Link to='/dashbord/allitem'>All Items</Link></li>
      <li><Link to='/dashbord/alluser'>All User</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashbord;
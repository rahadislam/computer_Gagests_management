import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet,Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmincheak from '../../hooks/useAdmincheak';
import dashicon from '../../images/dots-menu.png'

const Dashbord = () => {
  const [user]=useAuthState(auth);
  const [admin]=useAdmincheak(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col  bg-slate-50 p-5">
  <label for="my-drawer-2" class="btn w-12 bg-slate-50 border-none drawer-button lg:hidden"><img src={dashicon} alt="" /></label>
            <h1 className='font-bold text-2xl '>Dashbord</h1>
            <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-slate-100 text-base-content">
        
      <li><Link to='/dashbord'>All Orders</Link></li>
      {/* <li><Link to='/dashbord/updateprofile'>Update Profile</Link></li> */}
      {admin && <li><Link to='/dashbord/additem'>Add Items</Link></li>}
      { admin && <li><Link to='/dashbord/allitem'>ManageItems</Link></li>}
      {
      admin && <li><Link to='/dashbord/alluser'>ManageUser</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashbord;
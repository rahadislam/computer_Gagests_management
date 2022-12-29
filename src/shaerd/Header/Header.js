import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import avatar from '../../images/avatar.jpg'

const Header = () => {
  const [user] = useAuthState(auth);
  const handelLogout = () => {
    signOut(auth);
    localStorage.removeItem('jwtToken')
  }
  return (
    <div class="navbar bg-base-100 lg:px-16">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabIndex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li ><Link  to='/home'>Home</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            {user && <li><Link to='/dashbord'>Dashboard</Link></li>}
            <li><Link to='/review'>Add Review</Link></li>

            <li><Link to='/myprofile'>My Profile</Link></li>
          </ul>
        </div>
        <a class="normal-case text-xl">BLC IT</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="flex items-center ">
          <li><Link className='text-lg hover:border-b-4 hover:border-green-500 rounded px-5 py-2'  to='/home'>Home</Link></li>
          <li><Link className='text-lg hover:border-b-4 hover:border-green-500 rounded px-5 py-2' to='/blogs'>Blogs</Link></li>
          {user && <li><Link className='text-lg hover:border-b-4 hover:border-green-500 rounded px-5 py-2' to='/dashbord'>Dashboard</Link></li>}
          <li><Link className='text-lg hover:border-b-4 hover:border-green-500 rounded px-5 py-2' to='/review'>Add Review</Link></li>

          <li><Link className='text-lg hover:border-b-4 hover:border-green-500 rounded px-5 py-2' to='/myprofile'>My Profile</Link></li>
        </ul>
      </div>
      <div class="navbar-end">
        <div class={`avatar ${!user ? "offline" : "online"} mx-3`} >
          <div class="w-12 rounded-full">

            <img src={!user ? avatar : user.photoURL} alt='' />
          </div>
        </div>
        {!user ? <Link to='/login' class="btn text-white btn-outline btn-primary">Login</Link> : <button class="btn text-white btn-outline btn-primary" onClick={handelLogout}>Logout</button>}
        <img src="" alt="" />

      </div>
    </div>
  );
};

export default Header;
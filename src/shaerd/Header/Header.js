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
          <li><a>Item 1</a></li>
          <li tabIndex="0">
            <a class="justify-between">
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        {user && <li><Link to='/dashbord'>Dashboard</Link></li>}
        
        <li><Link to='/myprofile'>My Profile</Link></li>
      </ul>
    </div>
    <div class="navbar-end">
    <div class={`avatar ${!user? "offline":"online"} mx-3`} >
        <div class="w-12 rounded-full">
          
          <img src={!user?avatar:user.photoURL} alt='' />
        </div>
      </div>
      {!user ? <Link to='/login' class="btn text-white btn-outline btn-primary">Login</Link> : <button class="btn text-white btn-outline btn-primary" onClick={handelLogout}>Logout</button>}
      <img src="" alt="" />
      
    </div>
  </div>
  );
};

export default Header;
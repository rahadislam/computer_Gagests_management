import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import linkedin from '../../images/linkedin.png'
import project from '../../images/project.png'
import auth from '../../firebase.init';
import './Myprofile.css'

const Myprofile = () => {
    const [user]=useAuthState(auth);
    const { data: profile, isLoading,refetch} = useQuery('profile', () => fetch('https://computer-management.up.railway.app/userUpdate').then(res => res.json()));
    if (isLoading) {
        return <p>Loading.......</p>
    }
    console.log(profile);
    return (
        <div>
            {profile.map(p=>
            <div class="card w-80 bg-base-100 mx-auto my-10 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={p.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title capitalize">{p.name}</h2>
              <a href={p.project} >Project: {p.project}</a>
            <a href={p.linked} >Linked: {p.linked}</a>
            <p>Location: Noakhali </p>
            <p>DepartMent: CMT </p>
              <div class="card-actions">
                  <Link to='/dashbord/updateprofile' class="btn draw-border capitalize">Update Profile</Link>
              </div>
            </div>
          </div>
            
                )}
  
</div>

    );
};

export default Myprofile;
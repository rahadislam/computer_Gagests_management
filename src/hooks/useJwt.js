import  { useEffect, useState } from 'react';

const useJwt = (user) => {
    const [token,setToken]=useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://computer-management.up.railway.app/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                const accessToken = data.token;
                localStorage.setItem('jwtToken', accessToken);
                setToken(accessToken);

            })
        }
    },[user])
    return [token]
};

export default useJwt;
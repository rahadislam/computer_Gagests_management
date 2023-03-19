import { useEffect, useState } from "react"

const useAdmincheak = user => {
    const [admin, setAdmin] = useState(false);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://computer-management.up.railway.app/admin/${email}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
            })
        }
    }, [user])

    return [admin]
}

export default useAdmincheak;
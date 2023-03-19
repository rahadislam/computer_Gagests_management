import { useEffect, useState } from "react";

const Useproduct = (id) => {
    const [product,setproduct]=useState({});
    useEffect(()=>{
        fetch(`https://computer-management.up.railway.app/service/${id}`)
        .then(res=>res.json())
        .then(data=>setproduct(data));
    },[id]);
    return [product,setproduct];
};

export default Useproduct;
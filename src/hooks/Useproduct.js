import { useEffect, useState } from "react";

const Useproduct = (id) => {
    const [product,setproduct]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data=>setproduct(data));
    },[id]);
    return [product,setproduct];
};

export default Useproduct;
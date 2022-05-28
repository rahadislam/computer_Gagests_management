import { useEffect, useState } from "react";

const Useproduct = (id) => {
    const [product,setproduct]=useState({});
    useEffect(()=>{
        fetch(`https://boiling-ravine-29801.herokuapp.com/service/${id}`)
        .then(res=>res.json())
        .then(data=>setproduct(data));
    },[id]);
    return [product,setproduct];
};

export default Useproduct;
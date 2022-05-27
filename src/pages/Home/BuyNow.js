import React from 'react';
import { useParams } from 'react-router-dom';
import Useproduct from '../../hooks/Useproduct';

const BuyNow = () => {
    const {id}=useParams();
    const [product]=Useproduct(id);
    console.log(product);
    return (
        <div>
            
        </div>
    );
};

export default BuyNow;
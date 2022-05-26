import React from 'react';
import ReviewDetails from '../Review/ReviewDetails';
import Bannar from './Bannar';
import Business from './Business';
import Services from './Services';
const Home = () => {
    return (
    <>
    <Bannar></Bannar>
    <Business></Business>
    <Services></Services>
    <ReviewDetails></ReviewDetails>
    </>
    );
};

export default Home;
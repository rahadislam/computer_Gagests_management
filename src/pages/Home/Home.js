import React from 'react';
import ReviewDetails from '../Review/ReviewDetails';
import Bannar from './Bannar';
import Business from './Business';
import IntoArea from './IntoArea';
import Services from './Services';
import Subscrib from './Subscrib';
const Home = () => {
    return (
    <>
    <Bannar></Bannar>
    <Business></Business>
    <Services></Services>
    <ReviewDetails></ReviewDetails>
    <Subscrib></Subscrib>
    <IntoArea></IntoArea>
    </>
    );
};

export default Home;
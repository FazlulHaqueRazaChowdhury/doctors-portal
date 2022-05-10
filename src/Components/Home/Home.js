import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import HomeAppoint from '../HomeAppoint/HomeAppoint';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Care />
            <HomeAppoint />
            <Testimonials />
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HomeAppoint from '../HomeAppoint/HomeAppoint';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Care />
            <HomeAppoint />
            <Testimonials />
            <Contact />

        </div>
    );
};

export default Home;
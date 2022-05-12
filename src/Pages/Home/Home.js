import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ExceptionalDental from './ExceptionalDental';
import Footer from './Footer';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (

        <>
            <Banner />
            <Info />
            <Services />
            <ExceptionalDental />
            <Appointment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </>
    );
};

export default Home;
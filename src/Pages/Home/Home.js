import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ExceptionalDental from './ExceptionalDental';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div >
            <Banner />
            <Info />
            <Services />
            <ExceptionalDental />
            <Appointment />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default Home;
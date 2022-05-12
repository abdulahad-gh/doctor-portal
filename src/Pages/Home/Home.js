import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ExceptionalDental from './ExceptionalDental';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='bg-white px-12'>
            <Banner />
            <Info />
            <Services />
            <ExceptionalDental />
            <Appointment />
            <Testimonial />
        </div>
    );
};

export default Home;
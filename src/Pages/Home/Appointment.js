import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';


const Appointment = () => {
    return (
        <section className='flex justify-center items-center' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='flex-1'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl py-5'>Make An Appointment Today</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis libero eos qui quam ea vel ut suscipit nisi, nulla officia?</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default Appointment;
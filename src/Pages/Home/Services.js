import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _Id: 1,
            name: "Fluoride Treatment",
            descrpition: "",
            img: fluoride
        },
        {
            _Id: 2,
            name: "Cavity Filling",
            descrpition: "",
            img: cavity
        },
        {
            _Id: 3,
            name: "Teeth Whitening",
            descrpition: "",
            img: whitening
        }
    ]
    return (
        <div className='bg-white'>
            <div className='bg-white text-center my-10'>
                <h2 className='text-primary text-md uppercase'>our Services</h2>
                <h3 className='text-3xl text-black capitalize'>services we provide</h3>
            </div>
            <div className='bg-white gap-2 justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service service={service} />)
                }
            </div>

        </div>
    );
};

export default Services;
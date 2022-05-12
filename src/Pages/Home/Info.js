import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div class="grid  md:grid-cols-3 gap-5 bg-white">
            <InfoCard cardTitle="Opening Hours" bgColor="bg-gradient-to-r from-secondary to-primary" img={clock} />
            <InfoCard cardTitle="Visit our location" bgColor="bg-accent" img={marker} />
            <InfoCard cardTitle="Contact us now" bgColor="bg-gradient-to-r from-secondary to-primary" img={phone} />

        </div>
    );
};

export default Info;
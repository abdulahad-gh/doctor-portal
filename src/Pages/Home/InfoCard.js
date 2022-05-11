import React from 'react';

const InfoCard = ({ bgColor, cardTitle, img }) => {

    return (
        <div class={`card lg:card-side  shadow-xl ${bgColor} text-white`}>
            <figure className='md:pl-5 pt-5 md:pt-0'><img className='w-12 md:max-w-md' src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title ">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoCard;
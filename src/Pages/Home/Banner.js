import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className='px-4'>
            <div class="hero min-h-screen bg-white px-4">
                <div class="hero-content flex-col lg:flex-row-reverse bg-white">
                    <img src={chair} class="md:max-w-md  rounded-lg shadow-2xl" alt='banner img' />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
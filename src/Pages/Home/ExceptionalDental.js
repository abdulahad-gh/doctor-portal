import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryBtn from '../Shared/PrimaryBtn';

const ExceptionalDental = () => {
    return (
        <div className='bg-white mt-8'>
            <div class="hero min-h-screen bg-white px-4 md:px-12">
                <div class="hero-content flex flex-col md:flex-row  bg-whit gap-20">
                    <img src={treatment} class="md:max-w-md  rounded-lg shadow-2xl" alt='banner img' />
                    <div>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>let's go</PrimaryBtn>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;
import React from 'react';
import sectionBgImg from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{ backgroundImage: `url(${sectionBgImg})` }} className='py-[80px]'>
            <div className='text-center'>
                <h4 className='text-xl text-[#19D3AE] font-bold'>Contact Us</h4>
                <h6 className='text-5xl text-white'>Stay connected with us</h6>

                <div className='flex flex-col md:w-[50%] px-8 mx-auto gap-4 mt-10'>
                    <input type="email" placeholder="Email Address" class="input w-full bg-white" />
                    <input type="text" placeholder="Subject" class="input w-full bg-white" />
                    <textarea class="textarea textarea-bordered h-24 bg-white" placeholder="Your message" style={{ resize: 'none' }}></textarea>
                </div>


            </div>
        </div>
    );
};

export default ContactUs;
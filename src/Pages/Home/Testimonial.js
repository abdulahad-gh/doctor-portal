import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'jamshed mjomdar',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque corporis quasi sunt omnis, asperiores illum dicta quis.',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'jamshed mjomdar',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque corporis quasi sunt omnis, asperiores illum dicta quis.',
            img: people2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'jamshed mjomdar',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque corporis quasi sunt omnis, asperiores illum dicta quis.',
            img: people3,
            location: 'California'
        }
    ]


    return (
        <section className='my-28  px-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h2 className='text-[47px] capitalize text-black'>what our patients says</h2>
                </div>
                <img src={quote} className='w-48' alt="" />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 '>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }

            </div>
        </section>
    );
};

export default Testimonial;
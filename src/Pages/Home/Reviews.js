import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div class="card lg:max-w-lg text-black shadow-xl ">
            <div class="card-body">
                <p>If a dog chews shoes whose shoes does he choose?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, ipsa.</p>
                <div class="flex mt-8">
                    <div class="avatar mr-4">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="review people" />

                        </div>

                    </div>
                    <div>
                        <p>{review.name}</p>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
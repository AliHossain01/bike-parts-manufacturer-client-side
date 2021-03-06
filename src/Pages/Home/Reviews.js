import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./Review.css";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://secure-dawn-45035.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])



    return (
        <div className='md:px-16 py-8 bg-amber-100'>
            <div className='flex flex-col justify-center  items-center '>
                <h2 className='text-dark text-center md:text-2xl mt-5'> <strong>Customer Reviews</strong> </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center mt-5'>
                    {
                        reviews.map((review) => <div className='shadow-lg rounded-2xl w-[350px] bg-white p-4'>

                            <div className='gap-4 flex justify-between items-center'>

                                <div className=' flex flex-col justify-end text-center'>
                                    <span className='text-gray-600 text-xl'>Name: {review.name}</span>
                                    <span className='text-gray-400 text-lg'>Rating: {review.rating}</span>
                                    <span className='text-gray-400 text-sm'>Comment: {review.description}</span>
                                </div>
                            </div>

                        </div>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Reviews;

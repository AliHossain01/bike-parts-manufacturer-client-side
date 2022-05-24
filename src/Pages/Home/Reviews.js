import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./Review.css";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])



    return (
        <div className='md:px-16 py-8'>
            <div className='flex flex-col justify-center  items-center '>
                <h1 className=' font-mono text-xl md:text-5xl '>
                    Clients Reviews
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center mt-5'>
                    {
                        reviews.slice(0, 3).map((review) => <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>

                            <div className='gap-4 flex justify-between items-center'>

                                <div className=' flex flex-col justify-end'>
                                    <span className='text-gray-600 font-medium'>{review.name}</span>
                                    <span className='text-gray-400 text-xs'>{review.rating}</span>
                                    <span className='text-gray-400 text-xs'>{review.description}</span>
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

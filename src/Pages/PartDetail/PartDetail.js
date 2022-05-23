import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));

    }, [])

    return (
        <div className='flex justify-center items-center m-5'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={part.img} alt="Ali" /></figure>
                <div class="card-body">
                    <div >
                        <h2 className="card-title">{part.name}</h2>
                        <p>Price: {part.price}/unit</p>
                        <p>Available: {part.quantity}</p>
                        <p><small>Minimum Order: {part.min_order}</small></p>
                    </div>

                    <div className='m-3'>
                        <form>

                            <input type="number" className='mb-2' value={part.min_order} placeholder=' Order Quantity' />
                        </form>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default ServiceDetail;
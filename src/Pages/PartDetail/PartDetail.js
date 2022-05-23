import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ServiceDetail = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});

    const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));

    }, [])

    return (
        <div className='flex  justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={part.img} alt="Parts" /></figure>
                <div class="card-body">
                    <h2 className="card-title">{part.name}</h2>
                    <p>Price: {part.price}/unit</p>
                    <p>Available: {part.quantity}</p>
                    <p><small>Minimum Order: {part.min_order}</small></p>
                    <div>
                        <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />



                            <input type="text" name="pname" disabled value={part?.name || ''} className="input input-bordered w-full max-w-xs" />

                            <input type="number" name="quantity" defaultValue={part.min_order} placeholder="Enter Quantity" className="input input-bordered w-full max-w-xs" />
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                            <input type="submit" value="Place Order" className="btn btn-primary w-full max-w-xs" />
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ServiceDetail;


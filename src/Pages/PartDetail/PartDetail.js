import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetail = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));

    }, [])

    const total = part.price * part.min_order;


    const onSubmit = data => {
        // console.log(data);
        const url = 'http://localhost:5000/booking';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Order Placed');
                reset()
            })
    };



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

                        <h2 className='text-2xl font-bold text-green-400 '>ORDER INFO</h2>
                        <form className='grid grid-cols-1 gap-3 justify-items-center mt-2' onSubmit={handleSubmit(onSubmit)}>

                            <input className='mb-2' value={user?.displayName || ''} {...register("name")} />
                            <input className='mb-2' value={user?.email || ''} {...register("email")} />
                            <input className='mb-2' placeholder='Phone Number' {...register("phone", { required: true, maxLength: 50 })} />

                            <input className='mb-2' value={part.name} {...register("pname")} />

                            {/* <input className='mb-2' value={part.name} type="text" {...register("pname")} /> */}
                            <input className='mb-2' defaultValue={part.min_order} type="number" {...register("quantity")} />
                            <input className='mb-2' value={total} type="number" {...register("price")} />


                            <input type="submit" className="btn btn-primary w-full max-w-xs" value="Place Order" />
                        </form>
                        <ToastContainer />




                    </div>
                </div>


            </div>
        </div>
    );
};

export default ServiceDetail;

{/* <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />



    <input type="text" name="pname" disabled value={part?.name || ''} className="input input-bordered w-full max-w-xs" />

    <input type="number" name="quantity" defaultValue={part.min_order} className="input input-bordered w-full max-w-xs" />

    <input type="number" name="price" value={total} className="input input-bordered w-full max-w-xs" />
    <input type="submit" value="Place Order" className="btn btn-primary w-full max-w-xs" />
</form> */}
import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    console.log(user);

    const onSubmit = data => {
        // console.log(data);
        const url = 'https://secure-dawn-45035.herokuapp.com/review';
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
                toast('Review Added');
                reset()
            })
    };




    return (
        <div>

            <h2 className='text-2xl font-bold text-green-400 text-center'>Your valuable Review will encourage Us</h2>

            <form className='grid grid-cols-1 gap-2 justify-items-center' onSubmit={handleSubmit(onSubmit)}>

                <input className="input input-bordered w-full max-w-xs" value={user?.displayName} {...register("name")} />
                <input className="input input-bordered w-full max-w-xs" placeholder='Rating out of 5' type="number" {...register("rating")} />
                <textarea className="input input-bordered w-full max-w-xs" placeholder='Description' {...register("description")} />

                <input type="submit" className="btn btn-primary  max-w-xs" value="Add Review" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddReview;
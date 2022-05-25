import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        // console.log(data);
        const url = 'https://secure-dawn-45035.herokuapp.com/part';
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
                toast('Parts Added');
                reset()
            })
    };




    return (
        <div>
            <h2 className='text-2xl font-bold text-green-400 text-center'>Add Parts</h2>
            <form className='grid grid-cols-1 gap-2 justify-items-center' onSubmit={handleSubmit(onSubmit)}>

                <input className="input input-bordered w-full max-w-xs" placeholder='Name' type="text" {...register("name", { required: true })} />

                <textarea className="input input-bordered w-full max-w-xs" placeholder='Description' type="text" {...register("description", { required: true })} />

                <input className="input input-bordered w-full max-w-xs" placeholder='Price' type="number" {...register("price", { required: true })} />

                <input className="input input-bordered w-full max-w-xs" placeholder='Minimum Quantity' type="number" {...register("min_order", { required: true })} />

                <input className="input input-bordered w-full max-w-xs" placeholder='Quantity' type="number" {...register("quantity", { required: true })} />


                <input className="input input-bordered w-full max-w-xs" placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <input type="submit" className="btn btn-primary  max-w-xs" value="Add Parts" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;
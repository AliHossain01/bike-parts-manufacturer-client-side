import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ServiceDetail = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const [user, loading, error] = useAuthState(auth);

    const [disable, setDisable] = useState(false);
    const [quantity, setQuantity] = useState();



    useEffect(() => {
        const url = `https://secure-dawn-45035.herokuapp.com/part/${partId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));

    }, [])

    const total = part.price * part.min_order;



    const handleInputQuantity = event => {
        const inputQuantity = event.target.value;
        setQuantity(inputQuantity);


    }


    const handlePlaceOrder = event => {

        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            pname: part.name,
            quantity: event.target.quantity.value,
            price: event.target.quantity.value * part.price

        }
        axios.post('https://secure-dawn-45035.herokuapp.com/booking', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }



    return (
        <div className='flex  justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={part.img} alt="Parts" /></figure>
                <div class="card-body ">

                    <div>
                        <h2 className="card-title">{part.name}</h2>
                        <p>Price: {part.price}/unit</p>
                        <p>Available: {part.quantity}</p>
                        <p><small>Minimum Order: {part.min_order}</small></p>
                    </div>
                    <div className="divider text-2xl font-bold text-green-400 ">ORDER INFO</div>

                    <div>

                        <form onSubmit={handlePlaceOrder}>
                            <input className="input input-bordered w-full max-w-xs mt-2" type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="text" name="phone" placeholder='phone' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="text" value={part.name} name="pname" required readOnly />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="number" name="quantity" placeholder='quantity' required onChange={handleInputQuantity} />

                            <br />
                            <input className='btn btn-primary mt-2' type="submit" value="Place Order" disabled={(quantity < part.min_order || quantity > part.quantity) && !disable} />
                        </form>

                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;


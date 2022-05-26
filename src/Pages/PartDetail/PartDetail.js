import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const PartDetail = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});

    const [user, loading, error] = useAuthState(auth);

    const [disable, setDisable] = useState(false);
    const [uquantity, setUquantity] = useState();



    useEffect(() => {
        const url = `https://secure-dawn-45035.herokuapp.com/part/${partId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data));

    }, [])





    const handleInputQuantity = event => {
        const inputQuantity = event.target.value;
        setUquantity(inputQuantity);


    }

    const defaultQuantity = parseInt(part.quantity);

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

        const newQuantity = defaultQuantity - parseInt(uquantity);
        const deliveredQuantity = { ...part, quantity: newQuantity };
        setPart(deliveredQuantity);

        const url = `https://secure-dawn-45035.herokuapp.com/part/${partId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(deliveredQuantity)
        })
            .then(res => res.json())
            .then(data => console.log(data))



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
                            <input className="input input-bordered w-full max-w-xs mt-2" type="text" name="phone" placeholder='Enter your phone no.' required />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="text" value={part.name} name="pname" required readOnly />
                            <br />
                            <input className="input input-bordered w-full max-w-xs mt-2" type="number" name="quantity" placeholder='Quantity' required onChange={handleInputQuantity} />

                            <br />
                            <input className='btn btn-outline mt-2' type="submit" value="Place Order" disabled={(uquantity < part.min_order || uquantity > part.quantity) && !disable} />
                        </form>

                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartDetail;


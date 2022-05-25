import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from './../Shared/Loading';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3GRFERGjIZwhItfNY5bzr7sZS4eZuCkFY4NezZBdV6J7FoWSt9RIM0CogjoB6mReqZHXM2dOMVqilTaY14oMsl0015yEVrys');

const Payment = () => {
    const { id } = useParams();
    const url = `https://secure-dawn-45035.herokuapp.com/booking/${id}`;

    const { data: parts, isLoading } = useQuery(['booking', id], () => fetch(url, {

        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {parts.name}</p>
                    <h2 class="card-title">Please Pay for: {parts.pname}</h2>
                    <p>Your booking quantity is: <span className='text-orange-700'>{parts.quantity}</span></p>
                    <p>Please pay: ${parts.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm parts={parts} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
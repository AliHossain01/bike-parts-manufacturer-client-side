import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from "react-icons/bs";

const Part = ({ part }) => {
    const { _id, name, img, description, price, quantity, min_order } = part;

    const navigate = useNavigate();

    const navigateToPartDetail = id => {
        navigate(`/part/${id}`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Parts" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p><small>{description}</small></p>
                <p>Price: ${price} /unit</p>
                <p>Available: {quantity}</p>
                <p><small>Minimum Order: {min_order}</small></p>
                <div className='text-center'>

                    <button onClick={() => navigateToPartDetail(_id)} className="btn btn-outline ">Buy Now <BsFillCartCheckFill className='icon' /></button>
                </div>
            </div>

        </div>
    );
};

export default Part;
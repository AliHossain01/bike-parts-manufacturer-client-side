import React from 'react';
import parts from '../../assets/images/parts.jpg';


const Banner = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl my-10">
            <figure><img src={parts} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title text-5xl font-bold">Your Bike Solution is Here</h2>
                <p className="py-6">Nothing compares to the simple pleasure of a bike ride. Don’t buy upgrades, ride up grades.It is the unknown around the corner that turns my wheels.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;


{/* <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={parts} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your Bike Solution is Here</h1>
                    <p className="py-6">Nothing compares to the simple pleasure of a bike ride. Don’t buy upgrades, ride up grades. <br />It is the unknown around the corner that turns my wheels.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div> */}
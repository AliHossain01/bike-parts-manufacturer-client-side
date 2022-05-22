import React from 'react';
import parts from '../../assets/images/parts.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={parts} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your Bike Solution is Here</h1>
                    <p className="py-6">Nothing compares to the simple pleasure of a bike ride. Don’t buy upgrades, ride up grades. <br />It is the unknown around the corner that turns my wheels.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
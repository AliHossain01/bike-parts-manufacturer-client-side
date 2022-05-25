import React from 'react';
import Banner from './Banner';
import BestParts from './BestParts';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary.js';
import TopSellings from './TopSellings';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <Reviews></Reviews>
            <TopSellings></TopSellings>
            <BestParts></BestParts>
            <Summary></Summary>
        </div>
    );
};

export default Home;
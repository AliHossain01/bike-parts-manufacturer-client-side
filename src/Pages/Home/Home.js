import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Summary from './Summary.js';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Summary from './Summary.js';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default Home;
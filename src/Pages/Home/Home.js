import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Parts from './Parts';
import Summary from './Summary.js';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default Home;
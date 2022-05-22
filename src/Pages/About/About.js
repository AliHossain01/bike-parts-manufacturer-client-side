import React from 'react';
import ali from '../../assets/images/ali.JPG';

const About = () => {
    return (
        <div className='flex justify-center items-center m-5'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={ali} alt="Ali" /></figure>
                <div class="card-body">
                    <div >
                        <h2 className='text-center text-2xl'>Md. Ali Hossain <br />CSE, Khulna University</h2>


                        <p >Hi, I am Ali. I am a student of CSE discipline, Khulna University. I love to coding. I want to  be a Full Stack Web Developer in future. I know about C, Javascript, React, HTML5, CSS3, Bootstrap5, Tailwind, API, Dev Tool, Firebase, Netlify, MongoDB. </p>
                        <h5 className='text-center text-2xl my-2'>Some of my Project Live site:</h5>
                        <h6>1. Photography Services: <a href="https://photography-services-e857d.web.app/"> Live Site</a></h6>
                        <h6>2. Warehouse Management: <a href="https://warehouse-management-8e867.web.app/">Live Site</a></h6>
                        <h6>3. Manufacturer website: <a href="">Live Site</a></h6>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default About;
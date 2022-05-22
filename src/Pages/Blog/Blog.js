import React from 'react';
import jscode from '../../assets/images/jscode.png';

const Blog = () => {
    return (
        <div className='mx-4'>

            <h2 className='text-primary  text-3xl font-bold uppercase text-center'>This is about QA</h2>

            <h5 className='text-xl'>1. How will you improve the performance of a React Application?</h5>
            <p>Answer: We can improve the performance of a React Application in different ways. Some of are Keeping component state local where necessary, Memoizing React components to prevent unnecessary re-renders, Code-splitting in React using dynamic import(),  Windowing or list virtualization in React applications, Lazy loading images in React.</p>

            <h5 className='text-xl'>2. What are the different ways to manage a state in a React application?</h5>
            <p>Answer: There are four main types of state you need to properly manage in your React apps: <br /> 1. Local (UI) state: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. <br /> 2. Global (UI) state: Global state is data we manage across multiple components. <br /> 3. Server state:  Data that comes from an external server that must be integrated with our UI state. <br /> 4.URL state: Data that exists on our URLs, including the pathname and query parameters.</p>

            <h5 className='text-xl'>3.How does prototypical inheritance work?</h5>
            <p>Answer: Every object with its methods and properties contains an internal and hidden property known as [Prototype]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [Prototype] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. </p>



            <h5 className='text-xl'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h5>
            <p>Answer: <img src={jscode} /> </p>

            <h5 className='text-xl'>5. What is a unit test? Why should write unit tests?</h5>
            <p>Answer:Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. <br /> Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs. Testing a code early on can help to define what that piece of code is really responsible for.

            </p>





        </div>
    );
};

export default Blog;
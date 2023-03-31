import React from 'react';

const Blog = () => {
    return (
        <div  className='my-5 py-3 px-4'>
            <h1  className='text-3xl font-bold'>1. Props vs State?</h1>
            <h5  className='text-xl font-semibold py-3'>Ans: In the react world props is a short form of properties.props is a method of passing data from a parent component to a child component. props cannot be change or modified.it is immutable <br />
            On the contrary state is an another method of react. it triggers a rerender of a component. it can be change and modified but it can't be share with other componenets.</h5>
            <h1 className='text-3xl font-bold'>2. How does useState work?</h1>
            <h5  className='text-xl font-semibold py-3'>Ans. useState is a built-in method react hook.it's allows functional components to manage state.when it's called with an initial value it returns an array with two item,one is the current state value of the component and other is a function to update the value of state</h5>
            <h1 className='text-3xl font-bold'>3. Purpose of useEffect other than fetching data?</h1>
            <h5  className='text-xl font-semibold py-3'>Ans. useEffect not only use for fetching data,it can also use for some another Purpose. here is a list of those purpose <br />
            <ul type='disc'>
                <li>1.Updating the document title</li>
                <li>2.Subscribing to a WebSocket</li>
                <li>3.Managing a timer</li>
            </ul>
            </h5>
            <h1 className='text-3xl font-bold'>4. How Does React work?</h1>
            <h5  className='text-xl font-semibold py-3'>Ans. React is a JavaScript library for building user interfaces. It allows to create reusable UI components and efficiently update them in response to changes in application state. <br />
            Here's a overview of the steps involved in rendering a React component: <br />
            <ol>
                <li>1.Define a component</li>
                <li>2.Render the component</li>
                <li>3.Update the component</li>
                <li>4.Render the updated UI</li>
            </ol><br />
            Overall, React provides a declarative way to build UIs that is both efficient and flexible. By breaking your UI into small, reusable components and managing state carefully, you can create complex applications that are easy to reason about and maintain.</h5>
        </div>
    );
};

export default Blog;
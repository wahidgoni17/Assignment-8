import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';

const Main = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch (`data.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='blogs-container bg-gray-200 text-3xl font-bold col-span-2'>
                {
                    blogs.map((blog) => (
                        <Blogs 
                        key={blog.id}
                        blog = {blog}
                        ></Blogs>
                    ))
                }
            </div>
            <div className='side-bar text-2xl bg-slate-200 font-bold'>
                <h1>side bar here</h1>
            </div>
        </div>
    );
};

export default Main;
import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch (`data.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='blogs-container text-3xl font-bold col-span-2'>
                {
                    blogs.map((blog) => (
                        <Blogs 
                        key={blog.id}
                        blog={blog}
                        ></Blogs>
                    ))
                }
            </div>
            <div className='side-bar my-6 mr-4 rounded-2xl text-2xl font-bold'>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Main;
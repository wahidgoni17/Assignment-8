import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const [blogs, setBlogs] = useState([])
    const [singleBlog, setBlog] = useState([])
    const [bookmark, setBookmark] = useState([])
    useEffect(() => {
        fetch (`data.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const notify = () => toast("Already Bookmarked this Blog");
    const handletimer = (blog) =>{
        const newBlog = [...singleBlog, blog]
        setBlog(newBlog)
    }
    const handleBookmark = (blog) =>{
        const newBookmark = [...bookmark, blog]
        let exists = bookmark.find(blog => blog.id === blog.id)
        if(exists){
            notify()
        }
        setBookmark(newBookmark)
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='blogs-container text-3xl font-bold col-span-2'>
                {
                    blogs.map((blog) => (
                        <Blogs 
                        key={blog.id}
                        blog={blog}
                        handletimer={handletimer}
                        handleBookmark={handleBookmark}
                        ></Blogs>
                    ))
                }
            </div>
            <div className='side-bar my-6 mr-4 rounded-2xl text-2xl font-bold'>
                <Sidebar Blog={singleBlog} Bookmark={bookmark}></Sidebar>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Main;
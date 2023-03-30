import React from 'react';

const Sidebar = (props) => {
    const blog = props.Blog
    console.log(blog)
    let readTime = 0
    for(const uniqueblog of blog){
        console.log(uniqueblog)
        readTime += uniqueblog.readTime
    }
    const bookmark = props.Bookmark
    console.log(bookmark)
    let title
    let bookmarked = 0
    for(const singleBookmark of bookmark){
        console.log(singleBookmark)
        title = singleBookmark.title
        bookmarked++
    }
    return (
        <div className='sticky top-0'>
            <div className='border-2 border-violet-500 bg-violet-200 rounded-xl text-center py-4'>
                <h2 className='text-violet-600'>Spent Time On Read :{readTime} min</h2>
            </div>
            <div className='bg-slate-200 sticky my-4 rounded-xl'>
                <h1 className='pl-3 py-4'>Bookmarked Blogs : {bookmarked}</h1>
                <div>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
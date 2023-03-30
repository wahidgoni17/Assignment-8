import React from 'react';

const Blogs = (props) => {
    const {title,
        coverURL,
        readTime,
        authorURL,
        name,
        publishedData} = props.blog
    return (
        <div>
            <h1>blogs here : {name}</h1>
        </div>
    );
};

export default Blogs;
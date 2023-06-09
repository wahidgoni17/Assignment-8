import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blogs = ({ blog, handleTimer, handleBookmark }) => {
  const { title, coverURL, readTime, authorURL, name, publishedData } = blog;
  return (
    <div className="card card-compact w-full bg-slate-50 ml-3 my-6 shadow-xl">
      <figure>
        <img className="p-8 rounded-2xl" src={coverURL} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-6">
            <img className="w-14 h-14 rounded-full" src={authorURL} alt="" />
            <div>
              <h2 className="text-2xl">{name}</h2>
              <h6 className="text-slate-600">{publishedData} (4 days ago)</h6>
            </div>
          </div>
          <div>
            <h4 className="text-slate-600">
              {readTime} min read{" "}
              <FontAwesomeIcon
                onClick={() => handleBookmark(blog)}
                icon={faBookmark}
              />
            </h4>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold my-5">{title}</h1>
          <h5 className="text-gray-500">#beginers #programing</h5>
        </div>
        <div className="card-actions my-5">
          <button
            onClick={() => handleTimer(blog)}
            className="text-xl text-blue-700 hover:text-red-700 underline"
          >
            Mark As Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

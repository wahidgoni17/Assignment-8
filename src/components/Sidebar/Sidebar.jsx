import React from "react";

const Sidebar = (props) => {
  const blog = props.Blog;
  let readTime = 0;
  for (const uniqueblog of blog) {
    console.log(uniqueblog);
    readTime += uniqueblog.readTime;
  }
  const bookmark = props.Bookmark;
  console.log(bookmark);
  let bookmarked = 0;
  for (const singleBookmark of bookmark) {
    bookmarked++;
  }
  return (
    <div className="sticky top-0">
      <div className="border-2 border-violet-500 bg-violet-200 rounded-xl text-center py-4">
        <h2 className="text-violet-600">Spent Time On Read :{readTime} min</h2>
      </div>
      <div className="bg-slate-200 h-full my-4 pb-2 rounded-xl">
        <h1 className="pl-3 py-4">Bookmarked Blogs : {bookmarked}</h1>
        {bookmark.map((uniquebookmark, index) => (
          <div key={index} className="bg-gray-100 mx-4 my-4 px-2 py-5">
            <h1>{uniquebookmark.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";

const Sidebar = ({Blog, Bookmark}) => {
  let readTime = 0;
  for (const uniqueblog of Blog) {
    console.log(uniqueblog);
    readTime += uniqueblog.readTime;
  }
  console.log(Bookmark);
  let bookmarked = 0;
  for (const singleBookmark of Bookmark) {
    bookmarked++;
  }
  return (
    <div className="sticky top-10">
      <div className="border-2 border-violet-500 bg-violet-200 rounded-xl text-center shadow-xl py-4">
        <h2 className="text-violet-600">Spent Time On Read :{readTime} min</h2>
      </div>
      <div className="bg-slate-200 h-full my-4 pb-2 rounded-xl shadow-xl">
        <h1 className="text-center py-4">Bookmarked Blogs : {bookmarked}</h1>
        {Bookmark.map((uniquebookmark, index) => (
          <div key={index} className="bg-gray-100 mx-4 my-4 px-2 py-5 rounded-2xl">
            <h1 className="p-1">{uniquebookmark.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

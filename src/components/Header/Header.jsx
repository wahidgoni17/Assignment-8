import React from "react";

const Header = () => {
  return (
    <div className="bg-teal-950 text-stone-200 h-20 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold ml-12 ">Knowledge Cafe</h1>
      </div>
      <div className="flex text-xl gap-4 mr-12">
        <a href="contact">Contact</a>
        <a href="About">About</a>
        <a href="Login">Log In</a>
        <img src="../../assets/female-attorney-headshot-oc.jpg" alt="" />
      </div>
    </div>
  );
};

export default Header;

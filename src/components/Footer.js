import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 z-50 fixed bg-[#232255] p-2 text-white w-screen flex justify-between ">
      <div className="flex flex-col mx-40">
        <h1 className="text-2xl">Have your own opinion to voice out?</h1>
        <h4 className="mx-10">GETTR opens your way to new experiences.</h4>
      </div>
      <div>
        {" "}
        <div className=" flex justify-between mx-20">
        <div className=" bg-[#232255] cursor-pointer	font-extrabold text-white p-2 items-center justify-center hidden lg:flex rounded-full shadow-lg mx-5 border-2">
           Log In
          </div>
          <div className="bg-white	font-extrabold cursor-pointer	 text-sky-900 p-2 items-center justify-center hidden lg:flex rounded-full shadow-lg">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

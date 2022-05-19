import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 z-50 fixed bg-[#3D3C7C] p-5 text-white w-screen flex justify-between ">
      <div className="flex flex-col mx-20">
        <h1 className="text-3xl">Have your own opinion to voice out?</h1>
        <h1>GETTR opens your way to new experiences.</h1>
      </div>
      <div>
        {" "}
        <div className=" flex justify-between mx-20">
        <div className=" bg-[#3D3C7C]	font-extrabold text-white p-2 items-center justify-center flex rounded-full shadow-lg mx-5 border-2">
           Log In
          </div>
          <div className="bg-white	font-extrabold	 text-sky-900 p-2 items-center justify-center flex rounded-full shadow-lg">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

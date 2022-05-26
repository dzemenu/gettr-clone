import React from "react";
import {
  PencilAltIcon,
  SearchCircleIcon,
  QuestionMarkCircleIcon,VolumeUpIcon
} from "@heroicons/react/solid";
const SideBar = () => {
  return (
    <div className=" flex flex-col w-1/5 h-screen bg-slate-50  fixed top-20 ml-20">
       
      <div className="bg-red-700 flex justify-center items-center rounded-full shadow-lg p-2 cursor-pointer m-10 w-2/3">
        <PencilAltIcon className="text-white h-8 w-8" />
        <h1 className="text-white text-xl">Create post</h1>
      </div>

      <div className="flex flex-col justify-between h-screen bg-white border-r">
        <div className="px-4 py-6">
         

          <nav className="flex flex-col mt-6 space-y-1">
            <a
              href="/"
              className="flex items-center px-4 py-2 text-red-700 bg-gray-100 rounded-lg"
            >
              <SearchCircleIcon className="text-red-500 h-10 w-10" />
              <span className="ml-3 text-xl font-medium"> Explore </span>
            </a>

            <details className="group">
              <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                <QuestionMarkCircleIcon className="text-gray-500 h-10 w-10" />
                <span className="ml-3 text-xl font-medium"> Help </span>

                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"></span>
              </summary>
            </details>
            <details className="group">
              <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                <VolumeUpIcon className="text-gray-500 h-10 w-10" />
                <span className="ml-3 text-xl font-medium"> Live </span>

                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"></span>
              </summary>
            </details>
          </nav>
          <img src="../images/getapp.png" alt=""className="w-2/3 mt-20"></img>
        </div>
      </div>
    
    </div>
  );
};

export default SideBar;

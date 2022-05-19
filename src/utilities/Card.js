import React from "react";
import {
  ChatIcon,
  ThumbUpIcon,
  ShareIcon,
  ReplyIcon,
  
} from "@heroicons/react/solid";
const Card = ({ title, logo, description, image, author, date }) => {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <a href="/">
        <img
          src={image}
          loading="lazy"
          alt={title}
          className="w-full h-48 rounded-t-md"
        />
        <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
          <div className="flex-none w-10 h-10 rounded-full">
            <img
              src={logo}
              className="w-full h-full rounded-full"
              alt={title}
            />
          </div>
          <div className="ml-3">
            <span className="block text-gray-900">{author}</span>
          </div>
        </div>
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
        <div className="flex justify-between w-1/2 m-10">
          <div className="flex justify-between w-2/3">
            <ChatIcon className="block text-gray-400 h-5 w-5" />
            <ThumbUpIcon className="block text-gray-400 h-5 w-5" />
            <ShareIcon className="block text-gray-400 h-5 w-5" />
          </div>
          <ReplyIcon className="block text-gray-400 h-5 w-5  justify-end items-end 	" />
        </div>
      </a>
    </article>
  );
};

export default Card;

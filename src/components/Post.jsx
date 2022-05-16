import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, img, title, category, text, views }) => {
  return (
    <div className="p-4 md:w-1/3" key={id}>
      <div className="h-full  rounded-lg overflow-hidden shadow-md">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt={title} />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <Link to={`/posts/${id}`} className="title-font text-lg font-medium text-gray-900 mb-6">
            {title}
          </Link>
          <p className="leading-relaxed mb-4 mt-4">{text}</p>
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/posts/${id}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Детальніше
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

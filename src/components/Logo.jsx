import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center text-gray-600 text-2xl md:text-3xl font-bold gap-2.5">
      <svg
        width="95"
        height="94"
        viewBox="0 0 95 94"
        className="w-6 h-auto text-indigo-500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
      </svg>
      ТехНов
    </Link>
  );
};

export default Logo;

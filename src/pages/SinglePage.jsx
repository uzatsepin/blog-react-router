import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore/lite';

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const postsColletionRef = doc(db, 'posts', id);

  const goBack = () => navigate(-1);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDoc(postsColletionRef);
      setPost(data.data());
    };
    getPosts();
  }, [id]);

  return (
    post && (
      <div className="bg-white py-4 sm:py-6 lg:py-8">
        <div className="max-w-screen-md px-4 md:px-8 mx-auto">
          <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
            {post.title}
          </h1>
          <img src={post.img} alt="as" className="w-full h-full object-cover object-center" />
          <p className="text-gray-500 mt-12 sm:text-lg mb-6 md:mb-8">{post.fullText}</p>
        </div>
        <div className="container flex justify-center mx-auto">
          <button
            onClick={goBack}
            className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Назад
          </button>
        </div>
      </div>
    )
  );
};

export default SinglePage;

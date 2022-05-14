import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { database } from '../config/firebase';
import { ref, child, get } from 'firebase/database';
import Search from '../components/Search';

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  //URL.ua/posts?post=abc&data=

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPosts(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-10 mx-auto">
        <div className="sm:col-span-2 flex justify-between items-center">
          <Link
            to="/posts/new"
            className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mb-10">
            Додати новину
          </Link>
          <Search setSearchParams={setSearchParams} postQuery={postQuery} />
        </div>

        <div className="flex flex-wrap -m-4">
          {posts
            .filter((post) => post.title.includes(postQuery))
            .map((post) => (
              <div className="p-4 md:w-1/3" key={post.id}>
                <div className="h-full  rounded-lg overflow-hidden shadow-md">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={post.img}
                    alt={post.title}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {post.category}
                    </h2>
                    <Link
                      to={`/posts/${post.id}`}
                      className="title-font text-lg font-medium text-gray-900 mb-6">
                      {post.title}
                    </Link>
                    <p className="leading-relaxed mb-4 mt-4">{post.text}</p>
                    <div className="flex items-center flex-wrap ">
                      <Link
                        to={`/posts/${post.id}`}
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
                        {post.views}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PostPage;

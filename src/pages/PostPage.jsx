import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import Search from '../components/Search';
import MyLoader from '../components/Loader';
import Post from '../components/Post';

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoaded, setLoaded] = useState(true);
  const postsColletionRef = collection(db, 'posts');

  console.log(isLoaded);
  const postQuery = searchParams.get('post') || '';

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsColletionRef);
      setPosts(data.docs.map((post) => ({ ...post.data(), id: post.id })));
    };
    setLoaded(false);
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemsRender = () => {
    return posts
      .filter((post) => post.title.includes(postQuery))
      .map((post) => (
        <Post
          id={post.id}
          img={post.img}
          title={post.title}
          views={post.views}
          text={post.text}
          key={post.id}
        />
      ));
  };

  //URL.ua/posts?post=abc&data=

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-10 mx-auto">
        <div className="sm:flex flex-row justify-between items-center my-7">
          <Link
            to="/posts/new"
            className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mob: mb-7 sm:mb-0">
            Додати новину
          </Link>
          <Search setSearchParams={setSearchParams} postQuery={postQuery} />
        </div>
        <div className="flex flex-wrap -m-4">{itemsRender()}</div>
      </div>
    </section>
  );
};

export default PostPage;

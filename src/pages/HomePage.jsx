import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
          {/* <!-- content - start --> */}
          <div className="xl:w-5/12 flex flex-col justify-center text-center lg:text-left lg:py-12 xl:py-24">
            <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
              Ми пишаємося новинами
            </p>

            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
              Найкращі редактори зібрані тут
            </h1>

            <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
              Всі найновіші технологічні новини можна прочитати на одному, найкращому сайті
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <Link
                to="/posts"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Почати читати
              </Link>
            </div>
          </div>
          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
            <img
              src="https://img.freepik.com/free-vector/support-ukraine-text-with-watercolor-brush-stroke-flag-theme-design-vector_1055-12690.jpg?w=2000"
              loading="lazy"
              alt="MainPhoto"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}
        </section>
      </div>
    </div>
  );
};

export default HomePage;

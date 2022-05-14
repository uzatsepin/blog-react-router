import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from './Footer';
import Logo from './Logo';

const Layout = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex justify-between items-center py-2 md:py-8 ">
            <Logo />
            {/* <!-- nav - start --> */}
            <nav className="hidden lg:flex gap-12">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-indigo-700 text-lg font-semibold transition duration-100'
                    : 'text-gray-700 text-lg font-semibold'
                }>
                Домашня
              </NavLink>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive
                    ? 'text-indigo-700 text-lg font-semibold transition duration-100'
                    : 'text-gray-700 text-lg font-semibold'
                }>
                Новини
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-indigo-700 text-lg font-semibold transition duration-100'
                    : 'text-gray-700 text-lg font-semibold'
                }>
                Про нас
              </NavLink>
            </nav>
          </header>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

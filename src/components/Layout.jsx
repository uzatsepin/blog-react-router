import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from './Footer';
import Logo from './Logo';

const Layout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="container px-5 mx-auto bg-white">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex md:justify-between items-center py-8 md:py-8 sm:py-8 justify-center">
            <Logo />
            {/* <!-- nav - start --> */}
            <nav className="hidden md:flex gap-12">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-indigo-600 text-lg font-semibold transition duration-100'
                    : 'text-gray-600 text-lg font-semibold'
                }>
                Домашня
              </NavLink>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive
                    ? 'text-indigo-600 text-lg font-semibold transition duration-100'
                    : 'text-gray-600 text-lg font-semibold'
                }>
                Новини
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-indigo-600 text-lg font-semibold transition duration-100'
                    : 'text-gray-600 text-lg font-semibold'
                }>
                Про нас
              </NavLink>
            </nav>
          </header>
        </div>
      </div>
      <Outlet />
      <div className="flex-1"></div>
      <Footer />
    </div>
  );
};

export default Layout;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavbarLayout = () => {
  return (
    <>
      <nav className="bg-[#f9f3e7] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand Name */}
          <Link to="/" className="text-2xl font-bold text-yellow-700 select-none tracking-wide">
            Sadans
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-yellow-800 font-semibold">
            <li>
              <Link to="/" className="hover:text-yellow-600 cursor-pointer transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-600 cursor-pointer transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-yellow-600 cursor-pointer transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-600 cursor-pointer transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Outlet for nested routes */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </>
  );
};

export default NavbarLayout;

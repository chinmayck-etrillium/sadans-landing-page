import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";

const NavbarLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <nav className="bg-[#f9f3e7] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand Name */}
          <Link
            to="/"
            className="text-2xl font-bold text-yellow-700 select-none tracking-wide"
          >
            Sadans
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-yellow-800 font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-600 cursor-pointer transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-600 cursor-pointer transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-yellow-600 cursor-pointer transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-600 cursor-pointer transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="h-1 bg-blue-500 animate-pulse"></div>
        </div>
      )}
      {console.log("loading state", isLoading)}

      <main className="min-h-screen max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default NavbarLayout;

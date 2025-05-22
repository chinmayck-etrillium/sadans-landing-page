import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f9f3e7]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-yellow-700">
            <p className="text-sm">
              © {new Date().getFullYear()} Sadans Coconut Oil. All rights
              reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6 text-yellow-600">
            <a
              href="#"
              className="hover:text-yellow-500 transition-colors duration-300 text-sm"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-yellow-500 transition-colors duration-300 text-sm"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-yellow-500 transition-colors duration-300 text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

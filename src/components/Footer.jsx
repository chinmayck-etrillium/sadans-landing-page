import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f9f3e7] py-8 px-6 text-center text-yellow-700 text-sm select-none">
      <p>© {new Date().getFullYear()} Sadans Coconut Oil. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6 text-yellow-600">
        {/* You can replace these with actual icons/links */}
        <a href="#" className="hover:text-yellow-500 transition">Facebook</a>
        <a href="#" className="hover:text-yellow-500 transition">Instagram</a>
        <a href="#" className="hover:text-yellow-500 transition">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;

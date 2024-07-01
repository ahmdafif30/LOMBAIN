import React from "react";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100% p-5 rounded-b-lg fixed top-0 right-0 left-0">
      <div className="flex justify-center">
        <div>
          <a href="/" className="text-3xl font-bold text-white px-5">
            LOMBA.IN
          </a>
        </div>
        <div className="flex gap-12 items-center ml-auto px-10">
          <a href="/" className="text-xl font-bold text-white">
            Home
          </a>
          <a href="/about" className="text-xl font-bold text-white">
            About
          </a>
          <a href="/contact" className="text-xl font-bold text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

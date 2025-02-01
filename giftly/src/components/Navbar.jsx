import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-10 py-4 text-black">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 w-auto" />
      </div>

      {/*Navigation Links */}
      <ul className="hidden lg:flex space-x-6">
        <li>
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Shop
          </a>
        </li>

        {/* Categories*/}
        <li className="relative group">
          <button
            className="hover:text-gray-400"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Categories
          </button>

          {/*Dropdown Menu */}
          {dropdownOpen && (
            <ul
              className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Home & Kitchen
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Sports
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href="#" className="hover:text-gray-400">
            Deals
          </a>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        {/* Shopping Cart */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        {/* Profile Icon */}
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer">
          <span className="text-sm text-white font-semibold">D</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

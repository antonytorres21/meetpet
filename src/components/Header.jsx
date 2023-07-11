import React, { useState } from "react";
import logo1 from "../assets/MeetYourPeetWhite.png";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-blue-light w-full fixed z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="flex items-center">
              <div className="md:block md:items-end items-center hidden justify-center md:justify-end">
                <div className="ml-10 flex items-center space-x-4">
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/dogs"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Meet your Dog
                  </Link>
                  <div className="flex flex-col items-center">
                    <img
                      className="h-12 md:mr-3"
                      src={logo1}
                      alt="Meet Your Pet"
                    />
                  </div>
                  <Link
                    to="/cats"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Meet your Cat
                  </Link>
                  <Link
                    to="/about"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About this
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center mr-auto md:hidden">
              <img className="h-12 md:mr-3" src={logo1} alt="Meet Your Pet" />
            </div>
            <div className="flex md:hidden items-center justify-end">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-end justify-end p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/dogs"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Meet your Dog
              </Link>
              <Link
                to="/cats"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Meet your Cat
              </Link>
              <Link
                to="/about"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About this
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
export default Header;

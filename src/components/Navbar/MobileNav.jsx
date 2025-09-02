import React from 'react';
import { Link } from 'react-router-dom';
import TechIcon from '../TechIcon';
import { Button } from '../ui/button';

const MobileNavbar = ({ isScrolled, isOpen, toggleMenu, navigate }) => {
  const handleLinkClick = () => {
    toggleMenu(); 
  };

  const handleButtonClick = (path) => {
    navigate(path);
    toggleMenu(); 
  };

  return (
    <div className="md:hidden relative">
      <div className="flex items-center justify-between h-16 px-4">

        <div className="flex-shrink-0">
          <Link
            to="/"
             className={`text-xl font-bold transition-all duration-300 ${isScrolled ? 'text-black' : 'text-white'
  }`}
          >
            InfluencerHub
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className={`p-2 rounded-md transition-colors duration-200 ${
            isScrolled
              ? 'text-gray-700 hover:text-secondary focus:ring-offset-white'
              : 'text-white hover:text-secondary focus:ring-offset-gray-900'
          }`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <TechIcon name="x" /> : <TechIcon name="menu" />}
        </button>
      </div>

      <div
        className={`absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-50 transition-all duration-200 transform ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block text-gray-700 font-medium hover:text-secondary transition-colors duration-200 py-2"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/influencers"
                className="block text-gray-700 font-medium hover:text-secondary transition-colors duration-200 py-2"
                onClick={handleLinkClick}
              >
                Influencers
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block text-gray-700 font-medium hover:text-secondary transition-colors duration-200 py-2"
                onClick={handleLinkClick}
              >
                Login
              </Link>
            </li>
          </ul>

          <div className="pt-4 ">
            <Button
              size="sm"
              variant="secondary"
              className="w-full"
              onClick={() => handleButtonClick('/signup')}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
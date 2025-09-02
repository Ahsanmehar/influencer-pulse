import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const DesktopNavbar = ({ isScrolled, navigate }) => {
  return (
    <div className="hidden md:flex items-center justify-between h-19">
      <div className="flex-shrink-0">
        <Link 
          to="/" 
          className={`text-2xl font-bold bg-none transition-all duration-300 ${isScrolled ? 'text-black' : 'text-white'
  }`}
        >
          InfluencerHub
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        <ul className="flex items-center space-x-6">
          <li>
            <Link 
              to="/" 
              className={`text-md font-medium hover:text-secondary transition-colors duration-200 ${
                isScrolled ? 'text-gray' : 'text-white'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/influencers" 
              className={`text-md font-medium hover:text-secondary transition-colors duration-200 ${
                isScrolled ? 'text-gray' : 'text-white'
              }`}
            >
              Influencers
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className={`text-md font-medium hover:text-secondary transition-colors duration-200 ${
                isScrolled ? 'text-gray' : 'text-white'
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
        
        <Button 
          size="sm" 
          variant="secondary"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
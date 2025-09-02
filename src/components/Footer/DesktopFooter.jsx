import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import TechIcon from '../TechIcon';


const FooterDesktop = () => {
  
  return (
    <footer className="bg-gray text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-semibold text-white">Influencer Hub</span>
            </div>
            <p className="text-text text-sm leading-relaxed mb-6">
              Connecting businesses with top social media influencers in Pakistan. Elevate your brand with authentic partnerships.
            </p>

            <div className="flex items-center gap-4">
              <Link to="/facebook" className="text-text hover:text-secondary transition-colors duration-300">
                <TechIcon name="facebook" className="w-5 h-5" />
              </Link>
              <Link to="/twitter" className="text-text hover:text-secondary transition-colors duration-300">
                <TechIcon name="twitter" className="w-5 h-5" />
              </Link>
              <Link to="/instagram" className="text-text hover:text-secondary transition-colors duration-300">
                <TechIcon name="instagram" className="w-5 h-5" />
              </Link>
              <Link to="/linkedin" className="text-text hover:text-secondary transition-colors duration-300">
                <TechIcon name="linkedin" className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/influencers" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Find Influencers
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">For Influencers</h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link to="/login" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Join as Influencer
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <TechIcon name="map-pin" className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-text text-sm">123 Main Street, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <TechIcon name="mail" className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-text text-sm">contact@influencerhub.pk</span>
              </div>
              <div className="flex items-center gap-3">
                <TechIcon name="phone" className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-text text-sm">+92 300 1234567</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-base mb-4">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-2 py-2 bg-black/30 border border-text rounded-lg text-white placeholder-text text-sm focus:outline-none focus:border-secondary transition-colors duration-300"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-text text-sm">
              © 2025 Influencer Hub. All rights reserved.
            </p>
            <nav>
              <ul className="flex items-center gap-6">
                <li>
                  <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-sm">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
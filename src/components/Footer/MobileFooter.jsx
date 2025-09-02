import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import TechIcon from '../TechIcon';


const FooterMobile = () => {
  return (
    <footer className="bg-gray text-white py-20">
      <div className="container">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-white">Influencer Hub</span>
          </div>

          <p className="text-text text-sm leading-relaxed">
            Connecting businesses with top social media influencers in Pakistan. Elevate your brand with authentic partnerships.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <Link to="/facebook" className="text-text hover:text-secondary transition-colors duration-300">
              <TechIcon name="facebook" className="w-6 h-6" />
            </Link>
            <Link to="/twitter" className="text-text hover:text-secondary transition-colors duration-300">
              <TechIcon name="twitter" className="w-6 h-6" />
            </Link>
            <Link to="/instagram" className="text-text hover:text-secondary transition-colors duration-300">
              <TechIcon name="instagram" className="w-6 h-6" />
            </Link>
            <Link to="/linkedin" className="text-text hover:text-secondary transition-colors duration-300">
              <TechIcon name="linkedin" className="w-6 h-6" />
            </Link>
          </div>


          <h3 className="text-white font-semibold text-xl mt-8">Quick Links</h3>
          <nav>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/influencers" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Find Influencers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>


          <h3 className="text-white font-semibold text-xl mt-8">For Influencers</h3>

          <nav>
            <ul className="space-y-3">
              <li>
                <Link to="/login" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Join as Influencer
                </Link>
              </li>
              <li>
                <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <h3 className="text-white font-semibold text-xl mt-8">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <TechIcon name="map-pin" className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-text text-base">123 Main Street, Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <TechIcon name="mail" className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-text text-base">contact@influencerhub.pk</span>
            </div>
            <div className="flex items-center gap-3">
              <TechIcon name="phone" className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-text text-base">+92 300 1234567</span>
            </div>
          </div>


          <div className="mt-8">
            <h4 className="text-white font-medium text-lg mb-4">Subscribe to our newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-black/30 border border-text rounded-lg text-white placeholder-text text-base focus:outline-none focus:border-secondary transition-colors duration-300"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>


          <nav className="mt-8">
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="text-text hover:text-secondary transition-colors duration-300 text-base">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </nav>

          <div className="pt-6 border-t border-gray-800 mt-8">
            <p className="text-text text-base">
              © 2025 Influencer Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
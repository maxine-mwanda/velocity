import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Velocity
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </Link>
          <Link to="/team" className="text-gray-700 hover:text-blue-600 font-medium">
            Team
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
          <Button>Apply Now</Button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Services
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Team
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Contact
            </Link>
            <Button fullWidth>Apply Now</Button>
          </nav>
        </div>}
    </header>;
};
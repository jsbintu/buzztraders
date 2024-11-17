import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-amber-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">BuzzTraders</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link to="/courses" className="text-white hover:text-amber-200 px-3 py-2">
              Courses
            </Link>
            <Link to="/login" className="text-white hover:text-amber-200 px-3 py-2">
              Login
            </Link>
            <Link
              to="/register"
              className="ml-4 px-4 py-2 rounded-md bg-white text-amber-600 hover:bg-amber-50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/courses"
              className="block px-3 py-2 text-white hover:bg-amber-600 rounded-md"
            >
              Courses
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-white hover:bg-amber-600 rounded-md"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 text-white hover:bg-amber-600 rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
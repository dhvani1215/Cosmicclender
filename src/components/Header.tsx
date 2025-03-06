import { useState, useEffect } from 'react';
import { Calendar } from './icons';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-space-950/80 backdrop-blur-lg shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div onClick={navigateToHome} className="flex items-center space-x-2 cursor-pointer">
            <Calendar className="h-6 w-6 text-celestial-blue" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold tracking-tight">
                <span className="text-white">Cosmic</span>
                <span className="text-celestial-blue">Calendar</span>
              </h1>
              <p className="text-xs text-space-400">Astronomy Events</p>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#events" className="text-space-200 hover:text-white transition-colors text-sm font-medium">
            Events
          </a>
          <a href="#about" className="text-space-200 hover:text-white transition-colors text-sm font-medium">
            About
          </a>
          <Link to="/contact" className="text-space-200 hover:text-white transition-colors text-sm font-medium">
            Contact
          </Link>
          <div className="relative group">
            <button className="text-space-200 hover:text-white transition-colors text-sm font-medium flex items-center">
              Legal
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {/* <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-space-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1 rounded-md bg-space-900 shadow-xs">
                <Link to="/privacy" className="block px-4 py-2 text-sm text-space-200 hover:bg-space-800 hover:text-white">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block px-4 py-2 text-sm text-space-200 hover:bg-space-800 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div> */}
          </div>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/signup" className="px-4 py-2 rounded-full bg-space-800 hover:bg-space-700 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-celestial-blue/10">
            Sign Up for Alerts
          </Link>
          
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-900/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#events" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-800">
              Events
            </a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-800">
              About
            </a>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-800">
              Contact
            </Link>
            <Link to="/privacy" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-800">
              Privacy Policy
            </Link>
            <Link to="/terms" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-space-800">
              Terms of Service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WavyBackground } from './ui/wavy-background';
import Loading from './loading/loading';

const MainScreen = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } 
    else {
      window.addEventListener('load', () => setLoading(false));
      return () => window.removeEventListener('load', () => setLoading(false));
    }
  }, []);

  return (
    <> 
    
    {loading ? (
      <Loading /> ) : 
    (
    <div className="absolute w-[100vw] overflow-hidden">
      {/* Navbar */}
      <WavyBackground>
      <nav className="fixed top-0 left-0 right-0 bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to='/'><img src="./logo.svg" alt="Harshpreet Singh" className="h-8 w-8" /></Link>
            </div>

            {/* Desktop Menu */}
            <div className="font-SpaceMono hidden md:block z-50">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to='/teckStack' className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-base font-medium">Teck Stack</Link>
                <Link to="/projects" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                <Link to="/about" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-base font-medium">About</Link>
                <Link to="/contact" className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
              </div>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden font-SpaceMono z-10">
              <button
                onClick={handleMenuToggle}
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (shows when hamburger menu is open) */}
        {isMenuOpen && (
          <div className="md:hidden z-50font-SpaceMono">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to='/teckStack' className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Teck Stack</Link>
              <Link to="/projects" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
              <Link to="/about" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link to="/contact" className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>
      <main className="pt-16 flex justify-center h-[100vh] font-SpaceMono z-0 text-white">
        {children}
      </main>
      </WavyBackground>
    </div>
    )};
    </>
  );
};

export default MainScreen;

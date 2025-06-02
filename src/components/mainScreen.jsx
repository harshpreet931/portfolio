import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WavyBackground } from './ui/wavy-background';
import Loading from './loading/loading';

const MainScreen = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabLeft, setActiveTabLeft] = useState(0);
  const tabsRef = useRef(new Map());

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } 
    else {
      window.addEventListener('load', () => setLoading(false));
      return () => window.removeEventListener('load', () => setLoading(false));
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTabWidth(0);
      setActiveTabLeft(0);
      return;
    }

    const activeTab = tabsRef.current.get(location.pathname);
    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab;
      setActiveTabWidth(offsetWidth);
      setActiveTabLeft(offsetLeft);
    }
  }, [location.pathname]);

  const isActiveLink = (path) => {
    if (location.pathname === '/') return false;
    return location.pathname === path;
  };

  const getLinkClass = (path) => {
    const baseClasses = "px-3 py-2 rounded-md text-base font-medium relative inline-block";
    return `${baseClasses} ${
      isActiveLink(path)
        ? "text-white"
        : "text-white/80 hover:text-white transition-colors duration-300"
    }`;
  };

  const navLinks = [
    { path: '/techstack', label: 'Tech Stack' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const showIndicator = location.pathname !== '/';

  return (
    <> 
    {loading ? (
      <Loading />
    ) : (
    <div className="absolute w-[100vw] overflow-hidden">
      <WavyBackground>
      <nav className="fixed top-0 left-0 right-0 bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to='/'><img src="./logo.svg" alt="Harshpreet Singh" className="h-8 w-8" /></Link>
            </div>

            {/* Desktop Menu */}
            <div className="font-SpaceMono hidden md:block z-50">
              <div className="ml-10 flex items-baseline space-x-4 relative">
                {showIndicator && (
                  <div
                    className="absolute bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out rounded-full"
                    style={{
                      width: `${activeTabWidth}px`,
                      left: `${activeTabLeft}px`,
                      transform: 'translateY(8px)'
                    }}
                  />
                )}

                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    ref={el => tabsRef.current.set(path, el)}
                    className={getLinkClass(path)}
                  >
                    {label}
                  </Link>
                ))}
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
          <div className="md:hidden z-50 font-SpaceMono">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={handleMenuClick}
                  className={`${getLinkClass(path)} block w-full ${
                    isActiveLink(path) ? 'bg-white/10' : ''
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="pt-16 flex justify-center h-[100vh] font-SpaceMono z-0 text-white">
        {children}
      </main>
      </WavyBackground>
    </div>
    )}
    </>
  );
};

export default MainScreen;
import React, { useEffect, useRef } from 'react';
import { FaHome, FaFileAlt, FaBlog, FaEnvelope } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const App = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add('sticky-nav', 'visible');
      } else {
        navbar.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className='flex justify-between '>
          <div className=''>Left</div>
          <div>Right</div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap pt-60">
          {/* Left Column */}
          <div className="w-full md:w-3/12 p-4 relative md:sticky md:top-0 md:self-start">
            <div className="flex flex-col items-center">
              <img src="path-to-image.jpg" alt="Profile" className="w-32 h-32 rounded-full" />
              <div className="flex mt-4 space-x-4">
                {/* Replace with actual social icons */}
                <a href="#" className="text-blue-500">FB</a>
                <a href="#" className="text-blue-500">TW</a>
                <a href="#" className="text-blue-500">LN</a>
              </div>
              <div className="mt-4 text-center">
                <p>Location: City, Country</p>
                <p>Email: email@example.com</p>
              </div>
            </div>
            <div ref={navbarRef} className="block md:hidden w-full p-4 mt-4">
              <div className="flex justify-around">
                <div className="group relative">
                  <FaHome className="text-2xl" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
                </div>
                <div className="group relative">
                  <FaFileAlt className="text-2xl" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
                </div>
                <div className="group relative">
                  <FaBlog className="text-2xl" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity">Blog</span>
                </div>
                <div className="group relative">
                  <FaEnvelope className="text-2xl" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="w-full md:w-8/12 p-4">
            <Outlet />
          </div>

          {/* Right Column */}
          <div className="hidden md:flex md:w-1/12 p-4 md:flex-col md:items-center md:space-y-4 md:sticky md:top-0 md:self-start">
            <div className="group relative">
              <FaHome className="text-2xl" />
              <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
            </div>
            <div className="group relative">
              <FaFileAlt className="text-2xl" />
              <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
            </div>
            <div className="group relative">
              <FaBlog className="text-2xl" />
              <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity">Blog</span>
            </div>
            <div className="group relative">
              <FaEnvelope className="text-2xl" />
              <span className="absolute left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

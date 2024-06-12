import React, { useEffect, useRef, useState } from 'react';
import { FaHome, FaFileAlt, FaBlog, FaEnvelope } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import ThemeBtn from './components/ThemeBtn';
import { ThemeProvider } from './context/theme'

const App = () => {
  const navbarRef = useRef(null);
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
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

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="w-full dark:bg-darktheme bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png')] bg-cover bg-center bg-repeat-y" >
        <div className="max-w-screen-xl mx-auto">
          {/* top  */}
          <div className='flex justify-between '>
            <div className='text-5xl font-heading mb-4 text-primary dark:text-white'>Saran</div>
            <div>
              <ThemeBtn />
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pt-60">
            {/* Left Column */}
            <div className="w-full md:w-3/12 p-4 relative md:sticky md:top-0 md:self-start">
              <div className="flex flex-col items-center">
                <img src="path-to-image.jpg" alt="Profile" className="w-32 h-32 rounded-full" />
                <h2 className='text-4xl font-bold mb-4 text-secondary dark:text-white'>Saran Zafar</h2>
                <div className="flex mt-4 space-x-4">
                  {/* Replace with actual social icons */}
                  <a href="#" className="text-primary">FB</a>
                  <a href="#" className="text-primary">TW</a>
                  <a href="#" className="text-primary">LN</a>
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
    </ThemeProvider>
  );
};

export default App;

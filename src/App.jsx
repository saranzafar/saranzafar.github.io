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
        <div className="max-w-screen-xl mx-auto backdrop-blur-xl">
          {/* top  */}
          <div className='flex justify-between pt-6 pb-2 border-b-2 '>
            <div className='text-5xl font-heading mb-4 text-primary dark:text-white'>Saran</div>
            <div>
              <ThemeBtn />
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap pt-52 gap-x-4">
            {/* Left Column */}
            <div className="w-full md:w-3/12 p-4 relative md:sticky md:top-6 md:self-start border rounded-3xl">
              <div className="flex flex-col items-center">
                <img src="/img/saranzafar.png" alt="Profile" className="rounded-3xl mb-4" />
                <h2 className='text-4xl font-bold mb-4 text-secondary dark:text-white'>Saran Zafar</h2>
                <small className='border rounded-lg bg-gray-200 p-2'>Web Developer</small>
                <div className="flex mt-4 space-x-4">
                  
                  <a href="#" className="text-blue-600 hover:bg-primary hover:text-white p-2 rounded transition dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </a>

                  <a href="#" className="text-blue-700 hover:bg-primary hover:text-white p-2 rounded transition dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>
                  <a href="#" className="text-secondary hover:bg-primary hover:text-white p-2 rounded transition dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </a>
                  <a href="#" className="text-pink-700 hover:bg-primary hover:text-white p-2 rounded transition dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                </div>

                <div className="mb-4 text-center border mt-4 p-4 rounded-lg text-secondary">
                  <p className='text-red-700 pb-4 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-primary dark:text-white duration-300'>
                    <span className='flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      <span className='pl-3 text-secondary'>saranzafar736@gmail.com</span>
                    </span>
                  </p>
                  <p className='pb-4 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-primary dark:text-white duration-300'>
                    <span className='flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      <span className='pl-2'>+92311-9777995</span>
                    </span>
                  </p>
                  <p className='pb-4 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-primary dark:text-white duration-300'>
                    <span className='flex'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                      <span className='pl-2'>+92311-9777995</span>
                    </span>
                  </p>
                </div>

                <div>
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-secondary hover:border-primary hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-primary dark:hover:border-primary">Download CV</button>
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
            <div className="w-full md:w-8/12 p-4 border-2">
              <Outlet />
            </div>

            {/* Right Column */}
            <div className="hidden md:flex md:w-1/12 p-4 md:flex-col md:items-center md:space-y-4 md:sticky md:top-6 md:self-start border-2">
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

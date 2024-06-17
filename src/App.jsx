import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeBtn from './components/ThemeBtn';
import { ThemeProvider } from './context/theme'
import { Footer } from "./pages/index"
import { Link } from 'react-router-dom';
import { Navbar } from './components';

const App = () => {
  const [themeMode, setThemeMode] = useState('light')
  const [rotation, setRotation] = useState("")
  const [customClassName, setCustomClassName] = useState("hidden")

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  const handleSmNavClick = () => {
    if (rotation == "rotate-90") {
      setRotation("")
      setCustomClassName("hidden")
    }
    else {
      setCustomClassName("")
      setRotation("rotate-90")
    }
  }

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="w-full dark:bg-darktheme bg-[url('/img/bg.png')] bg-cover bg-center bg-repeat-y backdrop-blur-xl" >
        <div className="max-w-screen-xl mx-auto ">
          {/* top  */}
          <div className='flex justify-between pt-6 pb-2 border-b-2 dark:border-b-darkText w-auto px-4 items-center'>
            <div className='text-5xl font-heading text-primary animate-pulse dark:text-primary'>Saran</div>
            <div>
              <ThemeBtn />
            </div>
          </div>
          {/* small screen navbar  */}
          <div className=' lg:hidden md:hidden sm:flex sm:flex-col sticky top-20 pl-2 right-0 z-30 backdrop-blur-lg w-16 h-0 transition-all duration-600'>
            <div className='flex justify-center items-center mb-2 text-gray-700 bg-gray-400 bg-opacity-50 rounded-full h-10 dark:text-darkHeading dark:bg-darkSubBg dark:bg-opacity-60 animate-pulse' onClick={handleSmNavClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-menu ${rotation} transform duration-200`}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </div>
            <Navbar className={customClassName} />
          </div>

          {/* bottom  */}
          <div className="flex flex-wrap md:flex-nowrap pt-20 gap-x-4 md:gap-x-2">
            {/* Left Column */}
            <div className="w-full lg:w-3/12 md:w-4/12 p-4 relative md:sticky md:top-6 md:self-start rounded-lg bg-gray-50 dark:bg-darkBg ">
              <div className="flex flex-col items-center mb-10">
                <img src="/img/saranzafar.png" alt="Profile" className="rounded-lg mb-4" />
                <h2 className='text-4xl font-bold mb-4 text-secondary dark:text-darkHeading'>Saran Zafar</h2>
                <small className='rounded-lg bg-gray-100 p-2 mb-2 dark:bg-darkSubBg dark:text-darkText'>Web Developer</small>
                <div className="flex mt-4 mb-2 flex-wrap md:gap-4 justify-center">
                  {/* icons  */}
                  <Link to="https://web.facebook.com/saran.ahmed.794" target='_blank' className="text-blue-600 hover:bg-primary hover:text-white p-2 rounded transition dark:text-darkText bg-gray-100 shadow dark:bg-darkSubBg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </Link>

                  <Link to="https://www.linkedin.com/in/saran-zafar-7b9a581a8" target='_blank' className="text-blue-700 hover:bg-primary hover:text-white p-2 rounded transition dark:text-darkText bg-gray-100 shadow dark:bg-darkSubBg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </Link>
                  <Link to="https://github.com/saranzafar" target='_blank' className="text-secondary hover:bg-primary hover:text-white p-2 rounded transition dark:text-darkText bg-gray-100 shadow dark:bg-darkSubBg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                  </Link>
                  <Link to="https://www.instagram.com/mr_saran05" target='_blank' className="text-pink-700 hover:bg-primary hover:text-white p-2 rounded transition dark:text-darkText bg-gray-100 shadow dark:bg-darkSubBg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </Link>
                </div>

                {/* icons details  */}
                <div className="bg-gray-100 mb-4 mt-4 p-4 rounded-lg text-secondary dark:text-darkText dark:bg-darkSubBg w-full">
                  <p className="text-red-700 dark:text-darkText pb-2 mb-3 border-b dark:border-b-darkText transition ease-in-out ">
                    <span className="flex hover:-translate-y-1 hover:scale-105 duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span className="pl-3 text-secondary dark:text-darkText">saranzafar736 @gmail.com</span>
                    </span>
                  </p>
                  <p className="text-blue-900 dark:text-darkText pb-2 mb-3 border-b dark:border-b-darkText transition ease-in-out">
                    <span className="flex hover:-translate-y-1 hover:scale-105 duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="pl-3 text-secondary dark:text-darkText">+92311-9777995</span>
                    </span>
                  </p>
                  <p className="text-green-700 dark:text-darkText transition ease-in-out">
                    <span className="flex hover:-translate-y-1 hover:scale-105 duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="pl-3 text-secondary dark:text-darkText">Kashmir</span>
                    </span>
                  </p>
                </div>


                <div>
                  <button type="button" className="border dark:border-primary text-primary border-primary  py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg hover:bg-primary hover:border-primary hover:text-white dark:text-primary transition duration-300">Download CV</button>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="w-full md:w-8/12 p-6 bg-transparent rounded-lg">
              <Outlet />
              <Footer />
            </div>

            {/* Right Column */}
            <div className="md:flex md:w-1/12 p-4 md:flex-col md:items-center md:space-y-4 md:sticky md:top-6 md:self-start rounded-xl text-secondary hidden">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

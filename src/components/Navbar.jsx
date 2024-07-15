import { NavLink } from 'react-router-dom';

function Navbar({ className }) {
    return (
        <div className={`flex flex-col gap-3 ${className} ease-in-out`} id='myCustomNav'>
            <div className="group relative h-16 w-16">
                <NavLink to="/" end>
                    {({ isActive }) => (
                        <div className={`text-secondary group flex flex-col items-center p-2 hover:bg-primary hover:text-white dark:hover:bg-darkBg hover:shadow-lg hover:-translate-y-1 ease-in-out transition duration-200 rounded-md shadow dark:text-darkHeading
                            ${isActive ? "bg-primary text-white mb-20 dark:bg-primary hover:bg-primary" : "bg-gray-100 dark:bg-darkSubBg"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            <div className='font-semibold text-sm'>Home</div>
                        </div>
                    )}
                </NavLink>
            </div>

            <div className="group relative h-16 w-16">
                <NavLink to="/resume">
                    {({ isActive }) => (
                        <div className={`text-secondary group flex flex-col items-center p-2 hover:bg-primary hover:text-white dark:hover:bg-darkBg hover:shadow-lg hover:-translate-y-1 ease-in-out transition duration-200 rounded-md shadow dark:text-darkHeading
                            ${isActive ? "bg-primary text-white mb-20 dark:bg-primary" : "bg-gray-100 dark:bg-darkSubBg"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notepad-text"><path d="M8 2v4" /><path d="M12 2v4" /><path d="M16 2v4" /><rect width="16" height="18" x="4" y="4" rx="2" /><path d="M8 10h6" /><path d="M8 14h8" /><path d="M8 18h5" /></svg>
                            <div className='font-semibold text-sm'>Resume</div>
                        </div>
                    )}
                </NavLink>
            </div>

            <div className="group relative h-16 w-16">
                <NavLink to="/works">
                    {({ isActive }) => (
                        <div className={`text-secondary group flex flex-col items-center p-2 hover:bg-primary hover:text-white dark:hover:bg-darkBg hover:shadow-lg hover:-translate-y-1 ease-in-out transition duration-200 rounded-md shadow dark:text-darkHeading
                            ${isActive ? "bg-primary text-white mb-20 dark:bg-primary" : "bg-gray-100 dark:bg-darkSubBg"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /></svg>
                            <div className='font-semibold text-sm'>Work</div>
                        </div>
                    )}
                </NavLink>
            </div>

            <div className="group relative h-16 w-16">
                <NavLink to="/blogs">
                    {({ isActive }) => (
                        <div className={`text-secondary group flex flex-col items-center p-2 hover:bg-primary hover:text-white dark:hover:bg-darkBg hover:shadow-lg hover:-translate-y-1 ease-in-out transition duration-200 rounded-md shadow dark:text-darkHeading
                            ${isActive ? "bg-primary text-white mb-20 dark:bg-primary" : "bg-gray-100 dark:bg-darkSubBg"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
                            <div className='font-semibold text-sm'>Blog</div>
                        </div>
                    )}
                </NavLink>
            </div>

            <div className="group relative h-16 w-16">
                <NavLink to="/contact">
                    {({ isActive }) => (
                        <div className={`text-secondary group flex flex-col items-center p-2 hover:bg-primary hover:text-white dark:hover:bg-darkBg hover:shadow-lg hover:-translate-y-1 ease-in-out transition duration-200 rounded-md shadow  dark:text-darkHeading
                            ${isActive ? "bg-primary text-white mb-20 dark:bg-primary" : "bg-gray-100 dark:bg-darkSubBg "}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-contact"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" /><rect width="18" height="18" x="3" y="4" rx="2" /><circle cx="12" cy="10" r="2" /><line x1="8" x2="8" y1="2" y2="4" /><line x1="16" x2="16" y1="2" y2="4" /></svg>
                            <div className='font-semibold text-sm'>Contact</div>
                        </div>
                    )}
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;

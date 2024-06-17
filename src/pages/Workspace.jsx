import React, { useState } from 'react';
import { HrzLine } from "../components/index"
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        category: 'MERN-Stack',
        technologies: "Mongodb, React, Express, Nodejs, Other Frameworks",
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-7Ew0lMWvianOts7rM1OKXInyjoYiortPQ&s',
        name: 'Survey Web-App',
        redirectTo: "#"
    },
    {
        id: 2,
        category: 'wordpress',
        technologies: "Elementor Pro, Premium Theme",
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3yTZ7sR3kcK419FAHP6-g8AuJDaZeMPVnA&s',
        name: 'A Software Company website',
        redirectTo: "https://xactmind.com/"
    },
    {
        id: 3,
        category: 'MERN-Stack',
        technologies: "React, HookForm, AppWrite",
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeSESsLNv3EDh9i9jZD5ff0DH8f2Fs8Wxc9Q&s',
        name: '10+ mini-project',
        redirectTo: "https://github.com/saranzafar/Eating-React/tree/main"
    },
    {
        id: 4,
        category: 'other',
        technologies: "Bootstrap, Js",
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0yyDRF5ZQvPb0Uu1QEQNff7cI3SjAP2LcQ&s',
        name: 'Business website design',
        redirectTo: "https://saranzafar.github.io/Business-website-frontend/"
    },
    {
        id: 5,
        category: 'MERN-Stack',
        technologies: "Nodejs, APIs, Express",
        imgSrc: 'https://www.logo-designer.co/storage/2017/08/2017-youtube-logo-design-2.png',
        name: 'VideoTube',
        redirectTo: "https://github.com/saranzafar/Backend-Boy/tree/main/VideoTube"
    },
    {
        id: 6,
        category: 'wordpress',
        technologies: "Advance Plugins, Premium Theme",
        imgSrc: 'https://img.freepik.com/free-vector/real-estate-business-landing-page-template_23-2149874298.jpg',
        name: 'A Real-Estate website',
        redirectTo: "https://charchinnar.com/"
    },
    {
        id: 7,
        category: 'other',
        technologies: "HTML, CSS, Js",
        imgSrc: 'https://www.hostgator.com/blog/wp-content/uploads/2018/10/Best-Website-Builder-for-Blogging.png',
        name: 'Blogging Website Frontend',
        redirectTo: "https://saranzafar.github.io/Blogging-website-frontend/"
    },
    {
        id: 8,
        category: 'wordpress',
        technologies: "Elementor Pro, Premium Theme",
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBdQViXDMS-lhkK0FTCClgFwi55VKPOam3Q&s',
        name: 'A Building Maintenance Company website ',
        redirectTo: "https://turath.me/"
    },
    {
        id: 9,
        category: 'MERN-Stack',
        technologies: "Nodejs, Web-sockets, Express",
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7DKX0SgKMRGxCgNa-7yCQp4cKKP0BNhPcQ&s',
        name: 'ChatApp',
        redirectTo: "https://github.com/saranzafar/chatApp"
    },
];

const Workspace = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className='dark:text-darkHeading'>
            <h2 className="text-3xl font-bold">Works</h2>
            <HrzLine />

            <p className="mb-4 dark:text-darkText">Discover my portfolio featuring diverse projects that exemplify my skills in web development and software engineering. From MERN stack applications to WordPress customization and web scraping solutions, each project showcases my commitment to delivering innovative solutions and exceptional quality.</p>
            <div className="min-h-screen p-4">

                <nav className="flex justify-end space-x-4 mb-6 ">
                    <button onClick={() => setSelectedCategory('all')} className={`py-2 px-4 ${selectedCategory === 'all' ? 'text-primary dark:text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary dark:text-darkHeading `}>
                        All
                    </button>
                    <button onClick={() => setSelectedCategory('MERN-Stack')} className={`py-2 px-4 ${selectedCategory === 'website' ? 'text-primary dark:text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary dark:text-darkHeading `}>
                        MERN-Stack
                    </button>
                    <button onClick={() => setSelectedCategory('wordpress')} className={`py-2 px-4 ${selectedCategory === 'wordpress' ? 'text-primary dark:text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary dark:text-darkHeading `}>
                        Wordpress
                    </button>
                    <button onClick={() => setSelectedCategory('other')} className={`py-2 px-4 ${selectedCategory === 'other' ? 'text-primary dark:text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary dark:text-darkHeading `}>
                        Other
                    </button>
                </nav>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="w-full h-80 bg-white dark:bg-darkSubBg rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ease-in-out translate-y-4"
                            style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: `${project.id * 0.1}s` }}
                        >
                            <Link to={project.redirectTo} target='_blank'>
                                <img src={project.imgSrc} alt={`Project ${project.id}`} className="w-full h-2/3 object-cover transition-transform duration-300 transform hover:scale-105 dark:opacity-75 opacity-85 hover:opacity-100" />
                            </Link>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-darkText">{project.technologies || "html css js"}</p>
                            </div>

                        </div>
                    ))}
                </div>
                <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
            </div>
        </div>
    );
};

export default Workspace;

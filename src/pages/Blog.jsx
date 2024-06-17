import React, { useState } from 'react';
import { HrzLine } from "../components/index"

const projects = [
    { id: 1, category: 'Tech', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s', name: 'Minimum specification of laptop for coding' },
    { id: 2, category: 'Coding', imgSrc: 'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg', name: 'MERN Stact Roadmap' },
    { id: 3, category: 'Tech', imgSrc: 'https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600', name: 'Most Growing industury' },
    { id: 4, category: 'other', imgSrc: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', name: 'Best Youtube channel for learning coding' },
];

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className='dark:text-darkHeading'>
            <h2 className="text-3xl font-bold">Works</h2>
            <HrzLine />

            <p className="mb-4 dark:text-darkText">Dive into my blog where I share insights, tutorials, and reflections on topics ranging from web development and software engineering to digital marketing strategies and the latest trends in technology. Explore practical guides, industry insights, and thoughtful analyses that aim to inspire and educate fellow enthusiasts and professionals in the digital realm.</p>
            <div className="min-h-screen p-4">

                <nav className="flex justify-end space-x-4 mb-6 ">
                    <button onClick={() => setSelectedCategory('all')} className={`py-2 px-4 ${selectedCategory === 'all' ? 'text-primary dark:text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary dark:text-darkHeading `}>
                        All
                    </button>
                    <button onClick={() => setSelectedCategory('Tech')} className={`py-2 px-4 ${selectedCategory === 'Tech' ? 'text-primary dark:text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary dark:text-darkHeading `}>
                        Tech
                    </button>
                    <button onClick={() => setSelectedCategory('Coding')} className={`py-2 px-4 ${selectedCategory === 'Coding' ? 'text-primary dark:text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary dark:text-darkHeading `}>
                        Coding
                    </button>
                    <button onClick={() => setSelectedCategory('other')} className={`py-2 px-4 ${selectedCategory === 'other' ? 'text-primary dark:text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary dark:text-darkHeading `}>
                        other
                    </button>
                </nav>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="w-full h-80 bg-white dark:bg-darkSubBg rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ease-in-out opacity-0 translate-y-4"
                            style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: `${project.id * 0.1}s` }}
                        >
                            <img src={project.imgSrc} alt={`Project ${project.id}`} className="w-full h-2/3 object-cover transition-transform duration-300 transform hover:scale-105 dark:opacity-75 hover:opacity-100" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-darkText">Comming Soon...</p>
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

export default Blog;

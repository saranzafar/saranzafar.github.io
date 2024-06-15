import React, { useState } from 'react';
import { HrzLine } from "../components/index"

const projects = [
    { id: 1, category: 'website', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s', name: 'Project 1' },
    { id: 2, category: 'wordpress', imgSrc: 'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg', name: 'Project 2' },
    { id: 3, category: 'website', imgSrc: 'https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600', name: 'Project 3' },
    { id: 4, category: 'other', imgSrc: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', name: 'Project 4' },
    { id: 5, category: 'website', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s', name: 'Project 5' },
    { id: 6, category: 'wordpress', imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg', name: 'Project 6' },
    { id: 7, category: 'other', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s', name: 'Project 7' },
    { id: 8, category: 'website', imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', name: 'Project 8' },
];

const Workspace = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div>
            <span className="text-3xl font-bold mb-4">Resume</span>
            <HrzLine />
            <div className="min-h-screen p-4">

                <nav className="flex justify-end space-x-4 mb-6">
                    <button onClick={() => setSelectedCategory('all')} className={`py-2 px-4 ${selectedCategory === 'all' ? 'text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary`}>
                        All
                    </button>
                    <button onClick={() => setSelectedCategory('website')} className={`py-2 px-4 ${selectedCategory === 'website' ? 'text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary`}>
                        Website
                    </button>
                    <button onClick={() => setSelectedCategory('wordpress')} className={`py-2 px-4 ${selectedCategory === 'wordpress' ? 'text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary`}>
                        Wordpress
                    </button>
                    <button onClick={() => setSelectedCategory('other')} className={`py-2 px-4 ${selectedCategory === 'other' ? 'text-primary' : 'text-gray-700'} transition duration-300 hover:text-primary`}>
                        Other
                    </button>
                </nav>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="w-full h-80 bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ease-in-out opacity-0 translate-y-4"
                            style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: `${project.id * 0.1}s` }}
                        >
                            <img src={project.imgSrc} alt={`Project ${project.id}`} className="w-full h-2/3 object-cover transition-transform duration-300 transform hover:scale-105" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                                <p className="text-sm text-gray-600">React, Tailwind and Node</p>
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

import React from 'react';

const Blog = () => {
    return (
        <div className="relative">
            {/* Icon */}
            <div className="group flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600 cursor-pointer group-hover:text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                    />
                </svg>
                {/* Tooltip */}
                <div className="absolute -left-20 -top-2 mt-2 bg-gray-800 text-white text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none">
                    Tooltip Text
                </div>
            </div>
        </div>
    );
};

export default Blog;

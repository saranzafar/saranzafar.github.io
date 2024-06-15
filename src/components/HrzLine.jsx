import React from 'react'

function HrzLine({ className = "" }) {
    return (
        <hr className={` text-primary md:w-56 sm:w-2 h-1 ml-32 -mt-2 mb-10 bg-primary border rounded dark:bg-gray-700 ${className}`} />
    )
}

export default HrzLine
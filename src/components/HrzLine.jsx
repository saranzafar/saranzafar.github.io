import React from 'react'

function HrzLine({ className = "" }) {
    return (
        <hr className={`md:w-56 sm:w-2 h-1 ml-32 -mt-2 mb-10 bg-primary rounded dark:text-transparent dark:bg-darkHeading ${className}`} />
    )
}

export default HrzLine
import { Target } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="mx-auto w-full py-4 sm:py-6 lg:py-8">
            <p className="text-center text-sm leading-6 text-slate-500">© 2024  <Link to={"https://github.com/saranzafar"} target='_blank' className=' text-slate-600 font-semibold hover:underline hover:text-blue-500'>saranzafar</Link> | All rights reserved.</p>
        </footer >
    )
}

export default Footer
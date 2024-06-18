import React from 'react'
import { HrzLine, Skill } from "../components/index"
import { Link } from 'react-router-dom'

function Resume() {
    return (
        <div className='text-secondary dark:text-darkHeading'>
            <span className="text-3xl font-bold mb-4 dark:text-darkHeading">Resume</span>
            <HrzLine />
            {/* cards  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className=' '>
                    <div className='flex gap-2'>
                        <span className="text-2xl  mb-4 text-primary dark:text-darkText">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                        </span>
                        <span className="text-2xl font-semibold mb-4 dark:text-darkHeading">Education</span>
                    </div>
                    <div className='dark:bg-darkSubBg bg-red-50 p-4 flex flex-col rounded-md gap-2 mb-4  dark:hover:bg-darkBg transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-red-100'>
                        <small className=' text-gray-600 dark:text-gray-400'>2021-present</small>
                        <h2 className='text-xl'>Software Engineering</h2>
                        <small className=' text-gray-600 dark:text-gray-400'>Kotli University</small>
                    </div>
                    <div className=' dark:bg-darkSubBg bg-purple-100 p-4 flex flex-col rounded-md gap-2 mb-4 dark:hover:bg-darkBg transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-purple-200'>
                        <small className=' text-gray-600 dark:text-gray-400'>2019-2021</small>
                        <h2 className='text-xl'>ICS</h2>
                        <small className=' text-gray-600 dark:text-gray-400'>Chinar College</small>
                    </div>
                    <div className=' dark:bg-darkSubBg bg-blue-100 p-4 flex flex-col rounded-md gap-2 mb-4 dark:hover:bg-darkBg transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-blue-200'>
                        <small className=' text-gray-600 dark:text-gray-400'>3 months</small>
                        <h2 className='text-xl'>Web Scrapping Course</h2>
                        <small className=' text-gray-600 dark:text-gray-400'>Logicexer</small>
                    </div>
                </div>

                <div>
                    <div className='flex gap-2'>
                        <span className="text-2xl text-primary  mb-4 dark:text-darkText">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
                        </span>
                        <span className="text-2xl font-semibold mb-4 dark:text-darkHeading">Experience</span>
                    </div>
                    <div className=' dark:bg-darkSubBg bg-purple-100 p-4 flex flex-col rounded-md gap-2 mb-4 dark:hover:bg-darkBg transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-purple-200'>
                        <small className=' text-gray-600 dark:text-gray-400'>2023-present</small>
                        <h2 className='text-xl'>As an Internee </h2>
                        <Link to={"https://xactmind.com"} target='_blank' className=' '>
                            <small className=' text-gray-600 dark:text-gray-400 hover:text-primary'>Xactmind</small>
                        </Link>
                    </div>
                    <div className='dark:bg-darkSubBg bg-blue-100 p-4 flex flex-col rounded-md gap-2 mb-4 dark:hover:bg-darkBg transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-blue-200'>
                        <small className=' text-gray-600 dark:text-gray-400'>2 months</small>
                        <h2 className='text-xl'>Internship</h2>
                        <Link to="https://logicexer.com" target='_blank' className=''>
                            <small className=' text-gray-600 dark:text-gray-400 hover:text-primary'>Logicexer</small>
                        </Link>
                    </div>
                    <div className='dark:bg-darkSubBg bg-red-50 p-4 flex flex-col rounded-md gap-2 dark:hover:bg-darkBg transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-red-100'>
                        <small className=' text-gray-600 dark:text-gray-400'>2023-present</small>
                        <h2 className='text-xl'>Freelancing</h2>
                        <small className=' text-gray-600 dark:text-gray-400'>Fiverr</small>
                    </div>
                </div>
            </div>


            {/* skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 dark:bg-darkSubBg p-4 rounded-lg mt-10">
                <div className=' '>
                    <div className="max-w-xl mx-auto w-full">
                        <h4 className="text-3xl md:text-2xl font-semibold mb-2 mt-6"> Working Skills</h4>
                        <div className='hover:-translate-y-2 hover:shadow-lg transition duration-100'>
                        <Skill name="MERN Stack" percentage="88%" color="#CA56F2" dasharray="88.25px, 100px" />
                        </div>
                        <div className='hover:-translate-y-2 hover:shadow-lg transition duration-100'>
                        <Skill name="Html CSS" percentage="96%" color="#fb923c" dasharray="96.25px, 100px" />
                        </div>
                        <div className='hover:-translate-y-2 hover:shadow-lg transition duration-100'>
                        <Skill name="Javascript" percentage="91%" color="#eab308" dasharray="91.25px, 100px" />
                        </div>
                        <div className='hover:-translate-y-2 hover:shadow-lg transition duration-100'>
                        <Skill name="Web Design" percentage="89%" color="#ef4444" dasharray="89.2px, 100px" />
                        </div>
                        <div className='hover:-translate-y-2 hover:shadow-lg transition duration-100'>
                        <Skill name="Wordpress" percentage="93%" color="#0ea5e9" dasharray="93.2px, 100px" />
                        </div>
                        <div className='hover:-translate-y-2 hover:shadow-lg transition duration-100'>
                        <Skill name="Other Frameworks" percentage="73%" color="#6c31c1" dasharray="73.2px, 100px" />
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h4 className="text-3xl md:text-2xl font-semibold mb-2 mt-6">Knowledges</h4>
                    <div className="flex justify-center flex-wrap gap-2 max-w-sm mx-auto my-4 text-sm">
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">SEO Optimization</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">Digital Marketing</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">Content Strategy</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">MERN Stack</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">WordPress</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">Web Development</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">Web Scraping</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">HTML</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">CSS</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">JavaScript</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">Bootstrap</button>
                        <button className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-darkBg dark:hover:bg-black transition duration-300">React</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Resume
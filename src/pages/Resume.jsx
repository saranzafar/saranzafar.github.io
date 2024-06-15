import React from 'react'
import { HrzLine, Skill } from "../components/index"
function Resume() {
    return (
        <div className='text-secondary'>
            <span className="text-3xl font-bold mb-4 ">Resume</span>
            <HrzLine />
            {/* cards  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className=' '>
                    <div className='flex gap-2'>
                        <span className="text-2xl  mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                        </span>
                        <span className="text-2xl font-semibold mb-4 ">Education</span>
                    </div>
                    <div className='bg-red-50 p-4 flex flex-col rounded-md gap-2 mb-4'>
                        <small className=' text-gray-600'>2021-present</small>
                        <h2 className='text-xl'>As an Internee</h2>
                        <small className=' text-gray-600'>Xactmind</small>
                    </div>
                    <div className=' bg-purple-100 p-4 flex flex-col rounded-md gap-2 mb-4'>
                        <small className=' text-gray-600'>2021-present</small>
                        <h2 className='text-xl'>As an Internee</h2>
                        <small className=' text-gray-600'>Xactmind</small>
                    </div>
                    <div className=' bg-purple-100 p-4 flex flex-col rounded-md gap-2 mb-4'>
                        <small className=' text-gray-600'>2021-present</small>
                        <h2 className='text-xl'>As an Internee</h2>
                        <small className=' text-gray-600'>Xactmind</small>
                    </div>
                </div>

                <div>
                    <div className='flex gap-2'>
                        <span className="text-2xl  mb-4 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
                        </span>
                        <span className="text-2xl font-semibold mb-4 ">Experience</span>
                    </div>
                    <div className=' bg-purple-100 p-4 flex flex-col rounded-md gap-2 mb-4'>
                        <small className=' text-gray-600'>2021-present</small>
                        <h2 className='text-xl'>As an Internee</h2>
                        <small className=' text-gray-600'>Xactmind</small>
                    </div>
                    <div className='bg-red-50 p-4 flex flex-col rounded-md gap-2 mb-4'>
                        <small className=' text-gray-600'>2021-present</small>
                        <h2 className='text-xl'>As an Internee</h2>
                        <small className=' text-gray-600'>Xactmind</small>
                    </div>
                    <div className='bg-red-50 p-4 flex flex-col rounded-md gap-2'>
                        <small className=' text-gray-600'>2021-present</small>
                        <h2 className='text-xl'>As an Internee</h2>
                        <small className=' text-gray-600'>Xactmind</small>
                    </div>
                </div>
            </div>


            {/* skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg mt-10">
                <div className=' '>
                    <div className="max-w-xl mx-auto w-full">
                        <h4 className="text-3xl md:text-2xl dark:text-white font-semibold mb-2 mt-6"> Working Skills</h4>
                        <Skill name="Web Design" percentage="80%" color="#FF6464" dasharray="79.2px, 100px" />
                        <Skill name="Mobile App" percentage="95%" color="#9272D4" dasharray="94.05px, 100px" />
                        <Skill name="Illustrator" percentage="65%" color="#5185D4" dasharray="64.35px, 100px" />
                        <Skill name="Photoshop" percentage="75%" color="#CA56F2" dasharray="74.25px, 100px" />
                    </div>
                </div>

                <div className=''>
                    <h4 className="text-3xl md:text-2xl dark:text-white font-semibold mb-2 mt-6">Knowledges</h4>
                    <div className="flex justify-center flex-wrap gap-2 max-w-sm mx-auto my-4 text-sm">
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Travel</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Food</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Art</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Music</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Technology</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Photography</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Sports</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Fashion</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">History</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Nature</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Health</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Nurition</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Education</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Fitness</button>
                        <button className="px-2 py-1 rounded bg-gray-200/50 text-gray-700 hover:bg-gray-300">Business</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume
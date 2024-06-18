import { HrzLine } from "../components/index"

function Home() {

    return (
        <div className='text-secondary dark:text-darkText'>
            <div className=''>
                <h1 className="text-3xl font-bold dark:text-darkHeading">About</h1>
                <HrzLine className='' />
            </div>
            <p className="mb-4 text-accent dark:text-darkText">I am Saran Zafar, a dedicated software engineering student with a passion for computer science. Proficient in the MERN stack, HTML, CSS, C, C++, Python, and expert-level WordPress, I have designed a survey application and developed backends for YouTube and Twitter clones. I have also created numerous WordPress and responsive websites.</p>
            <p className="mb-4 text-accent dark:text-darkText">Driven by my interest in technology, I stay updated with the latest trends through social media, news, and thorough documentation review. My proactive and innovative approach to problem-solving ensures high-quality solutions in every project I undertake.</p>

            <h2 className='text-2xl pb-4 font-semibold mt-10 dark:text-darkHeading'>What do i do?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
                <div className='bg-red-50 p-4 flex flex-row rounded-md  dark:bg-darkSubBg dark:hover:bg-darkBg transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-red-100'>
                    <div className="text-green-800 dark:text-darkText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg></div>
                    <div className='pl-2'>
                        <h2 className='text-xl dark:text-darkHeading'>MERN Stack</h2>
                        <p>Develop robust full-stack web applications using MongoDB, Express, React, and Node.js. I handle both front-end and back-end development, ensuring seamless and dynamic user experiences for various applications.</p>
                    </div>
                </div>

                <div className='bg-purple-100 p-4 flex flex-row rounded-md dark:bg-darkSubBg dark:hover:bg-darkBg  transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-purple-200'>
                    <div className="text-orange-700 dark:text-darkText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl dark:text-darkHeading'>Wordpress</h2>
                        <p>Expertly create, customize, and manage WordPress websites. From designing unique themes to integrating essential plugins, I provide tailored solutions that meet diverse client needs and enhance website functionality.</p>
                    </div>
                </div>

                <div className='bg-purple-100 p-4 flex flex-row rounded-md dark:bg-darkSubBg dark:hover:bg-darkBg  transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-purple-200'>
                    <div className="text-blue-700 dark:text-darkText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-fading-plus"><path d="M12 2a10 10 0 0 1 7.38 16.75" /><path d="M12 8v8" /><path d="M16 12H8" /><path d="M2.5 8.875a10 10 0 0 0-.5 3" /><path d="M2.83 16a10 10 0 0 0 2.43 3.4" /><path d="M4.636 5.235a10 10 0 0 1 .891-.857" /><path d="M8.644 21.42a10 10 0 0 0 7.631-.38" /></svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl dark:text-darkHeading'>Web development</h2>
                        <p>Design and develop responsive, user-friendly websites using HTML, CSS, JavaScript, and Bootstrap. My approach combines aesthetic design with efficient coding practices to deliver visually appealing and highly functional web pages.</p>
                    </div>
                </div>

                <div className='bg-red-50 p-4 flex flex-row rounded-md dark:bg-darkSubBg dark:hover:bg-darkBg dark:text-darkText transition duration-200 hover:shadow-lg hover:-translate-y-2 hover:bg-red-100'>
                    <div className="text-yellow-600 dark:text-darkText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-code"><path d="M10 9.5 8 12l2 2.5" /><path d="m14 9.5 2 2.5-2 2.5" /><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl dark:text-darkHeading'>Web scrapping</h2>
                        <p>Efficiently extract, process, and analyze data from various websites. Using advanced web scraping tools and techniques, I gather valuable insights and information, enabling data-driven decision-making for projects and businesses.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold text-center dark:text-darkHeading'>Clients</h2>


                <div className="w-full px-4 pt-5 pb-16" id="faq">
                    <div className="">
                        <div className="flex space-x-8 w-full items-center justify-around animate-slide flex-wrap dark:bg-darkSubBg dark:rounded-lg">
                            <img alt="Apple" className="h-20 " src="https://www.svgrepo.com/show/442910/brand-apple.svg" />
                            <img alt="Pixar" className="h-20 " src="https://www.svgrepo.com/show/443329/brand-pixar.svg" />
                            <img alt="GeForce" className="h-20 " src="https://www.svgrepo.com/show/443079/brand-geforce.svg" />
                            <img alt="Ethereum" className="h-20 " src="https://www.svgrepo.com/show/443042/brand-ethereum.svg" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
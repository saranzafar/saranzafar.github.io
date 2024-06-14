import React, { useEffect, useRef } from 'react';

function Home() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;
        const maxScroll = slider.scrollWidth / 2;

        const scrollStep = () => {
            if (scrollAmount >= maxScroll) {
                slider.scrollTo({ left: 0 });
                scrollAmount = 0;
            } else {
                scrollAmount += 1;
            }
            slider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        };

        const scrollInterval = setInterval(scrollStep, 20); // Adjust the interval for speed

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className='text-secondary'>
            <h1 className="text-3xl font-bold mb-4 ">About</h1>
            <p className="mb-4 text-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vero placeat temporibus ipsa blanditiis sit aliquam, molestiae similique ipsam dolorum suscipit perspiciatis quidem quibusdam excepturi maxime corporis dolor id at.</p>
            <p className="mb-4 text-accent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h2 className='text-2xl pb-4 font-semibold'>What do i do?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='bg-red-50 p-4 flex flex-row rounded-md '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl'>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium reiciendis cupiditate nobis deserunt ipsum, odit optio rerum nemo suscipit. Eligendi ea enim iusto atque ducimus, repudiandae nam consectetur placeat.</p>
                    </div>
                </div>

                <div className='bg-purple-100 p-4 flex flex-row rounded-md '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl'>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium reiciendis cupiditate nobis deserunt ipsum, odit optio rerum nemo suscipit. Eligendi ea enim iusto atque ducimus, repudiandae nam consectetur placeat.</p>
                    </div>
                </div>

                <div className='bg-purple-100 p-4 flex flex-row rounded-md '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl'>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium reiciendis cupiditate nobis deserunt ipsum, odit optio rerum nemo suscipit. Eligendi ea enim iusto atque ducimus, repudiandae nam consectetur placeat.</p>
                    </div>
                </div>

                <div className='bg-red-50 p-4 flex flex-row rounded-md '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl'>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium reiciendis cupiditate nobis deserunt ipsum, odit optio rerum nemo suscipit. Eligendi ea enim iusto atque ducimus, repudiandae nam consectetur placeat.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold text-center'>Client</h2>


                <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
                    <h2 className="text-4xl font-bold text-center">Happy Customers</h2>
                    <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
                    </p>
                    <div className="overflow-hidden relative">
                        <div
                            ref={sliderRef}
                            className="flex space-x-8 w-full items-center justify-around animate-slide"
                            style={{ scrollBehavior: 'smooth', display: 'flex' }}
                        >
                            <a target="_blank" href="">
                                <img alt="Apple" className="h-20 mx-auto" src="https://www.svgrepo.com/show/442910/brand-apple.svg" />
                            </a>
                            <a target="_blank" href="">
                                <img alt="Pixar" className="h-20 mx-auto" src="https://www.svgrepo.com/show/443329/brand-pixar.svg" />
                            </a>
                            <a target="_blank" href="">
                                <img alt="GeForce" className="h-20 mx-auto" src="https://www.svgrepo.com/show/443079/brand-geforce.svg" />
                            </a>
                            <a target="_blank" href="">
                                <img alt="Ethereum" className="h-20 mx-auto" src="https://www.svgrepo.com/show/443042/brand-ethereum.svg" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
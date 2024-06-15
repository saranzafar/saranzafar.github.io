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

            <h2 className='text-2xl pb-4 font-semibold mt-2'>What do i do?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className='bg-red-50 p-4 flex flex-row rounded-md '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg></div>
                    <div className='pl-2'>
                        <h2 className='text-xl'>MERN Stack</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium reiciendis cupiditate nobis deserunt ipsum, odit optio rerum nemo suscipit. Eligendi ea enim iusto atque ducimus, repudiandae nam consectetur placeat.</p>
                    </div>
                </div>

                <div className='bg-purple-100 p-4 flex flex-row rounded-md '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl'>Web development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium reiciendis cupiditate nobis deserunt ipsum, odit optio rerum nemo suscipit. Eligendi ea enim iusto atque ducimus, repudiandae nam consectetur placeat.</p>
                    </div>
                </div>

                <div className='bg-purple-100 p-4 flex flex-row rounded-md '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                            <path d="M 12 2 C 6.484375 2 2 6.484375 2 12 C 2 17.515625 6.484375 22 12 22 C 17.515625 22 22 17.511719 22 12 C 22 6.484375 17.515625 2 12 2 Z M 12 3 C 16.960938 3 21 7.035156 21 12 C 21 16.964844 16.960938 21 12 21 C 7.039063 21 3 16.960938 3 12 C 3 7.035156 7.039063 3 12 3 Z M 12 4 C 9.203125 4 6.742188 5.421875 5.3125 7.59375 C 5.5 7.601563 5.695313 7.625 5.84375 7.625 C 6.679688 7.625 7.96875 7.5 7.96875 7.5 C 8.398438 7.476563 8.429688 8.136719 8 8.1875 C 8 8.1875 7.574219 8.222656 7.09375 8.25 L 9.75 16.1875 L 11.5 10.9375 L 10.53125 8.25 C 10.101563 8.226563 9.6875 8.1875 9.6875 8.1875 C 9.253906 8.160156 9.289063 7.472656 9.71875 7.5 C 9.71875 7.5 11.058594 7.625 11.84375 7.625 C 12.679688 7.625 13.96875 7.5 13.96875 7.5 C 14.402344 7.476563 14.460938 8.136719 14.03125 8.1875 C 14.03125 8.1875 13.574219 8.222656 13.09375 8.25 L 16 16.25 L 16.8125 13.59375 C 17.074219 12.527344 17.40625 11.6875 17.40625 11 C 17.40625 10.25 17.0625 9.902344 16.75 9.375 C 16.355469 8.710938 15.96875 8.160156 15.96875 7.5 C 15.96875 6.765625 16.527344 6.09375 17.3125 6.09375 C 17.347656 6.09375 17.371094 6.089844 17.40625 6.09375 C 15.980469 4.789063 14.082031 4 12 4 Z M 19.03125 8.15625 C 19.066406 8.410156 19.046875 8.671875 19.0625 8.96875 C 19.101563 9.78125 18.941406 11.03125 18.75 11.625 C 18.140625 13.511719 16.34375 18.6875 16.34375 18.6875 C 16.375 18.675781 16.433594 18.652344 16.5625 18.5625 C 18.652344 17.132813 20 14.722656 20 12 C 20 10.609375 19.65625 9.296875 19.03125 8.15625 Z M 4.6875 8.75 C 4.246094 9.742188 4 10.839844 4 12 C 4 15.164063 5.832031 17.890625 8.5 19.1875 Z M 12.15625 12.6875 L 9.75 19.6875 C 10.46875 19.898438 11.214844 20 12 20 C 12.929688 20 13.824219 19.855469 14.65625 19.5625 C 14.636719 19.527344 14.609375 19.476563 14.59375 19.4375 Z"></path>
                        </svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl'>Wordpress</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium reiciendis cupiditate nobis deserunt ipsum, odit optio rerum nemo suscipit. Eligendi ea enim iusto atque ducimus, repudiandae nam consectetur placeat.</p>
                    </div>
                </div>

                <div className='bg-red-50 p-4 flex flex-row rounded-md '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33" viewBox="0 0 50 50">
                            <path d="M 25 2 C 20.941406 2 18.1875 2.96875 16.4375 4.375 C 14.6875 5.78125 14 7.589844 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 7.265625 15 5.410156 15.792969 4.09375 17.46875 C 2.777344 19.144531 2 21.644531 2 25 C 2 28.355469 2.777344 30.855469 4.09375 32.53125 C 5.410156 34.207031 7.265625 35 9.09375 35 L 14 35 L 14 40.90625 C 14 42.410156 14.6875 44.21875 16.4375 45.625 C 18.1875 47.03125 20.941406 48 25 48 C 29.058594 48 31.8125 47.03125 33.5625 45.625 C 35.3125 44.21875 36 42.410156 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 42.734375 35 44.589844 34.207031 45.90625 32.53125 C 47.222656 30.855469 48 28.355469 48 25 C 48 21.644531 47.222656 19.144531 45.90625 17.46875 C 44.589844 15.792969 42.734375 15 40.90625 15 L 36 15 L 36 9.09375 C 36 7.550781 35.316406 5.738281 33.5625 4.34375 C 31.808594 2.949219 29.054688 2 25 2 Z M 25 4 C 28.746094 4 31.015625 4.875 32.3125 5.90625 C 33.609375 6.9375 34 8.136719 34 9.09375 L 34 21 C 34 22.65625 32.65625 24 31 24 L 19 24 C 16.941406 24 15.167969 25.269531 14.40625 27.0625 C 14.277344 27.359375 14.160156 27.675781 14.09375 28 C 14.027344 28.324219 14 28.65625 14 29 L 14 33 L 9.09375 33 C 7.824219 33 6.648438 32.503906 5.6875 31.28125 C 4.726563 30.058594 4 28.042969 4 25 C 4 21.957031 4.726563 19.941406 5.6875 18.71875 C 6.648438 17.496094 7.824219 17 9.09375 17 L 26 17 L 26 12 L 16 12 L 16 9.09375 C 16 8.199219 16.386719 6.980469 17.6875 5.9375 C 18.988281 4.894531 21.257813 4 25 4 Z M 20 7 C 18.898438 7 18 7.898438 18 9 C 18 10.101563 18.898438 11 20 11 C 21.101563 11 22 10.101563 22 9 C 22 7.898438 21.101563 7 20 7 Z M 36 17 L 40.90625 17 C 42.175781 17 43.351563 17.496094 44.3125 18.71875 C 45.273438 19.941406 46 21.957031 46 25 C 46 28.042969 45.273438 30.058594 44.3125 31.28125 C 43.351563 32.503906 42.175781 33 40.90625 33 L 24 33 L 24 38 L 34 38 L 34 40.90625 C 34 41.800781 33.613281 43.019531 32.3125 44.0625 C 31.011719 45.105469 28.742188 46 25 46 C 21.257813 46 18.988281 45.105469 17.6875 44.0625 C 16.386719 43.019531 16 41.800781 16 40.90625 L 16 29 C 16 28.792969 16.023438 28.601563 16.0625 28.40625 C 16.34375 27.039063 17.550781 26 19 26 L 31 26 C 33.746094 26 36 23.746094 36 21 Z M 30 39 C 28.898438 39 28 39.898438 28 41 C 28 42.101563 28.898438 43 30 43 C 31.101563 43 32 42.101563 32 41 C 32 39.898438 31.101563 39 30 39 Z"></path>
                        </svg>
                    </div>
                    <div className='pl-2'>
                        <h2 className='text-xl'>Web scrapping</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium reiciendis cupiditate nobis deserunt ipsum, odit optio rerum nemo suscipit. Eligendi ea enim iusto atque ducimus, repudiandae nam consectetur placeat.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl mt-10 font-semibold text-center'>Client</h2>


                <div className="w-full px-4 pt-5 pb-16" id="faq">
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
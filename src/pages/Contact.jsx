import { HrzLine } from "../components/index"

function Contact() {
    return (
        <div className="dark:text-darkHeading">
            <span className="text-3xl font-bold mb-4 ">Resume</span>
            <HrzLine />
            <p className="mt-4 text-lg leading-6 text-secondary dark:text-darkText">Please use the form below to contact us. Thank you!</p>
            <div id="contact-us" className="overflow-hidden py-4 px-4 sm:px-6 lg:px-8 lg:py-4">
                <div className="relative mx-auto max-w-xl">
                    <div className="text-center">

                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-slate-400">Name</label>
                                <div className="mt-1">
                                    <input name="name" type="text" id="name" autoComplete="organization" required="" className="border-b-2 dark:border-darkText dark:focus: bg-transparent block w-full rounded-md py-3 px-4 focus:outline-primary dark:focus:outline-darkText" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-slate-400">Email</label>
                                <div className="mt-1">
                                    <input name="email" id="email" required="" type="email" autoComplete="email" className="border-b-2 dark:border-darkText dark:focus: bg-transparent block w-full rounded-md py-3 px-4 focus:outline-primary dark:focus:outline-darkText" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-slate-400">Message</label>
                                <div className="mt-1">
                                    <textarea required="" name="message" id="message" rows="4" className="border-b-2 dark:border-darkText dark:focus: bg-transparent block w-full rounded-md py-3 px-4 focus:outline-primary dark:focus:outline-darkText"></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end sm:col-span-2">
                                <button type="text" className="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary shadow-sm sm:text-sm transition-colors duration-75 text-primary border border-primary hover:text-white active:bg-purple-600 disabled:bg-sky-100 disabled:cursor-not-allowed dark:hover:bg-primary">
                                    <span>Send Message</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
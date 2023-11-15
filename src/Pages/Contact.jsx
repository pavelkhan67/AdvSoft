import React from 'react';

const Contact = () => {
    return (
        <div class="text-center bg-white pt-10 lg:pt-14 pb-14" id='contact'>
            <h2 class="uppercase text-3xl font-semibold" style={{ color: 'rgba(31, 52, 122, 1)' }}>Get In Touch</h2>
            <div class="md:flex gap-6 justify-center">
                <button
                    class="mt-6 h-fit w-fit py-2 px-6 text-sm text-white bg-blue-500 rounded-md transition-transform duration-500 hover:bg-white hover:text-blue-500 hover:scale-x-110 transform origin-center border hover:border-blue-500">
                    SALES: +001122334455
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-4 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <button
                    class="mt-6 h-fit w-fit py-2 px-6 text-sm text-white bg-blue-500 rounded-md transition-transform duration-500 hover:bg-white hover:text-blue-500 hover:scale-x-110 transform origin-center border hover:border-blue-500">
                    SUPPORT: +001122334455
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-4 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Contact;
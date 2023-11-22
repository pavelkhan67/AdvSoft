import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lottiefile3.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Consultation = () => {
    const scrollToContactSection = () => {
        const productSection = document.getElementById('contact');
        if (productSection) {
            const targetPosition = productSection.offsetTop; // Get the position of the target element
            const startPosition = window.pageYOffset; // Get the current position
            const distance = targetPosition - startPosition;
            const duration = 1000; // Duration of the scroll animation in milliseconds
            let start = null;

            const smoothScroll = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);

                window.scrollTo(0, startPosition + distance * ease(percentage));

                if (progress < duration) {
                    requestAnimationFrame(smoothScroll);
                }
            };

            const ease = (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function, can be adjusted for different effects

            requestAnimationFrame(smoothScroll);
        }
    };
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: '',
        },
    };
    return (
        <div className="pt-10 lg:pt-12" id='service'>
            <div className="text-center relative h-[570px] md:h-[420px]">
                <Lottie options={lottieOptions} height={'100%'} width={'100%'} />
                <div className="absolute inset-0 bg-black opacity-70 flex flex-col justify-center items-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white">Integrate, Secure & Scale Your Business</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 mt-5 md:mt-8 gap-1 md:gap-3 lg:gap-5 px-1 md:px-3 lg:px-5 text-white">
                        <div
                            class="border rounded-md transition-all duration-500 border-slate-400 hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:shadow-slate-500 flex flex-col justify-center items-center p-3 md:p-4 lg:p-8">
                            <img class="w-20" src="	https://www.divineit.net/media/original_images/ERP-Business.png" alt="" />
                            <h2 class="text-lg font-semibold">ERP & Business Software</h2>
                        </div>
                        <div
                            class="border rounded-md transition-all duration-500 border-slate-400 hover:border-blue-500 hover:text-blue-500 hover:shadow-md hover:shadow-slate-500 flex flex-col justify-center items-center p-3 md:p-4 lg:p-8">
                            <img class="w-20" src="	https://www.divineit.net/media/original_images/Security-and-Infrastructure.png" alt="" />
                            <h2 class="text-lg font-semibold">Security & Infrastructure</h2>
                        </div>
                        <div
                            class="border rounded-md transition-all duration-500 border-slate-400 hover:border-blue-500 hover:text-blue-500 hover:shadow-md hover:shadow-slate-500 flex flex-col justify-center items-center p-3 md:p-4 lg:p-8">
                            <img class="w-20" src="https://www.divineit.net/media/original_images/Telecommunication-sky.png" alt="" />
                            <h2 class="text-lg font-semibold">Telecom Software</h2>
                        </div>
                        <div
                            class="border rounded-md transition-all duration-500 border-slate-400 hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:shadow-slate-500 flex flex-col justify-center items-center p-3 md:p-4 lg:p-8">
                            <img class="w-20" src="https://www.divineit.net/media/original_images/Business.png" alt="" />
                            <h2 class="text-lg font-semibold">IT & Business Services</h2>
                        </div>
                    </div>
                    <button onClick={scrollToContactSection}
                        class="mt-8 h-fit w-fit py-1 px-4 text-white rounded-md bg-blue-700 transition-transform duration-500 hover:bg-white hover:text-blue-500 hover:scale-x-110 transform origin-center border hover:border-blue-500">
                        Contact Us
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
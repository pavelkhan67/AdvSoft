import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/home/img2.jpg'
import img2 from '../assets/home/img4.jpg'
import img3 from '../assets/home/img1.jpg'
import img4 from '../assets/home/img3.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
    const scrollToProductSection = () => {
        const productSection = document.getElementById('product');
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
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id='main'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <Carousel className='text-center' autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false} transitionTime={1500} >
                    <div className="relative w-full h-[580px] md:h-[500px]">
                        <img src={img1} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515d6] to-[#56555565]">
                            <div className='text-white text-start mt-10 space-y-7 w-11/12 md:w-10/12 lg:w-2/3 pl-7 md:pl-10 lg:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome To Adventure Soft Ltd,  </h2>
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ marginTop: '10px' }}>A Private Software Technology Park</h2>
                                <p className='text-justify'>Welcome to Adventure Soft Ltd, a leading private software technology park dedicated to providing cutting-edge solutions for your business needs. We understand the dynamic nature of the digital landscape, and our team of skilled professionals is committed to delivering innovative and tailored software solutions.</p>
                                <button onClick={scrollToProductSection} className='btn text-blue-500 border-0 border-b-4 border-r-4 border-blue-500 hover:bg-white hover:border-slate-500'>See Our Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[580px] md:h-[500px]">
                        <img src={img2} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515dc] to-[#5655557f]">
                            <div className='text-white text-start mt-10 space-y-7 w-11/12 md:w-10/12 lg:w-2/3 pl-7 md:pl-10 lg:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome To Adventure Soft Ltd,  </h2>
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ marginTop: '10px' }}>A Core Software Development Company</h2>
                                <p className='text-justify'>We specialize in creating bespoke software solutions tailored to your unique business processes. Our experienced developers work closely with you to understand your requirements and deliver solutions that align perfectly with your objectives.</p>
                                <button onClick={scrollToProductSection} className='btn text-blue-500 border-0 border-b-4 border-r-4 border-blue-500 hover:bg-white hover:border-slate-500'>See Our Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[580px] md:h-[500px]">
                        <img src={img3} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515d6] to-[#56555581]">
                            <div className='text-white text-start mt-10 space-y-7 w-11/12 md:w-10/12 lg:w-2/3 pl-7 md:pl-10 lg:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome To Adventure Soft Ltd,  </h2>
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ marginTop: '10px' }}>An Application Development Company</h2>
                                <p className='text-justify'>We design and develop applications that provide a seamless user experience. Our goal is to enhance your digital presence and optimize functionality. With a commitment to excellence, we blend cutting-edge technology with creative prowess to bring your digital visions to life.</p>
                                <button onClick={scrollToProductSection} className='btn text-blue-500 border-0 border-b-4 border-r-4 border-blue-500 hover:bg-white hover:border-slate-500'>See Our Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[580px] md:h-[500px]">
                        <img src={img4} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515d6] to-[#56555585]">
                            <div className='text-white text-start mt-10 space-y-7 w-11/12 md:w-10/12 lg:w-2/3 pl-7 md:pl-10 lg:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome To Adventure Soft Ltd,  </h2>
                                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ marginTop: '10px' }}>An IT Consultancy Company</h2>
                                <p className='text-justify'>As your trusted technology partner, we provide expert consultancy services to help you make informed decisions about your IT infrastructure. Whether it's system integration, cybersecurity, or strategic planning, we've got you covered.</p>
                                <button onClick={scrollToProductSection} className='btn text-blue-500 border-0 border-b-4 border-r-4 border-blue-500 hover:bg-white hover:border-slate-500'>See Our Products <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </motion.div>
        </div>

    );
};

export default Banner;
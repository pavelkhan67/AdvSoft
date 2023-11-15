import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/home/img1.jpg'
import img2 from '../assets/home/img2.jpg'
import img3 from '../assets/home/img4.jpg'
import img4 from '../assets/home/img3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
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
                    <div className="relative w-full h-[570px] md:h-[520px] lg:h-[550px]">
                        <img src={img1} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white text-start mt-10 space-y-7 w-11/12 lg:w-2/3 pl-10 lg:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                                <h2 className=' text-4xl lg:text-5xl font-bold '>Travel opens your heart, broadens your mind, and fills your life with stories to tell.</h2>
                                <p>Welcome to TravelEase! Your gateway to unforgettable travel experiences. Discover, explore, and create memories that last a lifetime. Start your journey with us today. Happy travels from our team</p>
                                <div className='flex gap-5 '>
                                    <Link to='/places'>
                                        <button className='btn text-blue-500 border-0 border-b-4 border-r-4 border-blue-600 hover:bg-white hover:border-slate-500'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                        </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[570px] md:h-[520px] lg:h-[550px]">
                        <img src={img2} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white text-start mt-10 space-y-7 w-11/12 lg:w-2/3 pl-10 lg:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                                <h2 className=' text-4xl lg:text-5xl font-bold '>I want to make memories all over the world.</h2>
                                <p>Welcome to TravelEase, where your travel dreams come true. Embark on extraordinary adventures, uncover hidden gems, and create lifelong memories. Start your journey with us today. Happy travels from our team</p>
                                <div className='flex gap-5 '>
                                    <Link to='/places'>
                                        <button className='btn text-blue-500 border-0 border-b-4 border-r-4 border-blue-600 hover:bg-white hover:border-slate-500'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                        </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[570px] md:h-[520px] lg:h-[550px]">
                        <img src={img3} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white text-start mt-10 space-y-7 w-11/12 lg:w-2/3 pl-10 lg:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                                <h2 className=' text-4xl lg:text-5xl font-bold '>Happiness is planning a trip with the ones that you love.</h2>
                                <p>Welcome to TravelEase! Your gateway to unforgettable travel experiences. Discover, explore, and create memories that last a lifetime. Start your journey with us today. Happy travels from our team</p>
                                <div className='flex gap-5 '>
                                    <Link to='/places'>
                                        <button className='btn text-blue-500 border-0 border-b-4 border-r-4 border-blue-600 hover:bg-white hover:border-slate-500'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                        </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[570px] md:h-[520px] lg:h-[550px]">
                        <img src={img4} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white text-start mt-10 space-y-7 w-11/12 lg:w-2/3 pl-10 lg:pl-16' data-aos="fade-down-right" data-aos-duration="1000">
                                <h2 className=' text-4xl lg:text-5xl font-bold '>Travel opens your heart, broadens your mind, and fills your life with stories to tell.</h2>
                                <p>Welcome to TravelEase, where your travel dreams come true. Embark on extraordinary adventures, uncover hidden gems, and create lifelong memories. Start your journey with us today. Happy travels from our team</p>
                                <div className='flex gap-5 '>
                                    <Link to='/places'>
                                        <button className='btn text-blue-500 border-0 border-b-4 border-r-4 border-blue-600 hover:bg-white hover:border-slate-500'>See More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                        </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </motion.div>
        </div>

    );
};

export default Banner;
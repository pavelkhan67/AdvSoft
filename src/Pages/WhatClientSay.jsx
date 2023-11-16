import React, { useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../assets/home/user.jpg';
import img2 from '../assets/home/user1.jpg';
import img1 from '../assets/home/photo_collage.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-reveal';

const WhatClientsSay = () => {

    return (
        <div id='review'>
            <Carousel className='text-center pt-10 lg:pt-12' autoPlay={true} interval={6000} infiniteLoop={true} showThumbs={false} transitionTime={1500} showStatus={false}>
                <div className='relative lg:me-1'>
                    <img className='h-[400px] md:h-[380px] w-full ' src={img1} alt="" />
                    <TypeAnimation
                        className='text-3xl md:text-4xl font-semibold absolute top-5 md:top-10 lg:top-12 left-1' style={{ color: 'rgba(31, 52, 122, 1)' }}
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            "What Clients Say",
                            2000,
                            "Clients Review",
                            2000
                        ]}
                        speed={10} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        reset={true}
                    />
                    <div className='border border-slate-300 rounded bg-white p-4 m-8 md:m-14 lg:m-20 absolute bottom-3 md:bottom-7 lg:bottom-5'>
                        <div className='flex items-center'>
                            <div className='h-14 w-14'><img className='h-full w-full rounded-full' src={img} alt="" /></div>
                            <div className='ps-2 text-left'>
                            <Fade right><p className='text-blue-500 text-2xl'>Karim Khan</p></Fade>
                                <p>User, Normal User</p>
                            </div>
                        </div>
                        <div className='text-left pt-2'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur, quidem blanditiis, aperiam, nesciunt debitis id ducimus quaerat asperiores laboriosam facilis magni. Magnam eligendi similique itaque consequuntur nostrum laborum doloribus?</p>
                        </div>
                    </div>
                </div>
                <div className='relative lg:me-1'>
                    <img className='h-[400px] md:h-[380px] w-full' src={img1} alt="" />
                    <TypeAnimation
                        className='text-3xl md:text-4xl font-semibold absolute top-5 md:top-10 lg:top-12 left-1' style={{ color: 'rgba(31, 52, 122, 1)' }}
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            "What Clients Say",
                            2000,
                            "Clients Review",
                            2000
                        ]}
                        speed={10} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        reset={true}
                    />
                    <div className='border border-slate-300 rounded bg-white p-4 m-8 md:m-14 lg:m-20 absolute bottom-3 md:bottom-7 lg:bottom-5'>
                        <div className='flex items-center'>
                            <div className='h-14 w-14'><img className='h-full w-full rounded-full' src={img2} alt="" /></div>
                            <div className='ps-2 text-left'>
                            <Fade left><p className='text-blue-500 text-2xl'>Pavel Khan</p></Fade>
                                <p>User, Normal User</p>
                            </div>
                        </div>
                        <div className='text-left pt-2'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur, quidem blanditiis, aperiam, nesciunt debitis id ducimus quaerat asperiores laboriosam facilis magni. Magnam eligendi similique itaque consequuntur nostrum laborum doloribus?</p>
                        </div>
                    </div>
                </div>
                <div className='relative lg:me-1'>
                    <img className='h-[400px] md:h-[380px] w-full' src={img1} alt="" />
                    <TypeAnimation
                        className='text-3xl md:text-4xl font-semibold absolute top-5 md:top-10 lg:top-12 left-1' style={{ color: 'rgba(31, 52, 122, 1)' }}
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            "What Clients Say",
                            2000,
                            "Clients Review",
                            2000
                        ]}
                        speed={10} // Custom Speed from 1-99 - Default Speed: 40
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        reset={true}
                    />
                    <div className='border border-slate-300 rounded bg-white p-4 m-8 md:m-14 lg:m-20 absolute bottom-3 md:bottom-7 lg:bottom-5'>
                        <div className='flex items-center'>
                            <div className='h-14 w-14'><img className='h-full w-full rounded-full' src={img} alt="" /></div>
                            <div className='ps-2 text-left'>
                                <Fade top><p className='text-blue-500 text-2xl'>Rahul Khan</p></Fade>
                                <p>User, Normal User</p>
                            </div>
                        </div>
                        <div className='text-left pt-2'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur, quidem blanditiis, aperiam, nesciunt debitis id ducimus quaerat asperiores laboriosam facilis magni. Magnam eligendi similique itaque consequuntur nostrum laborum doloribus?</p>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default WhatClientsSay;


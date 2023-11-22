import React from 'react';
import img1 from '../assets/photo/year-of-estd.png'
import img2 from '../assets/photo/total-employee.png'
import img3 from '../assets/photo/copyrited.png'
import img4 from '../assets/photo/Happy-Users.png'
import img5 from '../assets/photo/Software-Installations.png'
import img6 from '../assets/photo/support-system.png'
import img7 from '../assets/images/logoo.jpg'
import { TypeAnimation } from 'react-type-animation';
import Fade from 'react-reveal/Fade';

const WhoWeAre = () => {
    return (
        <div className='md:grid grid-cols-2 px-1 lg:px-0 pt-10 lg:pt-12' id='about'>
            <div className='pe-2 flex flex-col justify-center text-justify pr-2 md:pr-5'>
                <TypeAnimation
                    className='text-3xl md:text-4xl font-semibold mb-3' style={{ color: 'rgba(31, 52, 122, 1)' }}
                    // Same String at the start will only be typed once, initially
                    sequence={[
                        "Who We Are",
                        4000,
                        "Know About Us",
                        4000
                    ]}
                    speed={10} // Custom Speed from 1-99 - Default Speed: 40
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                    reset={true}
                />
                <div className='ps-1 lg:ps-0'>
                    <Fade left><p className='py-2 text-blue-400'>Adventure Soft Limited a high tech innovative IT consulting & software development power-house</p></Fade>
                    <p>Welcome to Adventure Soft Ltd, a dynamic private software technology park committed to delivering innovative and tailored solutions. Our hub of creativity and technical expertise harnesses the latest technologies to drive your business forward.</p>

                    <p>Choose Us for unparalleled technological prowess and customer-centric solutions. Our dedicated team ensures innovation, reliability, and security, providing you with a competitive edge in the dynamic digital landscape.</p>
                    <div><img className='h-14 w-48 mt-2 rounded-sm' src={img7} alt="" /></div>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 lg:gap-3 mt-5 md:mt-0'>
                <div className='group flex flex-col justify-center items-center text-center  border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img1} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>2000</p>
                    <p>Years of Establishment</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center  border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img2} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>200+</p>
                    <p>Total Employees</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img3} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>10+</p>
                    <p>Copyrighted Products</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img4} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>5000+</p>
                    <p>Services Delivered</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img5} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>1ml+</p>
                    <p>Happy Users</p>
                </div>
                <div className='group flex flex-col justify-center items-center text-center border border-slate-300 py-2 lg:py-5 px-1 rounded hover:shadow-md hover:border-blue-400 hover:shadow-slate-400 transition-all duration-500'>
                    <img className='w-12' src={img6} alt="" />
                    <p className='text-3xl pt-2 group-hover:text-blue-500'>24/7</p>
                    <p>Support system</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
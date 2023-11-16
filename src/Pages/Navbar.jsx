import React, { useEffect, useState } from 'react';
import img from '../assets/images/logoo.jpg'

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarPadding = scrollPosition > 100 ? 'py-0' : 'py-2';

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            const targetPosition = section.offsetTop;
            const duration = 1000;

            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;

            let start = null;

            const smoothScroll = (timestamp) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);

                window.scrollTo(0, startPosition + distance * ease(progress));

                if (elapsed < duration) {
                    requestAnimationFrame(smoothScroll);
                }
            };

            // Check if the section is not the main section
            // if (sectionId !== 'main') {
            //     section.style.marginTop = '120px';
            // }

            const ease = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

            requestAnimationFrame(smoothScroll);

            // setTimeout(() => {
            //     if (sectionId !== 'main') {
            //         section.style.marginTop = '100px';
            //     }
            // }, 10000);
            // setTimeout(() => {
            //     if (sectionId !== 'main') {
            //         section.style.marginTop = '80px';
            //     }
            // }, 16000);
            // setTimeout(() => {
            //     if (sectionId !== 'main') {
            //         section.style.marginTop = '60px';
            //     }
            // }, 22000);
            // setTimeout(() => {
            //     if (sectionId !== 'main') {
            //         section.style.marginTop = '40px';
            //     }
            // }, 28000);
            // setTimeout(() => {
            //     if (sectionId !== 'main') {
            //         section.style.marginTop = '20px';
            //     }
            // }, 34000);
            // setTimeout(() => {
            //     if (sectionId !== 'main') {
            //         section.style.marginTop = '0px';
            //     }
            // }, 40000);
        }
    };

    const handleClick = (event, section) => {
        event.preventDefault();

        scrollToSection(section);

        const links = document.querySelectorAll('.menu a, .men a');
        links.forEach(link => {
            link.classList.remove('active');
        });

        if (section === 'main') {
            const mainIcon = document.querySelector('.navbar-end svg');
            if (mainIcon) {
                mainIcon.parentNode.classList.add('active');
            }
        } else {
            event.target.classList.add('active');
        }
    };

    return (
        <div className={`flex justify-between transition fixed w-full lg:max-w-[1200px] z-50 ${navbarPadding}`} style={{backgroundColor:'#F7F7F7'}}>
            <div className="navbar-start md:flex md:flex-1">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        <li><a href='#' onClick={(event) => handleClick(event, 'about')}>About Us</a></li>
                        <li><a href='#' onClick={(event) => handleClick(event, 'service')}>Services</a></li>
                        <li><a href='#' onClick={(event) => handleClick(event, 'review')}>Reviews</a></li>
                        <li><a href='#' onClick={(event) => handleClick(event, 'contact')}>Contact</a></li>
                    </ul>
                </div>

                <div className='inline-block'><img className='h-10' src={img} alt="" /></div>
            </div>
            <div className="navbar-end flex flex-2 items-center">
                <ul className="men hidden lg:flex font-semibold" >
                    <li><a className="btn btn-ghost btn-sm normal-case" href='#' onClick={(event) => handleClick(event, 'main')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg></a></li>
                    <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'about')}>About Us</a></li>
                    <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'service')}>Services</a></li>
                    <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'review')}>Reviews</a></li>
                    <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'contact')}>Contact</a></li>
                </ul>
                <a className="btn btn-outline btn-sm text-blue-400 bg-slate-100 border-0 border-b-4 border-r-4 border-blue-500 me-4 md:me-2 ms-1">Login</a>
            </div>
        </div>
    );
};

export default Navbar;

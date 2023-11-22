import React, { useEffect, useState } from 'react';
import img from '../assets/images/logoo.jpg'

const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = debounce(() => {
            const position = window.scrollY;
            setScrollPosition(position);
        }, 10);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarPadding = scrollPosition > 150 ? 'py' : 'py-2';
    const bgcolor = scrollPosition > 150 ? 'bg-gray-300' : 'color';
    const visible = scrollPosition > 5 ? 'hidden' : 'flex';

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

            const ease = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

            requestAnimationFrame(smoothScroll);
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
        <>
            <div className={`flex justify-between px-2 lg:px-1 transition items-center py-2 border-b border-slate-300 ${visible}`} style={{ backgroundColor: '#F7F7F7' }}>
                <div>
                    <img className='h-14' src={img} alt="" />
                </div>
                <div className="flex gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                </div>
            </div>

            <div className={`flex justify-between transition fixed w-full lg:max-w-[1200px] z-50  ${bgcolor} ${navbarPadding}`}>
                <div className="navbar-start md:flex md:flex-1">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-sm btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56 font-semibold space-y-3">
                            <li><a href='#' onClick={(event) => handleClick(event, 'about')}>About Us</a></li>
                            <li><a href='#' onClick={(event) => handleClick(event, 'product')}>Products</a></li>
                            <li><a href='#' onClick={(event) => handleClick(event, 'service')}>Services</a></li>
                            <li><a href='#' onClick={(event) => handleClick(event, 'review')}>Reviews</a></li>
                            <li><a href='#' onClick={(event) => handleClick(event, 'contact')}>Contact</a></li>
                        </ul>
                    </div>
                    <a className="hidden lg:flex text-xl font-semibold ps-2">Adventure Soft Ltd.</a>
                </div>
                <div className="navbar-end flex flex-2 items-center">
                    <div className='lg:hidden'>
                    <a className="font-semibold pe-1">Adventure Soft Ltd.</a>
                    </div>
                    <ul className="men hidden lg:flex font-semibold me-2" >
                        <li><a className="btn btn-ghost btn-sm normal-case" href='#' onClick={(event) => handleClick(event, 'main')}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg></a></li>
                        <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'about')}>About Us</a></li>
                        <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'product')}>Products</a></li>
                        <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'service')}>Services</a></li>
                        <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'review')}>Reviews</a></li>
                        <li><a className="btn btn-ghost btn-sm normal-case text-base" href='#' onClick={(event) => handleClick(event, 'contact')}>Contact</a></li>
                    </ul>
                    {/* <a className="btn btn-outline btn-sm text-blue-400 bg-slate-100 border-0 border-b-4 border-r-4 border-blue-500 me-4 md:me-2 ms-1">Login</a> */}
                </div>
            </div>
        </>

    );
};

export default Navbar;

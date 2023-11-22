import React from 'react';
import img1 from '../assets/images/logoo.jpg'
import img2 from '../assets/images/footer.png'


const Footer = () => {
    return (
        <div>
            <div class="flex justify-between items-center py-4 md:py-1 px-2" style={{ backgroundColor: '#F7F7F7' }}>
                <div><img className='h-9 md:h-14 w-28 md:w-40 rounded-sm' src={img1} alt="" /></div>
                <div class="flex justify-center items-center gap-2 md:gap-5">
                    <h3 class="text-sm   md:text-base font-semibold">FOLLOW US</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">z
                        <path
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">z
                        <path
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">z
                        <path
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">z
                        <path
                            d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z" />
                    </svg>
                </div>
            </div>

            {/* Main Footer part */}
            <div className="grid grid-cols-2 md:grid-cols-4 py-5 px-2 text-base-content">
                <aside>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>Adventure Soft Ltd.<br />Providing reliable tech since 2018</p>
                </aside>

                <div class="space-y-1">
                    <h3 class="font-semibold">Services</h3>
                    <p class="hover:text-blue-500 text-sm"><a href="">Branding</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Design</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Marketing</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Advertisement</a></p>
                </div>

                <div class="space-y-1 mt-5 md:mt-0">
                    <h3 class="font-semibold">Company</h3>
                    <p class="hover:text-blue-500 text-sm"><a href="">About us</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Contact</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Jobs</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Press Kit</a></p>
                </div>

                <div class="space-y-1 mt-5 md:mt-0">
                    <h3 class="font-semibold">Legal</h3>
                    <p class="hover:text-blue-500 text-sm"><a href="">Terms of use</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Privacy policy</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Cookie policy</a></p>
                    <p class="hover:text-blue-500 text-sm"><a href="">Others policy</a></p>
                   
                </div>
            </div>

            {/* Copyright Section */}
            <section class="bg-blue-500">
                <div class="flex justify-between px-2 text-white py-3 items-center max-w-[1200px] mx-auto">
                    <div class="md:flex gap-4">
                        <a className='hidden md:flex' href=''>Sitemap</a>
                        <a className='text-sm md:text-base' href=''>Terms Of Service</a>
                        <a  className='hidden md:flex' href=''>Privacy Policy</a>
                        <a  className='hidden md:flex' href=''>Treadmarks</a>
                    </div>
                    <div>
                        <p class="text-white text-sm md:text-base"> &#169; Adventure Soft Ltd. 2023</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
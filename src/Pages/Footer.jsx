import React from 'react';
import img1 from '../assets/images/logoo.jpg'
import img2 from '../assets/images/footer.png'


const Footer = () => {
    return (
        <div>
            <div class="flex justify-between items-center py-4 md:py-1 px-1" style={{backgroundColor:'#F7F7F7'}}>
                <div><img className='h-14 w-48 rounded-sm' src={img1} alt="" /></div>
                <div class="flex justify-center items-center gap-2 md:gap-5">
                    <h3 class="font-semibold">FOLLOW US</h3>
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
            <div class="bg-white">
                <div class="md:grid grid-cols-6 pt-8 ps-5 max-w-[1200px] mx-auto">
                    <div class="grid col-span-1 md:ms-0">
                        <img src={img2} alt="" />
                    </div>
                    <div class="grid col-span-5 pb-8 lg:ms-5">
                        <div class="grid grid-cols-2 md:grid-cols-5 space-y-5 md:space-y-0">
                            <div class="space-y-2 mt-5 md:mt-0">
                                <h3 class="text-sm font-semibold">PRODUCTS</h3>
                                <p class="hover:text-blue-500 text-sm"><a href="">PrismERP</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">LinesPay</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">OneBook</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Centroid</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Core4Switch</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Core4Xtreme</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">PrismVAT</a></p>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-sm font-semibold">PRODUCTS</h3>
                                <p class="hover:text-blue-500 text-sm"><a href="">PrismERP</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">LinesPay</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">OneBook</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Centroid</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Core4Switch</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Core4Xtreme</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">PrismVAT</a></p>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-sm font-semibold">SERVICES</h3>
                                <p class="hover:text-blue-500 text-sm"><a href="">PrismERP</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">LinesPay</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">OneBook</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Centroid</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Core4Switch</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Core4Xtreme</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">PrismVAT</a></p>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-sm font-semibold">COMPANY</h3>
                                <p class="hover:text-blue-500 text-sm"><a href="">PrismERP</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">LinesPay</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">OneBook</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Centroid</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Core4Switch</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">Core4Xtreme</a></p>
                                <p class="hover:text-blue-500 text-sm"><a href="">PrismVAT</a></p>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-sm font-semibold">CONTACT US</h3>
                                <p class="hover:text-blue-500 text-sm flex items-center gap-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">z
                                    <path
                                        d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                                </svg>+00811223344</p>
                                <p class="hover:text-blue-500 text-sm flex items-center gap-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">z
                                    <path
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>+00811223344</p>
                                <p class="hover:text-blue-500 text-sm flex items-center gap-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">z
                                    <path
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>+00811223344</p>
                                <p class="hover:text-blue-500 text-sm flex items-center gap-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">z
                                    <path
                                        d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                                </svg>abc@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* Copyright Section */}
        <section class="bg-blue-500">
            <div class="flex justify-between px-1 text-white py-3 items-center max-w-[1200px] mx-auto">
                <div class="md:flex gap-4">
                    <a>Sitemap</a>
                    <a>Terms Of Service</a>
                    <a>Privacy Policy</a>
                    <a>Treadmarks</a>
                </div>
                <div>
                    <p class="text-white"> &#169; Adventure Soft Ltd. 2023</p>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Footer;
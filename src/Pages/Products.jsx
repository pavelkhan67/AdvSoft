import React from 'react';
import img1 from '../assets/products/Prism_VAT.png'

const Products = () => {
    return (
        <div className="mt-10 lg:mt-12" id='product'>
            {/* <p className='text-4xl text-center font-semibold' style={{ color: 'rgba(31, 52, 122, 1)' }}>----- Our Products -----</p> */}
            <div className='flex gap-2 justify-center items-center font-semibold py-4' style={{ color: 'rgba(31, 52, 122, 1)', backgroundColor:'#f4f0f0'}}>
                <div className='-space-y-5'>
                    <p className='text-xl'>---------</p>
                    <p className='text-xl'>---------</p>
                </div>
                <p className='text-3xl md:text-4xl'> Our Products </p>
                <div className='-space-y-5'>
                    <p className='text-xl'>---------</p>
                    <p className='text-xl'>---------</p>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-4 mt-3 md:mt-5 px-1 lg:px-0'>
                <div className="card bg-base-100 shadow-xl border border-slate-300">
                    <div className="card-body">
                        <img className='h-12 w-11/12 mx-auto' src={img1} alt="" />
                    </div>
                    <div className=' rounded-b-xl text-white ps-2 pe-1 py-4' style={{backgroundColor:'#730B53'}}>
                        <p className='text-xl font-semibold mb-2'>Product-1</p>
                        <p className='text-justify pe-1 lg:pe-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti accusantium corporis itaque minus doloremque pariatur, nesciunt nobis assumenda repudiandae perferendis rem architecto.</p>
                        <a href='' className='underline'>Product Link</a>
                        <a className='btn btn-sm bg-white md:hidden mt-3' href="">Take Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                        <a className='btn btn-sm bg-white hidden md:flex w-fit mt-3' href="">Contact for Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl border border-slate-300">
                    <div className="card-body">
                        <img className='h-12 w-11/12 mx-auto' src={img1} alt="" />
                    </div>
                    <div className=' rounded-b-xl text-white ps-2 pe-1 py-4' style={{backgroundColor:'#079247'}}>
                        <p className='text-xl font-semibold mb-2'>Product-1</p>
                        <p className='text-justify pe-1 lg:pe-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti accusantium corporis itaque minus doloremque pariatur, nesciunt nobis assumenda repudiandae perferendis rem architecto.</p>
                        <a href='' className='underline'>Product Link</a>
                        <a className='btn btn-sm bg-white md:hidden mt-3' href="">Take Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                        <a className='btn btn-sm bg-white hidden md:flex w-fit mt-3' href="">Contact for Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl border border-slate-300">
                    <div className="card-body">
                        <img className='h-12 w-11/12 mx-auto' src={img1} alt="" />
                    </div>
                    <div className=' rounded-b-xl text-white ps-2 pe-1 py-4'  style={{backgroundColor:'#135FC0'}}>
                        <p className='text-xl font-semibold mb-2'>Product-1</p>
                        <p className='text-justify pe-1 lg:pe-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti accusantium corporis itaque minus doloremque pariatur, nesciunt nobis assumenda repudiandae perferendis rem architecto.</p>
                        <a href='' className='underline'>Product Link</a>
                        <a className='btn btn-sm bg-white md:hidden mt-3' href="">Take Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                        <a className='btn btn-sm bg-white hidden md:flex w-fit mt-3' href="">Contact for Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl border border-slate-300">
                    <div className="card-body">
                        <img className='h-12 w-11/12 mx-auto' src={img1} alt="" />
                    </div>
                    <div className='rounded-b-xl text-white ps-2 pe-1 py-4' style={{backgroundColor:'#00265E'}}>
                        <p className='text-xl font-semibold mb-2'>Product-1</p>
                        <p className='text-justify pe-1 lg:pe-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti accusantium corporis itaque minus doloremque pariatur, nesciunt nobis assumenda repudiandae perferendis rem architecto.</p>
                        <a href='' className='underline'>Product Link</a>
                        <a className='btn btn-sm bg-white md:hidden mt-3' href="">Take Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                        <a className='btn btn-sm bg-white hidden md:flex w-fit mt-3' href="">Contact for Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl border border-slate-300">
                    <div className="card-body">
                        <img className='h-12 w-11/12 mx-auto' src={img1} alt="" />
                    </div>
                    <div className=' rounded-b-xl text-white ps-2 pe-1 py-4' style={{backgroundColor:'#135FC0'}}>
                        <p className='text-xl font-semibold mb-2'>Product-1</p>
                        <p className='text-justify pe-1 lg:pe-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti accusantium corporis itaque minus doloremque pariatur, nesciunt nobis assumenda repudiandae perferendis rem architecto.</p>
                        <a href='' className='underline'>Product Link</a>
                        <a className='btn btn-sm bg-white md:hidden mt-3' href="">Take Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                        <a className='btn btn-sm bg-white hidden md:flex w-fit mt-3' href="">Contact for Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl border border-slate-300">
                    <div className="card-body">
                        <img className='h-12 w-11/12 mx-auto' src={img1} alt="" />
                    </div>
                    <div className='rounded-b-xl text-white ps-2 pe-1 py-4'  style={{backgroundColor:'#00265E'}}>
                        <p className='text-xl font-semibold mb-2'>Product-1</p>
                        <p className='text-justify pe-1 lg:pe-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti accusantium corporis itaque minus doloremque pariatur, nesciunt nobis assumenda repudiandae perferendis rem architecto.</p>
                        <a href='' className='underline'>Product Link</a>
                        <a className='btn btn-sm bg-white md:hidden mt-3' href="">Take Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                        <a className='btn btn-sm bg-white hidden md:flex w-fit mt-3' href="">Contact for Service<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                        </svg></a>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Products;
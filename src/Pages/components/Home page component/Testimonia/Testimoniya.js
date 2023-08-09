import React, { useRef, useState } from "react";
import "./Testimoniya.css";
import { AiFillStar } from "react-icons/ai";

import EmblaCarousel from './EmblaCarousel'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'

const OPTIONS = { align: 'center', containScroll: false }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



export default function App() {
    return (
        <>
            <section className="bg-[#14213D] py-20 px-2 md:px-5 lg:px-5">

            {/* ------What I do for you */}
            <div className="IDo pb-16">
                <h1 className='text-white text-2xl md:text-[45px] text-center font pt-10 animation_p uppercase'>What I do for you</h1>
                <p className='text-center pt-3 text-[18px] pb-8 rem'>lease share your project I will assist you accordingly.I will feel <br /> the honor to work with you.</p>
                <div className="flex md:px-16 px-5">
                    <div className="grid lg:grid-cols-3 md:grid-col-3 grid-cols-1 gap-8">

                        <div class="bg-[#111b30] p-6 rounded-2xl py-16">
                            <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg></div>
                            <h4 class="text-2xl font-medium mb-2 text-[#ffff]">Figma To Any Designs</h4>
                            <div className="divider w-[120px] my-1 mb-3 bg-[#0032b1] h-[2px]"></div>
                            <p className='px-2  text-[18px] rem'>I can do any figma file to convert it into  a responsive, professional, and pixel-perfect React.js website.  I am ready to use any npm packages or other CSS/UI frameworks by the project requirements...</p>
                        </div>
                        <div class="bg-[#5014B8] p-6 rounded-2xl py-6">
                            <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></div>
                            <h4 class="text-2xl font-medium mb-2 text-[#dbdbdb]">Frontend Development</h4>
                            <div className="divider w-[120px] my-1 mb-3 bg-[#8d8c8b] h-[2px]"></div>
                            <p className='text-white px-2  text-[18px] rem'>I am able to build a responsive website. I have almost 2 years of experience and complete almost 20+ projects.. I have good skills on <span className='text-[#c4c3c3] '> HTML5, CSS3, SASS, BootStrap, Tailwind CSS, JavaScript, ES6, React.Js, Next.JS, Redux, etc.</span> Or some more Technology...</p>
                        </div>
                        <div class="bg-[#111b30] p-6 rounded-2xl py-6">
                            <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                            <h4 class="text-2xl font-medium mb-2 text-[#ffff]">Backend Development</h4>
                            <div className="divider w-[120px] my-1 mb-3 bg-[#0032b1] h-[2px]"></div>
                            <p className='px-2  text-[18px] rem'> Maintain SDLC - I am able to develop a server Site. <span className='text-[#fff] '> Modular pattern & MVC structure with Node.Js, Express, Middleware, Mongoss, Querys, Cookies setup, Firebase, dotEnv, JWT token, etc. </span> Or Some more technology...</p>
                        </div>
                    </div>
                </div>

            </div>

                <div className="mx-auto">
                    {/*----- section header -----*/}
                    <div className="text-center pb-12 md:pb-10 lg:pb-10">
                        <h5 className="font-bold text-2xl md:text-4xl lg:text-4xl uppercase">What other people say</h5>
                        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#bb7103] h-1"></div>
                        <p className="text-center pt-3 text-[18px] rem md:px-[20%] px-2 ">Don't tire of doing little things for others, because sometimes <br /> those little things occupy the biggest part of their heart.</p>

                    </div>
                    {/*----- section header -----*/}
                    <div className="grid gap-2 gap-y-5 grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto sticky-top items-center justify-center mt-10">
                        <div className="flex justify-start">
                            <img
                                className="w-[70%] p-10"
                                src="https://i.ibb.co/jHTWrKm/Rectangle-35.png"
                                alt="Testimonial image"
                            />
                        </div>

           {/* review section cursel */}
            <main className="sandbox border-x-2 border-indigo-500 ">
             <section className="sandbox__carousel">
                     <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
  
        </main>


                        {/* <div className="shadow-xl">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper "
                            >
                                <SwiperSlide>

                                    <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-3">


                                        <div className="col-span-4">

                                            <div className="mt-4 text-start flex items-center">
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img
                                                            src="https://www.vhv.rs/dpng/d/345-3450347_positive-feedback-feedback-cartoon-hd-png-download.png"
                                                            alt="user"
                                                        />
                                                    </div>
                                                </div>
                                                <div className=" text-start ml-3">
                                                    <h3 className="text-black text-lg text-start ">
                                                        Md.Rasel Khan
                                                    </h3>
                                                    <p className=" text-slate-400 text-sm text-start ">
                                                        Programming hero
                                                    </p>
                                                </div>
                                            </div>

                                            <h5 className="text-justify text-slate-600 font-normal text-md  mt-3 divide-y mb-4 ">
                                                He is such a hard working man who does not know how to give up. I know he will shine in programming field by any means. Best of luck boy.
                                            </h5>
                                            <span className="text-black">
                                                <hr />
                                            </span>
                                            <div className="flex mt-2">
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-3">


                                        <div className="col-span-4">

                                            <div className="mt-4 text-start flex items-center">
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img
                                                            src="https://www.w3schools.com/howto/img_avatar.png"
                                                            alt="user"
                                                        />
                                                    </div>
                                                </div>
                                                <div className=" text-start ml-3">
                                                    <h3 className="text-black text-lg text-start ">
                                                        Md.Johirul Islam
                                                    </h3>
                                                    <p className=" text-slate-400 text-sm text-start ">
                                                        Senior Executive Mocdit
                                                    </p>
                                                </div>
                                            </div>

                                            <h5 className="text-justify text-slate-600 font-normal text-md  mt-3 divide-y mb-4 font-serif">
                                                Very passionate about programing and really super talented, hard working and punctual boy. I know him through programing and he proved himself to remember him until I escape this programing field. Best wishes to you Mr rising start Programmer 💖
                                            </h5>
                                            <span className="text-black">
                                                <hr />
                                            </span>
                                            <div className="flex mt-2">
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="bg-white rounded-xl py-12 px-10 grid grid-cols-5 gap-3">


                                        <div className="col-span-4">

                                            <div className="mt-4 text-start flex items-center">
                                                <div className="avatar">
                                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img
                                                            src="https://i.ibb.co/HB7Q1FD/young-bearded-man-with-striped-shirt-273609-5677.jpg"
                                                            alt="user"
                                                        />
                                                    </div>
                                                </div>
                                                <div className=" text-start ml-3">
                                                    <h3 className="text-black text-lg text-start ">
                                                        Md.Rakib Hasan
                                                    </h3>
                                                    <p className=" text-slate-400 text-sm text-start ">
                                                        Senior Executive Tech iT
                                                    </p>
                                                </div>
                                            </div>

                                            <h5 className="text-justify text-slate-600 font-normal text-md  mt-3 divide-y mb-4 font-serif">
                                                Very passionate about programing and really super talented, hard working and punctual boy. I know him through programing and he proved himself to remember him until I escape this programing field. Best wishes to you Mr rising start Programmer 💖
                                            </h5>
                                            <span className="text-black">
                                                <hr />
                                            </span>
                                            <div className="flex mt-2">
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                                <span className="text-orange-500 text-2xl font-bold">
                                                    <AiFillStar />
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                </SwiperSlide>



                            </Swiper>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    );
}

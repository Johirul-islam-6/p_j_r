import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import './Swiper_style.css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from 'react-router-dom';


const Project_Lisht = () => {

    const [imgss, setImg] = useState()
    useEffect(() => {
        fetch('https://web-technology-server-site.vercel.app/simple')
            .then(res => res.json())
            .then(data => {
                setImg(data)
            })

    }, [])

    return (
        <>
            <>

                <h1 className='text-white text-4xl text-center font pt-10 animation_p uppercase'>My latest Projects</h1>
                <p className='text-center pt-3 text-[18px]'>I have been complete 10+ projects last 1 month . Here I'm showing <br /> some best project . If you want to see others project just go to <br /> my Github repository .</p>

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >

                    {imgss?.map(product => <>
                        <SwiperSlide>
                            <div key={product?.id} className="card z-50">
                                <h2 className="text-center py-5 text-[16px] md:text-[20px]">Site Name : <span className='text-amber-700'>{product?.name}</span></h2>
                                <figure><img className='slider_Image' src={product?.img} alt="product image" /></figure>
                                <div className="card-body ">

                                    <Link to={`/simple-project/${product?.id}`} className='btn btn-primary'>Details</Link>

                                    <div className="card-actions justify-end">

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                    )}

                    <SwiperSlide>
                        <div className="w-[100%] flex justify-center  md:h-[90vh] ">
                            <Link to={`/project`} className="btn btn-primary flex mt-[70%] md:mt-[50%]">More Porjects..</Link>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </>
            {/* ------What I do for you */}
            <div className="IDo pb-16">
                <h1 className='text-white text-4xl text-center font pt-10 animation_p uppercase'>What I do for you</h1>
                <p className='text-center pt-3 text-[18px] pb-8'>lease share your project I will assist you accordingly.I will feel <br /> the honor to work with you.</p>
                <div className="flex md:px-16 px-5">
                    <div className="grid lg:grid-cols-3 md:grid-col-3 grid-cols-1 gap-8">

                        <div class="bg-[#111b30] p-6 rounded-2xl py-16">
                            <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg></div>
                            <h4 class="text-2xl font-medium mb-2">Figma To Any Designs</h4>
                            <div className="divider w-[120px] my-1 mb-3 bg-[#0032b1] h-[2px]"></div>
                            <p className='font-mono text-[18px]'>I can do any figma file to convert it into  a responsive, professional, and pixel-perfect React.js website.  I am ready to use any npm packages or other CSS/UI frameworks by the project requirements...</p>
                        </div>
                        <div class="bg-[#5014B8] p-6 rounded-2xl py-6">
                            <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></div>
                            <h4 class="text-2xl font-medium mb-2 text-white">Frontend Development</h4>
                            <div className="divider w-[120px] my-1 mb-3 bg-[#916301] h-[2px]"></div>
                            <p className='text-white font-mono text-[18px]'>I am able to build a responsive website. I have almost 2 years of experience and complete almost 20+ projects.. I have good skills on <span className='text-amber-600 '> HTML5, CSS3, SASS, BootStrap, Tailwind CSS, JavaScript, ES6, React.Js, Nent.JS, Redux, SwiperJS,</span> Or some more Technology...</p>
                        </div>
                        <div class="bg-[#111b30] p-6 rounded-2xl py-6">
                            <div class="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                            <h4 class="text-2xl font-medium mb-2">Backend Development</h4>
                            <div className="divider w-[120px] my-1 mb-3 bg-[#0032b1] h-[2px]"></div>
                            <p className='font-mono text-[18px] '>My experience is 1 year in server Site. I am able to create Server site <span className='text-amber-400 '>MVC structure  with Node.Js, Express, Middleware, Mongoss, REST API, Firebase, dotEnv, JWT token  in Local Store, </span> Or Some more technology...</p>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Project_Lisht;
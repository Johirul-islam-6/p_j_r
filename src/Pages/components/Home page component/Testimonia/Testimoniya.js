import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimoniya.css";
import { AiFillStar } from "react-icons/ai";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <section className="bg-[#14213D] py-20 px-2 md:px-20 lg:px-20">

                <div className="container mx-auto">
                    {/*----- section header -----*/}
                    <div className="text-center pb-12 md:pb-10 lg:pb-10">
                        <h5 className="font-bold text-2xl md:text-4xl lg:text-4xl uppercase">What other people say</h5>
                        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#bb7103] h-1"></div>
                        <p className="text-center pt-3 text-[18px]">Don't tire of doing little things for others, because sometimes <br /> those little things occupy the biggest part of their heart.</p>

                    </div>
                    {/*----- section header -----*/}
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto sticky-top items-center">
                        <div className="flex justify-start">
                            <img
                                className="w-[70%]"
                                src="https://i.ibb.co/jHTWrKm/Rectangle-35.png"
                                alt="Testimonial image"
                            />
                        </div>
                        <div className="shadow-xl">
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

import React, { useEffect } from 'react';
import './About.css'
import videosss from '../../assent/LiveVideo/video.mp4'
import AOS from 'aos';


const About = () => {

    useEffect(() => {

        AOS.init();

    }, [])

    return (
        <div className='bg-[#14213D]  md:pb-10'>
            <div className="flex w-[100%] h-[100%] pt-[90px] md:pb-10">
                <img data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    src="https://i.ibb.co/BNb4S22/Blue-Tosca-Geometric-Technology-Linkedln-Banner.png" alt="" />
            </div>

            <section className='flex relative overflow-hidden  justify-center items-center w-[100%] h-[140vh] md:h-[65vh] img-gradient'>
                <video className='w-[100%] hidden md:flex'
                    autoPlay
                    loop
                    muted
                >
                    <source className='w-[100%] h-[65vh]' src={videosss} type="video/mp4" />

                </video>
                <div className="about_text absolute top-10 justify-center flex z-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:px-20">
                        <div className="div">
                            <img src="https://i.ibb.co/jk8Q92Q/chaare.png" alt="" />
                        </div>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="div px-2">
                            <h1 className='text-2xl md:text-6xl text-center pb-5 text-white'>About Me</h1>
                            <h1 className='text-start text-amber-500 text-[22px]'>Junior web developer</h1>
                            <p className='md:text-[18px]'>My goal is to be an expert in full-stack web development. Constantly, In addition to my junior development, I am Developing new skills
                                or knowledge in website development. I want my future to be a full-stack web developer and I have the creative ability to update
                                anything. I want to work in this position in your company. Honest and hard work gives me the courage to do work better.
                                <br /> <br />  In my previous role, I contributed leadership, teamwork, and layout design toward team efforts and web development improvements. I am progressive-minded and in tune with new developments in my field. I have proven to be effective and collaborative with strong interpersonal talents.</p>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default About;
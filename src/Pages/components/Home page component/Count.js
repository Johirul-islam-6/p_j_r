import React from 'react';
import './coun.css'
import { motion } from 'framer-motion'

const Count = () => {

    return (
        <>
            <section className=''>
                <div className="flex bg-image justify-center items-center img-gradient2 h-[90vh] md:h-[60vh] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-10 ">
                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear"

                            className='block text-[17px] text-[#e1e0e0] text-center pt-2 z-50 relative left-[0px] md:left-[0px]'>
                            <div className="block pt-12 md:pt-0">
                                <span className='md:block H1 text-[70px] md:text-[90px] text-[#FCA311] ' >56%</span>
                                <span className='pt-5 block smallH1'> Finishing web service<br /> Skills</span>
                            </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1100" data-aos-easing="linear"
                            //  animate={{
                            //     x: 0,
                            //     y: 0,
                            //     scale: 1,
                            //     rotate: 0,
                            //     opacity: 1
                            // }}
                            //     transition={{ type: "tween", duration: 2 }}
                            //     initial={{ opacity: 0 }}
                            //     exit={{ opacity: 1 }}

                            className='block text-[17px] text-[#e1e0e0] text-center pt-2 z-50 my-0 md:my-0 md:mx-20 mx-0'>
                            <div className="block">
                                <span className='md:block H1 md:text-[90px] text-[80px] text-[#FCA311] ' >9+</span>
                                <span className='pt-5 block smallH1'>Provide Programming <br />language
                                    & Library</span>
                            </div>
                        </div>

                        <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear"

                            className='block md:hidden text-[17px] text-[#e1e0e0] text-center z-50 relative bottom-0 left-[0px]'>
                            <div className="block pb-12">
                                <span className='block H1 text-[90px] text-[#FCA311] pb-2' >20+</span>
                                <span className='block mt-5 smallH1'>Local project complite<br /> Develop Skill</span>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear"

                            className='hidden md:block text-[17px] text-[#e1e0e0] text-center z-50 relative bottom-0 left-[0px]'>
                            <div className="block pb-12">
                                <span className='block H1 text-[90px] text-[#FCA311] pb-2' >20+</span>
                                <span className='block mt-5 smallH1'>Local project complite<br /> Develop Skill</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Count;
import React, { useEffect } from 'react';
import './Contact.css'
import AOS from 'aos';
import { motion, useTime, useTransform } from 'framer-motion'
import GoogleMapss from './GoogleMapss';
import EmailSendMessage from './EmailSendMessage';

const Contact = () => {
    useEffect(() => {

        AOS.init();

    }, [])


    //motion animtaiton


    const time = useTime();
    const rotate = useTransform(time, [0, 2000], [0, 360], { clamp: true });


    // setTimeout(() => {

    // }, 5000)

    return (
        <>
            <section className='px-5 pt-20 bg-[#14213D]'>
                <div className="grid grid-flow-cols-1 md:grid-cols-2 w-[100%] md:h-[80vh] h-[150vh] md:gap-5 md:mt-6">
                    {/* -------------image ------------- */}
                    <div data-aos="fade-up" data-aos-duration="3000" className="contact_image w-[100%] md:p-5 md:mt-10 xl:mt-0 h-[50vh] md:h-[70vh]"></div>
                    {/* -----------------content------------------ */}
                    <div className="div w-[100%] mx-auto flex lg:mt-8 xl:mt-10 ">
                        <div className="block">
                            <div className="content px-2 xl:ml-16">
                                <motion.h1
                                    animate={{
                                        x: -250,
                                        y: 0,
                                        scale: 1,
                                        rotate: 0,
                                        opacity: 1
                                    }}
                                    transition={{ type: "tween", duration: 1.9 }}
                                    initial={{ opacity: 0 }}
                                    exit={{ opacity: 8 }}

                                    className='uppercase text-4xl relative right-[-250px] text-amber-500 pb-5 fonts'>If You Want to contact me</motion.h1>
                                <h1 className='text-justify-center small_text'>My goal is to be an expert in full-stack web development. Constantly, In addition to my junior development, I am Developing new skills
                                    or knowledge in website development. I want my future to be a full-stack web developer and I have the creative ability to update
                                    anything.<br />
                                    <br />
                                    I'm Almost 65% Web Development Work Done.

                                </h1>
                            </div>
                            {/* -----------socil medea icon------------ */}
                            <div className="div md:w-[50%] sm:mx-auto md:mt-14 block">
                                <div className="divider py-5 ">Contact Social Media</div>
                                <div className="grid grid-cols-5 gap-x-6 justify-center px-8 md:px-0">
                                    <motion.a style={{ rotate }}
                                        animate={{
                                            x: 0,
                                            y: 0,
                                            scale: 1,
                                            // rotate: 360,
                                            opacity: 1
                                        }}
                                        transition={{ type: "tween", }}
                                        initial={{ opacity: 0 }}
                                        exit={{ opacity: 8 }}

                                        href='https://www.facebook.com/rachel.kan.3591267' className="block w-8 md:w-10 cursor-pointer">
                                        <img className='w-[100%] mr-10 h-8 md:h-10' src="https://i.ibb.co/X4xzLNK/Facebook.png" alt="" />
                                        <motion.h1
                                            animate={{
                                                x: 0,
                                                y: 0,
                                                scale: 1,
                                                rotate: 0,
                                                opacity: 1
                                            }}
                                            transition={{ type: "tween", duration: 5 }}
                                            initial={{ opacity: 0 }}
                                            exit={{ opacity: 0 }}
                                            className='text-[12px]'
                                        >Facbook</motion.h1>
                                    </motion.a>
                                    <a href='https://www.linkedin.com/in/md-johirul-islam-rasel-4263b6257' className="block w-8 md:w-10 cursor-pointer">
                                        <img className='w-[100%] mr-10 h-8 md:h-10' src="https://i.ibb.co/5jz85y9/LinkedIN.png" alt="" />
                                        <h1 className='text-[12px]' >Linkedin</h1>
                                    </a>
                                    <motion.a
                                        animate={{
                                            x: 0,
                                            y: 0,
                                            scale: 1,
                                            // rotate: 360,
                                            opacity: 1
                                        }}
                                        transition={{ type: "tween", }}
                                        initial={{ opacity: 0 }}
                                        exit={{ opacity: 8 }}

                                        href='https://web.whatsapp.com/' className="block w-8 md:w-10 cursor-pointer">
                                        <img className='w-[100%] md:h-10 h-8' src="https://i.ibb.co/h17B6gg/WhatsApp.png" alt="" />
                                        <motion.h1
                                            animate={{
                                                x: 0,
                                                y: 0,
                                                scale: 1,
                                                rotate: 0,
                                                opacity: 1
                                            }}
                                            transition={{ type: "tween", duration: 5 }}
                                            initial={{ opacity: 0 }}
                                            exit={{ opacity: 0 }}
                                            className='text-[12px]'
                                        >Whats</motion.h1>
                                    </motion.a>
                                    <a href='https://github.com/Johirul-islam-6' className="block w-8 md:w-10 cursor-pointer">
                                        <img className='w-[100%] h-8 md:h-10  mx-2 bg-slate-50 rounded-full' src="https://i.ibb.co/PQPDSqd/Github.png" alt="" />
                                        <h1 className='text-[12px] pl-2'>GitHub</h1>
                                    </a>
                                    <motion.a style={{ rotate }}
                                        animate={{
                                            x: 0,
                                            y: 0,
                                            scale: 1,
                                            // rotate: 360,
                                            opacity: 1
                                        }}
                                        transition={{ type: "tween", }}
                                        initial={{ opacity: 0 }}
                                        exit={{ opacity: 8 }}

                                        href='https://twitter.com/Johirul35265026' className="block w-8 md:w-10 cursor-pointer">
                                        <img className='w-[100%] h-8 md:h-10' src="https://i.ibb.co/3cKj7G8/Twitter.png" alt="" />
                                        <motion.h1
                                            animate={{
                                                x: 0,
                                                y: 0,
                                                scale: 1,
                                                rotate: 0,
                                                opacity: 1
                                            }}
                                            transition={{ type: "tween", duration: 5 }}
                                            initial={{ opacity: 0 }}
                                            exit={{ opacity: 0 }}
                                            className='text-[12px]'
                                        >Twitter</motion.h1>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <GoogleMapss />
            <EmailSendMessage></EmailSendMessage>
        </>
    );
};

export default Contact;
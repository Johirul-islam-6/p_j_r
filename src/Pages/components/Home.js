import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CeoPhot from '../../assent/images/raselkhanbackground.png'
import Count from './Home page component/Count';
import { motion } from 'framer-motion'
import SkillsCard from './Home page component/Skills Card/SkillsCard';
import "./Home.css";
import Testimoniya from './Home page component/Testimonia/Testimoniya';
import Design from './Design/Design';
import { ContactFrom } from './ContactFrom';


const Home = () => {
    //animation 
    // const hello = true

    return (
        <div className='bg-[#14213D]'>
            <section className="bg-[#14213D] dark:text-gray-100 lg:px-20 pt-10">
                <div className="container flex md:flex-col justify-center xl:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row flex-col-reverse lg:justify-between md:h-[95vh]">
                    {/* ------sm size text----- */}
                    <motion.div
                        animate={{
                            x: 0,
                            y: -200,
                            scale: 1,
                            rotate: 0,
                            opacity: 1
                        }}
                        transition={{ type: "tween", duration: 2.8 }}
                        initial={{ opacity: -1 }}
                        exit={{ opacity: 1 }}

                        className=" md:hidden flex flex-col justify-center p-6 text-center relative bottom-[-200px] rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

                        <main class="Text_container mb-6">
                            <p className='animation_p'>Hello 👋 I'm Johir <br />My Current Status</p>
                            <section class="animation ">
                               <div class="first">
                                    <div className='text-[29px]'>Front-End developer</div>
                                </div>
                                <div class="second">
                                    <div className='text-[29px]'>Mid Back-End developer</div>
                                </div>
                                <div class="third">
                                    <div className='text-[29px]'>Project Analyst</div>
                                </div>

                            </section>
                            <p className=" work-sans mt-6 mb-8 text-lg lg:text-[18px] sm:mb-12 work-sans">Always love to learn something new . Love to get error and handle error . If I learn something special I share this with my friends . One secret about me I'm very fast learner .</p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-6">
                                <Link to='/cetagors' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-amber-500 dark:text-slate-200 btn-1 hover:opacity-80">My Current Status</Link>
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/md-johirul-islam-rasel-4263b6257/" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Hire me</a>
                            </div>
                        </main>


                    </motion.div>

                    {/* show only lg  size */}
                    <motion.div
                        animate={{
                            x: 0,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            opacity: 1
                        }}
                        transition={{ type: "tween", duration: 1.9 }}
                        initial={{ opacity: -1 }}
                        exit={{ opacity: 1 }}

                        className="hidden lg:flex xl:hidden flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
       

                        <main class="Text_container">
                            <p>Hello 👋 I'm</p>
                            <section class="animation">
                                  <div class="first">
                                    <div className='text-[26px]'>Front-End developer</div>
                                </div>
                                <div class="second">
                                    <div className='text-[26px]'>Mid Back-End developer</div>
                                </div>
                                <div class="third">
                                    <div className='text-[26px]'>Project Analyst</div>
                                </div>
                            </section>
                        </main>
                        <p className=" work-sans mt-6 mb-8 text-lg lg:text-[18px] work-sans sm:mb-12">Always love to learn something new. Love to get error and handle error. If I learn something special I share this with my friends. One secret about me I'm very fast learner.</p>

                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/cetagors' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-amber-500 dark:text-slate-200 btn-1 hover:opacity-80">Our Courses</Link>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/md-johirul-islam-rasel-4263b6257/" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Hire me</a>
                        </div>
                    </motion.div>
                    {/* ----text lg size + start -------- */}
                    <motion.div
                        animate={{
                            x: 320,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            opacity: 1
                        }}
                        transition={{ type: "tween", duration: 2.3 }}
                        initial={{ opacity: -2 }}
                        exit={{ opacity: 1 }}

                        className="hidden xl:flex flex-col justify-center p-6 text-center absolute top-[25%] left-[-250px] rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <main class="Text_container mb-6">
                            <p className='animation_p '>Hello 👋 I'm Johir <br />My Current Status</p>
                            <section class="animation ">
                                <div class="first">
                                    <div className='text-[29px] playfair'>Front-End developer</div>
                                </div>
                                <div class="second">
                                    <div className='text-[29px] playfair'>Mid Back-End developer</div>
                                </div>
                                <div class="third">
                                    <div className='text-[29px] playfair'>Project Analyst</div>
                                </div>

                            </section>
                            <p className=" work-sans mt-6 mb-8 text-lg lg:text-[18px] sm:mb-12">Always love to learn something new . Love to get error and handle error . If I learn something special I share this with my friends . One secret about me I'm very fast learner .</p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-6">
                                <Link to='/cetagors' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-amber-500 dark:text-slate-200 btn-1 hover:opacity-80">My Services</Link>
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/md-johirul-islam-rasel-4263b6257/" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Hire me</a>
                            </div>
                        </main>


                    </motion.div>
                    {/* ----image show xl + small size---- */}
                    <motion.div
                        animate={{
                            x: -200,
                            y: 0,
                            scale: 1.5,
                            rotate: 0,
                            opacity: 1
                        }}
                        transition={{ type: "tween", duration: 2 }}
                        initial={{ opacity: -1 }}
                        exit={{ opacity: 1 }}
                        className="hidden xl:flex items-center justify-center align-middle p-1 md:px-2 absolute top-52 right-[-70px] h-69 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                        <img src='https://i.ibb.co/74dCMRZ/profile-baground22.png' alt="" className="object-contain h-72 md:h-64 sm:h-80 lg:h-72 xl:h-112 2xl:h-128 rounded-sm lg:mt-5 " />
                    </motion.div>
                    {/* ----image show olnly small size---- */}
                    <motion.div
                        animate={{
                            x: 0,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            opacity: 1
                        }}
                        transition={{ type: "tween", duration: 2.5 }}
                        initial={{ opacity: -1 }}
                        exit={{ opacity: 1 }}
                        className="flex xl:hidden items-center justify-center p-1 md:p-5 mt-2  h-69 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                        <img src='https://i.ibb.co/74dCMRZ/profile-baground22.png' alt="" className="object-contain h-72 md:h-64 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-sm mt-10" />
                    </motion.div>
                    {/* show only md range  size */}
                    <motion.div
                        animate={{
                            x: 0,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            opacity: 1
                        }}
                        transition={{ type: "tween", duration: 1.9 }}
                        initial={{ opacity: -1 }}
                        exit={{ opacity: 1 }}

                        className="hidden md:block lg:hidden flex-col justify-center px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

                        <main class="Text_container mb-6">
                            <p className='animation_p'>Hello 👋 I'm Johir <br /> My Current Status</p>
                            <section class="animation my-10">
                                 <div class="first">
                                    <div className='text-[24px]'>Front-End developer</div>
                                </div>
                                <div class="second">
                                    <div className='text-[24px]'>Mid Back-End developer</div>
                                </div>
                                <div class="third">
                                    <div className='text-[24px]'>Project Analyst</div>
                                </div>

                            </section>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-6">
                                <Link to='/cetagors' rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-amber-500 dark:text-slate-200 btn-1 hover:opacity-80">Our Services</Link>
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/md-johirul-islam-rasel-4263b6257/" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Hire me</a>
                            </div>
                        </main>
                    </motion.div>

                </div>
            </section>
            <Count />
            <SkillsCard />
            <Design />
           
            <Testimoniya />
            <ContactFrom/>
        </div>
    );
};

export default Home;
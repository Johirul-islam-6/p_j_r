import React from 'react';
import './SkillCard.css'
import JavaScript from '../../../../assent/logo/javss.png'
import ReactJS from '../../../../assent/logo/reacts.png'
import Redux from '../../../../assent/logo/redux.png'
import MongoDb from '../../../../assent/logo/Mongo.png'
import Node from '../../../../assent/logo/note.png'
import Express from '../../../../assent/logo/expresse.png'
import Tailwind from '../../../../assent/logo/tail.png'
import BootStrap from '../../../../assent/logo/bootstap.png'
import MatarialUi from '../../../../assent/logo/matral.png'
import NextJS from '../../../../assent/logo/n.png'
import Firebase from '../../../../assent/logo/fire.png'
import { Link } from 'react-router-dom';

const SkillsCard = () => {



    return (
        <>
            <div className='w-[100%] md:px-20 bg-[#14213D]'>

                <h1 className='py-14 text-4xl text-center fonts'>Development Skill</h1>

                <div className=" grid grid-cols-1 md:flex justify-between ">
                    <div className="hidden md:block droupdown mr-5">
                        <Link to={``} className='w-[120px] py-3 rounded-lg font-bold btn-primary text-center px-5 my-2 mx-auto block' >All</Link>
                        <Link to={`/development/mern`} className='w-[120px] py-3 rounded-lg font-bold btn-primary text-center px-5 my-2 mx-auto block'>MARN</Link>
                        <Link to={`development/fontend`} className='w-[120px] py-3 rounded-lg font-bold btn-primary text-center px-5 my-2 mx-auto block'>FrontEnd</Link>
                        <Link to={`/development/backend`} className='w-[120px] py-3 rounded-lg font-bold btn-primary text-center px-5 my-2 mx-auto block'>BackEnd</Link>
                    </div>
                    <div className="flex md:hidden droupdown justify-center my-10">
                        <Link to={``} className='btn btn-outline' >All</Link>
                        <Link to={`/development/mern`} className='btn btn-outline mx-2'>MARN</Link>
                        <Link to={`development/fontend`} className='btn btn-outline'>FrontEnd</Link>
                        <Link to={`/development/backend`} className='btn btn-outline mx-2'>BackEnd</Link>
                    </div>

                    <>
                        {/* show only sm to md */}
                        <div className="grid grid-cols-2 md:hidden auto-cols-max gap-x-5 gap-y-8 w-[100%] bg-balck md:px-10  items-center">
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px] font-bold'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={JavaScript} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>React.JS</h1>
                                    <img className='w-[100px] h-[80px]' src={ReactJS} alt="" />
                                </div>
                            </div>

                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={MongoDb} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={Firebase} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={Node} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={Express} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={NextJS} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={Tailwind} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={BootStrap} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[22px]'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={MatarialUi} alt="" />
                                </div>
                            </div>

                        </div>
                        {/* show only md to lg */}
                        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:hidden auto-cols-max gap-x-5 gap-y-8 w-[100%] bg-balck md:px-10  items-center">
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[20px] font-bold'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={JavaScript} alt="" />
                                </div>
                            </div>
                            <div className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>React.js</h1>
                                    <img className='w-[100px] h-[80px]' src={ReactJS} alt="" />
                                </div>
                            </div>

                            <div data-aos="zoom-in-down" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[20px] font-bold'>MongoDB</h1>
                                    <img className='w-[100px] h-[80px]' src={MongoDb} alt="" />
                                </div>
                            </div>
                            <div className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>Firebase</h1>
                                    <img className='w-[100px] h-[80px]' src={Firebase} alt="" />
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-4 text-[20px] font-bold'>Node.js</h1>
                                    <img className='w-[100px] h-[80px]' src={Node} alt="" />
                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>Express.js</h1>
                                    <img className='w-[100px] h-[80px]' src={Express} alt="" />
                                </div>
                            </div>
                            <div className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>Next.js</h1>
                                    <img className='w-[100px] h-[80px]' src={NextJS} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-4 text-[20px] font-bold'>Tailwind</h1>
                                    <img className='w-[100px] h-[80px]' src={Tailwind} alt="" />
                                </div>
                            </div>
                            <div className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-4 text-[20px] font-bold'>BootStrap</h1>
                                    <img className='w-[100px] h-[80px]' src={BootStrap} alt="" />
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>Mataril</h1>
                                    <img className='w-[100px] h-[80px]' src={MatarialUi} alt="" />
                                </div>
                            </div>

                        </div>
                        {/* --xl show only-- */}
                        <div id='xldiv' className="hidden xl:grid xl:grid-cols-5 gap-x-5 gap-y-8 w-[100%] items-center">
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[20px] font-bold'>Javascript</h1>
                                    <img className='w-[100px] h-[80px]' src={JavaScript} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>React.js</h1>
                                    <img className='w-[100px] h-[80px]' src={ReactJS} alt="" />
                                </div>
                            </div>

                            <div data-aos="zoom-in-down" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-2 text-[20px] font-bold'>MongoDB</h1>
                                    <img className='w-[100px] h-[80px]' src={MongoDb} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>Firebase</h1>
                                    <img className='w-[100px] h-[80px]' src={Firebase} alt="" />
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-4 text-[20px] font-bold'>Node.js</h1>
                                    <img className='w-[100px] h-[80px]' src={Node} alt="" />
                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>Express.js</h1>
                                    <img className='w-[100px] h-[80px]' src={Express} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>Next.js</h1>
                                    <img className='w-[100px] h-[80px]' src={NextJS} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-4 text-[20px] font-bold'>Tailwind</h1>
                                    <img className='w-[100px] h-[80px]' src={Tailwind} alt="" />
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-4 text-[20px] font-bold'>BootStrap</h1>
                                    <img className='w-[100px] h-[80px]' src={BootStrap} alt="" />
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear" className="SkillCArd border10px">
                                <div className="flex justify-between align-middle items-center ml-[3px] bg-[#14213D]  border10px">
                                    <h1 className='pl-3 text-[20px] font-bold'>Mataril</h1>
                                    <img className='w-[100px] h-[80px]' src={MatarialUi} alt="" />
                                </div>
                            </div>

                        </div>
                    </>

                </div>


            </div>
        </>
    );
};

export default SkillsCard;
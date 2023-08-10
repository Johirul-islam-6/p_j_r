import React from 'react';
import './Resume.css'
import { Link } from 'react-router-dom';
import Mern from '../../assent/Resume/Mern.png'
import FrontEnd from '../../assent/Resume/front.png'
import BackEnd from '../../assent/Resume/junior.png'

const ResumeMain = () => {
    return (
        <>
            <div className="w-[100%] md:h-[130vh] bg-[#14213D] pt-24 px-10 flex justify-center items-center">




                <a href='https://drive.google.com/file/d/1QULluTiLuFzAypl5xBy4VnORvTNkunrp/view?pli=1' className='btn btn-primary '>Downlode Resume</a>

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2 md:px-20">
                    <div className="block">
                        <Link to={`/pdf/mern`} > <button className="btn btn-primary mx-auto block ">MERN STACK DEVELOPMENT LINK</button> </Link>
                        <h1 className='text-[20px] font-bold py-5 text-center uppercase'>Mern Stack Developer Resume</h1>
                        <div className="resume_img">
                            <img src={Mern} alt="" />
                        </div>
                    </div>
                    <div className="block">
                        <Link to={`/pdf/front`} > <button className="btn btn-primary mx-auto block ">FRONTEND WEB DEVELOPMENT LINK</button> </Link>
                        <h1 className='text-[20px] font-bold py-5 text-center uppercase'>FrontEnd Web Developer Resume</h1>
                        <div className="resume_img">
                            <img src={FrontEnd} alt="" />
                        </div>
                    </div>
                    <div className="block">
                        <Link to={`/pdf/backend`} > <button className="btn btn-primary mx-auto block ">JUNIOR WEB DEVELOPMENT LINK</button> </Link>
                        <h1 className='text-[20px] font-bold py-5 text-center uppercase'>JUnior Web Developer Resume</h1>
                        <div className="resume_img">
                            <img src={BackEnd} alt="" />
                        </div>
                    </div>
                </div> */}


            </div>
        </>
    );
};

export default ResumeMain;
import React, { useEffect } from 'react';
import { FaPaperPlane, FaRegHandPointRight, } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from 'aos';

const CourseCard = ({ course, loding }) => {
    // console.log(course)

    //animation 
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" className="card  my-5 p-2 md:w-96 bg-gray-800 shadow-xl md:p-4 sm:px-2 pt-2  drop-shadow-[0_35px_35px_ #14213D]">
                <figure><img className='rounded-xl  md:h-[250px]' src={course?.image} alt="Shoes" /></figure>
                <div className="card-body p-0 py-5 px-2 ">
                    <h2 className="card-title text-blue-200 text-md lg:text-2xl">
                        {course?.name}
                        <div className="badge badge-secondary "><p className='text-[15px]'>{course?.update}</p></div>
                    </h2>
                    {
                        course?.paragrap.length > 20 ?
                            <>
                                <p className=''>{course?.paragrap.slice(0, 180)}<span className='text-blue-300 cursor-pointer text-center'> More..</span></p>
                                <div className="card-actions justify-center mt-3 ">
                                    <Link to={`/details/${course?.id}`} className="btn btn-outline btn-success">{course?.title.slice(0, 13)} Details <span className='pl-2 text-sm'> <FaPaperPlane></FaPaperPlane></span></Link>
                                </div>
                            </> : <p>h</p>

                    }

                </div>
            </div>


        </>
    );
};

export default CourseCard;
import React, { useEffect } from 'react';
import { FaPaperPlane, FaRegHandPointRight, } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from 'aos';

const CourseCard = ({ course }) => {
    // console.log(course)

    //animation 
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="1200" className="card  my-5 px-2 lg:w-96 bg-base-100 shadow-xl  md:mx-3 md:px-2 sm:px-2  drop-shadow-[0_35px_35px_rgba(10,0,3,.25)] hover:bg-base-200">
                    <figure><img className='pt-2 rounded-xl' src={course?.course_photo} alt="Shoes" /></figure>
                <div className="card-body p-0 py-5 lg:p-8 ">
                        <h2 className="card-title text-blue-200 text-sm lg:text-2xl">
                             {course?.title}
                            <div className="badge badge-secondary">New</div>
                        </h2>
                        {
                            course.Paragrap.length > 20 ?
                            <>
                                <p className=''>{course?.Paragrap.slice(0, 50)}<span className='text-blue-300 cursor-pointer'> More..</span></p>
                                <div className="card-actions justify-center mt-3 ">
                                    <Link to={`/courses/${course?._id}`} className="btn btn-outline btn-success">Course Details <span className='pl-2 text-sm'> <FaPaperPlane></FaPaperPlane></span></Link>
                                </div>
                            </> : <p>heloo</p>

                        }
                   
                    </div>
                </div>
         
           
        </>
    );
};

export default CourseCard;
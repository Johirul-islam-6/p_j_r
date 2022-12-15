import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Loding } from '../../components/loding/Loding';

import CourseCard from './CourseCard';


const AllCourse = () => {
    const development = useLoaderData();
    const [courses, setCourse] = useState([]);
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        //server fetch
        fetch('https://web-technology-server-site.vercel.app/skills')
            .then(result => result.json())
            .then(data => {
                setCourse(data)
                setLoding(false)
            })

    }, [])

    if (loding) {
        return <div className="flex h-[80vh] w-[100%] justify-center bg-[#14213D] items-center">
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-500"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
            </div>
        </div>
    }


    console.log(development);

    return (

        <div className='flex  bg-[#0e182d] justify-center w-[100%]'>
            {/* ---------card------ */}
            <div className="container mt-24 mx-5 w-[90%]">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-5">

                    {
                        development?.map(courses => <CourseCard loding={loding} course={courses} key={courses._id}></CourseCard>)
                    }

                </div>
            </div>
            {/* -----------Right side nav--------------- */}

            <div className='bg-gray-800 text-white lg:px-1 drop-shadow-2xl mt-6 hidden md:block pt-14 w-[14%]'>
                {
                    development?.map(courses =>
                        <button key={courses._id} className=" block py-3 my-1 rounded-sm mx-auto">
                            <Link key={courses._id} className='right-side-textss text-start text-decoration-none text-white uppercase text-[15px]' to={`/courses/${courses?._id}`}>
                                {courses?.title?.slice(0, 10)}</Link>
                        </button>

                    )
                }


            </div>

        </div>



    );
};

export default AllCourse;
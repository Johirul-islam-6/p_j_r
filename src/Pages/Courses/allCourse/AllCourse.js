import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const AllCourse = () => {
    const [allcourse, setCourse] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/courses')
            .then(result => result.json())
            .then(data => setCourse(data))

    }, [])

    return (

        <div className='flex'>
            {/* ---------card------ */}
            <div className="container  mt-6 mx-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {
                        allcourse.map(course => <CourseCard course={course} key={course._id}></CourseCard>)
                    }

                </div>
            </div>
            {/* -----------Right side nav--------------- */}

            <div className='bg-gray-800 text-white px-5 lg:px-10'>
                {
                    allcourse.map(courseName =>
                        <button key={courseName._id} className="  block py-3 my-1 rounded-sm mx-auto">
                            <Link key={courseName._id} className='text-decoration-none text-white' to={`/corsess/${courseName._id}`}>
                                {courseName?.name}</Link>
                        </button>

                    )
                }


            </div>


            {/* <div className=' grid grid-col-1 px-10'>
                <h4 className=''>All Categories {allcourse.length}</h4>
                    {
                    allcourse.map(courseName =>
                        // <div className=' rounded-2 text-center btn btn-outline btn-primary' >
                            <Link key={courseName._id} className='text-decoration-none' to={`/corsess/${courseName._id}`}>
                                    course01</Link>
                            // </div>
                        )
                    }
                
            </div> */}




        </div>


    );
};

export default AllCourse;
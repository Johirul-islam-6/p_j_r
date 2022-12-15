import React, { useEffect, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCetagory = () => {

    const [serveces, setCourse] = useState([]);
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        //server fetch
        fetch('https://web-technology-server-site.vercel.app/cetegors')
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
    // console.log(serveces)
    return (

        <div className='flex  bg-[#0e182d] justify-center pb-5 w-[100%]'>
            {/* ---------card------ */}
            <div className="container mt-24 mx-5 w-[90%]">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-5">

                    {
                        serveces?.map(course => <>
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
                                                    <Link to={`/development/${course?.cetagory}`} className="btn btn-outline btn-success">{course?.title} Details <span className='pl-2 text-sm'> <FaPaperPlane></FaPaperPlane></span></Link>
                                                </div>
                                            </> : <p>h</p>

                                    }

                                </div>
                            </div>
                        </>)
                    }

                </div>
            </div>
            {/* -----------Right side nav--------------- */}

            <div className='bg-[#0e182d] w-[10%] text-white pt-5 lg:px-10 drop-shadow-2xl mt-14 hidden md:block'>
                {
                    serveces.map(courses =>
                        <button key={courses._id} className="  block py-3 my-1 rounded-sm mx-auto">
                            <Link key={courses._id} className='right-side-textss text-decoration-none text-white uppercase' to={`/development/${courses?.cetagory}`}>
                                {courses?.title?.slice(0, 8)}</Link>
                        </button>

                    )
                }


            </div>

        </div>



    );
};

export default ServiceCetagory;

import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload, FaJsSquare, IconName } from "react-icons/fa";
import jsPDF from 'jspdf';
import logo from '../../../assent/logo/web.png'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Review from '../allCourse/Reviews/Review';

const Course_Details = () => {

    const lodeData = useLoaderData();
    const skillsDetails = lodeData[0];

    console.log(skillsDetails[0]?.image);

    // const courseName = singelCourse?.name;
    // const pdfImage = singelCourse?.image;
    // const Paragraps = singelCourse?.paragrap;
    // // console.log(pdfImage);

    const pdfGenerate = () => {

        // console.log("inside pdf")
        // var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        // doc.addImage(logo, 'JPEG', 0, 20, 80, 80);
        // doc.setFont('Helvertica', 'bold')
        // // doc.addPage()
        // doc.text(20, 20, "Name : " + singelCourse?.title,)
        // doc.text(20, 30, "Details information : " + singelCourse?.paragrap,)
        // doc.save('file.pdf')
    }

    // if (loding) {
    //     return <div className="flex h-[80vh] w-[100%] justify-center bg-[#14213D] items-center">
    //         <div className="flex items-center justify-center space-x-2">
    //             <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
    //             <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-500"></div>
    //             <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
    //         </div>
    //     </div>
    // }

    //animation 
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className='flex justify-center mt-16 px-4'>
                <div className="w-[100%] bg-gray-900 ">
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:p-10">
                        <div className="w-full p-5">
                            <figure><img className='rounded-lg ' src={skillsDetails?.image} alt="Shoes" /></figure>

                        </div>
                        <div className="text-center lg:text-left px-5">
                            <h1 className="text-3xl font-bold">{skillsDetails?.name}</h1>
                            <h1 className="text-small font-bold pt-2"> Experience : {skillsDetails?.experience} + .</h1>
                            <p className="py-5  text-start font_justify">{skillsDetails?.paragrap?.slice(0, 850)}</p>
                            <div className="flex justify-center w-full">
                                <button className="w-full py-2 btn-primary flex justify-center text-center">Reviews</button>
                            </div>
                        </div>
                    </div>

                    <section className="bg-gray-900 dark:text-gray-100">
                        <div className="container max-w-5xl px-4 py-12 mx-auto">
                            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                <div className="col-span-12 sm:col-span-3">
                                    <div className="text-center sm:text-left mb-14 before:block before:w-32 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                                        <h3 className="text-3xl font-semibold">{skillsDetails?.title}</h3>
                                        <span className="text-sm font-bold tracking-wider pt-3 dark:text-gray-400">Exprience : {skillsDetails?.experience}</span>
                                    </div>
                                </div>
                                <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
                                    <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                            <h3 className="text-xl font-semibold ">{skillsDetails?.subject}</h3>
                                            <p className="mt-3">{skillsDetails?.subject_Details}</p>
                                        </div>
                                        {
                                            skillsDetails?.Details?.map(Details => <>
                                                <div key={Details?.future01} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                                    <h3 className="text-xl font-semibold  text-[#0aabd8]">{Details?.future01_Documention1}</h3>
                                                    <a href={Details?.documentionLink} className="text-md dark:text-gray-400" >{Details?.documentionLink}</a>
                                                    <p className="mt-3">{Details?.future01_Documention1_title}</p>
                                                </div>
                                            </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className='flex justify-center mt-8  bg-gray-900 py-2'>

            </div>
            <div className="md:mx-6">
                <Review></Review>
            </div>
        </>

    );
};

export default Course_Details;
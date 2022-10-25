
import { useLoaderData } from 'react-router-dom';
import { FaDownload, IconName } from "react-icons/fa";

const Course_Details = () => {

    const singelCourse = useLoaderData()
    console.log(singelCourse.title);

    return (
        <div className='flex justify-center mt-5 px-20'>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 ">
                {/* -------header start--------- */}
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">Rasel Khan</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-400">@web-developer</span>
                        </div>
                    </div>
                    <button title="Open options" type="button" className='hover:dark:text-violet-400'>
                        <span className='flex align-middle'><p className='mr-1'>Download </p> <FaDownload className='mt-1 ml-1'></FaDownload></span>
                    </button>
                </div>
                {/* -------header end--------- */}
                <img src={singelCourse.course_photo} alt="" className="px-4 object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-900" />
                <div className="flex flex-col justify-between p-6 space-y-8 pb-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{singelCourse.course_name}</h2>
                        <p className="dark:text-gray-100">{singelCourse.Paragrap.slice(0, 80)} <br />{singelCourse.Paragrap.slice(80, 160)} <br />{singelCourse.Paragrap.slice(160, 250)}
                        </p>
                    </div>
                    {/* <p className="dark:text-gray-100 px-36">{singelCourse.Paragrap}</p> */}
                    <button type="button" className=" flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-500 hover:bg-violet-400 dark:text-gray-900">Continue Course</button>
                </div>
            </div>
        </div>
    );
};

export default Course_Details;
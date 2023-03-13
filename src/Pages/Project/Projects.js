import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {

    const [loding, setloding] = useState(true)
    const [links, setLink] = useState('')

    const [imgss, setImg] = useState()
    useEffect(() => {
        fetch('allimage.json')
            .then(res => res.json())
            .then(data => {

                setImg(data)
                setloding(false)
            })
    }, [])
    console.log(imgss)

    const routeChange = (data) => {
        const transfer = data?.link;
        setLink(transfer)

    }
    if (loding) {
        return <div className="flex w-[100%] h-[80vh] justify-center items-center bg-[#14213D]">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }

    return (
        <>
            <section className=" bg-[#14213D] dark:text-gray-50 py-10 mt-10">
                <h1 className='text-4xl font-bold text-center pb-2 smallH1 mt-10'>PROJECT COLLECTION  - 2022</h1>
                <p className='text-[18px] text-amber-500 text-center pb-5 smallH1'>New projects are constantly being added to the list.</p>
                <div className="container grid grid-cols-1 gap-4 p-4 mx-auto md:grid-cols-2 md:px-20 px-2 ">
                    {
                        imgss?.map((imgs, i) => <>
                            <PhotoProvider>
                                <div className="block mt-6 md:mt-10">
                                    <div className="foo">
                                        <PhotoView key={i} src={imgs?.img} className=''>
                                            <img className="w-full cursor-grab h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-fill" src={imgs?.img} alt="" />
                                        </PhotoView>
                                    </div>
                                    <div className=" relative w-[100%] ">
                                        <div className="title absolute mx-auto bottom-[-10px] md:bottom-[-16px] text-white py-5 bgcolor">

                                            <h3 className=' text-md px-2 md:px-16 text-gray-300 text-sm md:text-[18px] py-2'><span className='text-orange-500'>Project Name : </span>{imgs?.name}</h3>
                                            <h3 className=' text-md px-2  md:px-16 text-gray-300 text-sm md:text-[18px]'><span className='text-orange-500'>Features : </span> {imgs?.features}</h3>
                                            <h3 className=' text-md px-2  md:px-16 mt-3 text-gray-300 text-sm md:text-[18px]' ><span className='text-orange-500'>Technology : </span> {imgs?.technology}</h3>
                                            <a href={`${links}`} onClick={() => routeChange(imgs)} className='btn  py-[5px] btn-primary mt-3 md:ml-16 ml-2 hidden md:block z-50'><span className='text-white underline cursor-pointer text-sm px-5 py-1 pt-2 z-50'>live site.com</span></a>
                                            <Link className=' mt-3 md:ml-16 ml-2 block md:hidden'><span className='text-blue-500 underline cursor-pointer text-sm'>live site.com</span></Link>
                                        </div>
                                    </div>

                                </div>
                            </PhotoProvider>
                        </>

                        )
                    }




                </div>
            </section>
        </>
    );
};

export default Projects;
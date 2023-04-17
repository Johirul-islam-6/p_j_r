import React from 'react';
import { Link } from 'react-router-dom';

const Design = () => {
    return (
        <div>
            <section className="bg-[#14213D] py-20 md:mx-3">
                <div className="container mx-auto">
                    {/*----- section header -----*/}
                    <div className="text-center pb-6 md:pb-10 lg:pb-10">
                        <h5 className="font-bold text-2xl md:text-4xl lg:text-4xl uppercase">MY Respnosive Designs</h5>
                        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#bb7103] h-1"></div>


                    </div>
                    {/*----- section header -----*/}
                    {/*----- Location Container -----*/}
                    <div className="block md:flex lg:flex md:px-10 lg:px-0">
                        <div className="w-full md:w-[131%] lg:max-w-[33.3%] group relative ">
                            <img className='w-full h-full' src="https://i.ibb.co/JcDLzSj/854.png" />
                            <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                                <Link
                                    to={'/'}
                                    className="cursor-pointer"
                                >
                                    <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                        Phoenix App
                                    </h1>

                                </Link>
                                <a className='pt-3 underline text-white font-bold hover:text-[#1751E4]' href="https://wonderful-wisp-2f81f4.netlify.app/">--live site link--</a>
                                <a className='pt-3 underline text-white hover:text-[#1751E4]' href="https://github.com/Johirul-islam-6/Phoenix.git">GitHub Link</a>
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-x-2">
                                <div className="group relative w-[200%] md:w-[100%]  border-4 border-sky-600">
                                    <img className='w-full h-full justify-center' src="https://i.ibb.co/RD7Wcv9/travilgin.png" />
                                    <dev

                                        className="cursor-pointer"
                                    >
                                        <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                                            <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                                Traveling World
                                            </h1>
                                            <a className='my-1 underline text-white font-bold hover:text-[#1751E4]' href="https://profound-cuchufli-b18a10.netlify.app/">--live site link--</a>
                                            <a className='underline text-white hover:text-[#1751E4]' href="https://github.com/Johirul-islam-6/travelings.git">GitHub Link</a>
                                        </div>
                                    </dev>


                                </div>
                                <div className="group relative w-[200%] md:w-[100%]  border-4 border-sky-600">
                                    <img className='w-full h-full justify-center md:h-[40vh]' src="https://i.ibb.co/y6ScG4D/Screenshot-2023-04-17-151949.png" />
                                    <div

                                        className="cursor-pointer"
                                    >
                                        <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                                            <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                                MocDit Dahsbord
                                            </h1>
                                            <a className='my-1 underline text-white font-bold hover:text-[#1751E4]' href="https://taupe-cranachan-145c6f.netlify.app/">--live site link--</a>
                                            <a className='underline text-white hover:text-[#1751E4]' href="https://github.com/Johirul-islam-6/mocdit_payment_bord-2.git">GitHub Link</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex  mt-2 gap-x-2">
                                <div className="group relative w-[200%] md:w-[100%]  border-4 border-sky-600">
                                    <img className='w-full h-full justify-center md:h-[40vh]' src="https://i.ibb.co/1XK2ckG/yellow.png" />
                                    <div

                                        className="cursor-pointer"
                                    >
                                        <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                                            <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                                Yellow Therapist
                                            </h1>
                                            <a className='my-1 underline text-white font-bold hover:text-[#1751E4]' href="https://symphonious-crisp-e5f04f.netlify.app/">--live site link--</a>
                                            <a className='underline text-white hover:text-[#1751E4]' href="https://github.com/Johirul-islam-6/YTY_Services.git">GitHub Link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="group relative w-[200%] md:w-[100%] border-4 border-sky-600">
                                    <img className='w-full h-full justify-center' src="https://i.ibb.co/ctDMvQg/educart.png" />
                                    <div

                                        className="cursor-pointer"
                                    >
                                        <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                                            <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                                Educart.com
                                            </h1>
                                            <a className='my-1 underline text-white font-bold hover:text-[#1751E4]' href="https://magical-parfait-802091.netlify.app/">--live site link--</a>
                                            <a className='underline text-white hover:text-[#1751E4]' href="https://github.com/Johirul-islam-6/Education-platfrome.git">GitHub Link</a>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    {/*----- Location Container -----*/}
                </div>
            </section>
        </div>
    );
};

export default Design;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Design.css'
import Project_Lisht from '../Project/Project_Lisht';
const Design = () => {

    const [stateList, stateChangeList] = useState('full-stack');

    return (
        <div>
            <section className="bg-[#14213D] pt-20 md:mx-3 ">
                <div className="container mx-auto ">
                    {/*----- section header -----*/}
                    <div className="text-center pb-6 md:pb-10 lg:pb-10">
                         <h1 className='text-[#f0f0f0] font-bold py-1 text-2xl md:text-4xl lg:text-4xl text-center font uppercase animation_p'>My Web Projects</h1>

                        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#bb7103] h-1"></div>
                    
                    </div>


                   {/*================== services list====================== */}
                  
                   <div className="services_list bg-[#14213D]">
                    
                    
               <div onClick={() => stateChangeList('design')} class="card education">
                    <div class="overlay"></div>
                          <div class="circle">
                            </div>
                      <p className='text-[18px] md:text-[26px]'>Designs</p>
                </div>
               <div onClick={() => stateChangeList('back-end')} class="card education mx-5">
                    <div class="overlay"></div>
                          <div class="circle">
                            </div>
                      <p className='text-[18px] md:text-[26px]'>Back-End</p>
                </div>
               <div onClick={() => stateChangeList('full-stack')} class="card education">
                    <div class="overlay"></div>
                          <div class="circle">
                            </div>
                      <p className='text-[18px] md:text-[26px]'>Full Stack</p>
                </div>
  
                   </div>
                   <p className='text-center'>Active : {stateList} project</p>
               

                 

<div className="inside_cetagory">
{/* =============== only design base data show================ */}
{stateList === 'design' && <>  
                    
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
                                 <p className='text-white'>React, Tailwindcss, etc.</p>
                            </div>
                        </div>
 
                        <div>
                            <div className="flex gap-x-2">
                                <div className="group relative w-[200%] md:w-[100%]  border-4 border-sky-600">
                                    <img className='w-full h-full justify-center' src="https://i.ibb.co/VMxSrN2/Screenshot-2023-08-10-192233.png" />
                                    <dev

                                        className="cursor-pointer"
                                    >
                                        <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                                            <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                                R.Services
                                            </h1>
                                            <a className='my-1 underline text-white font-bold hover:text-[#1751E4]' href="https://johir99.netlify.app/">--live site link--</a>
                                            <p className='text-white'>Html, Bootstrap, javaScript</p>
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
                                              <p className='text-white'>React, Tailwindcss, etc.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="flex  mt-2 gap-x-2">
                                <div className="group relative w-[200%] md:w-[100%]  border-4 border-sky-600">
                                    <img className='w-full h-full justify-center md:h-[40vh]' src="https://i.ibb.co/P9Rq5Z8/Rp.png" />
                                    <div

                                        className="cursor-pointer"
                                    >
                                        <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000083] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
                                            <h1 className="text-sm md:text-xl lg:text-2xl text-white bg-[#1751E4] p-2 rounded">
                                                Digital Solutions Rp
                                            </h1>
                                            <a className='my-1 underline text-white font-bold hover:text-[#1751E4]' href="https://johir100.netlify.app/">--live site link--</a>
                                             <p className='text-white'>Html, Bootstrap, javaScript</p>
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
                                            
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                      

  </> }

  {/* ===================== only Back-End base display show=========== */}
  {
    stateList === 'back-end' && <>
 <div className="back-end ">

<div class="container grid md:grid-cols-2 gap-5 md:px-[7%] py-3 px-10px">

<div>
  <div class="item">
    <div class="card">
      <div class="circle circle2"></div>
      <div class="circle circle1"></div>
      <img  src="https://www.learncomputerscienceonline.com/wp-content/uploads/2019/09/SDLC-Activities.jpg" />
    </div>
    <div class="content flex justify-center">
   <div className="block p-4">
      <h1 className='text-center text-[26px] text-[#f5c903]'>University Management System Authentication Service.</h1>
  <br/>
      <h1 className=' text-[20px] text-[#e4e2e2] text-justify pr-5 pl-2'>This is the documentation for the Authentication Service component of the University Management System. The Authentication Service provides authentication and authorization functionalities for the three main roles in the system: Admin, Student, and Faculty. It is built using TypeScript, Express.js, Zod validation, and MongoDB.</h1>
  
      

   </div>
    </div>
  </div>
  <div className="flex mx-1 mt-2 justify-between relative z-[100000]">
        <Link to={''} onClick={() => window.open('https://documenter.getpostman.com/view/27408621/2s9XxsWwce')} className='btn btn-accent cursor-pointer relative z-[100000]'>Postman Link</Link>
        <button  onClick={() => window.open('https://github.com/Johirul-islam-6/university-management.git')} className='btn btn-accent'>Github Link</button>
       
      </div>
</div>
<div>
  <div class="item">
    <div class="card">
      <div class="circle circle2"></div>
      <div class="circle circle1"></div>
      <img  src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg?w=2000" />
    </div>
    <div class="content flex justify-center">
   <div className="block p-4">
      <h1 className='text-center text-[26px] text-[#f5c903]'>A Back-End Developer</h1>
  <br/>
      <h1 className=' text-[20px] text-[#e4e2e2] text-justify pr-5 pl-2'>Create a practical project as a junior backend developer by building a RESTful API for a task management system. Develop user authentication, task operations, and database integration using Node.js and MongoDB. Gain experience in user registration, task handling, and data security. Showcase skills in middleware, error handling, and API documentation. Employ testing with Jest and deploy on cloud platforms. Demonstrate proficiency in version control using Git and GitHub. This project establishes a strong foundation for backend development growth</h1>
  
      

   </div>
    </div>
  </div>
  <div className="flex mx-1 mt-2 justify-center relative z-[100000]">
        <Link to={''} onClick={() => window.open('https://www.coursera.org/articles/front-end-vs-back-end')} className='btn btn-accent cursor-pointer relative z-[100000]'>Back-End</Link>
        {/* <button  onClick={() => window.open('https://github.com/Johirul-islam-6/university-management.git')} className='btn btn-accent'>Github Link</button> */}
       
      </div>
</div>

 

  


</div>

 </div>

    
    </>
  }

  {/* ==================== full stack project =========== */}
  {
    stateList === 'full-stack' && <>
    
     <Project_Lisht/>
    
    </>
  }

</div>


                  
                    {/*----- Location Container -----*/}
                </div>
            </section>
        </div>
    );
};

export default Design;
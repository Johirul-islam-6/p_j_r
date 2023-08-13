import React from 'react';
import { motion, useTime, useTransform } from 'framer-motion'

const Blocks = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });


    return (
        <div className='bg-[#14213D] w-[100%] h-[auto]  flex justify-center items-center pt-[25%] md:pt-[6%]'>
           
  
        <div className="md:w-[80%] p-2 justify-center mx-auto" data-aos="fade-up" data-aos-duration="1200">
        
         <div className="flex mb-4 ">
          <img src="https://i.ibb.co/74dCMRZ/profile-baground22.png" alt="Profile Image" className="w-16 h-16 rounded-full mr-3" data-aos="zoom-in" data-aos-duration="800" />
          <div className="block">
            <h1 className="text-xl font-semibold">John Doe</h1>
          <h1 className="text-xl font-light">raselkhan@gmail.com</h1>
          </div>
        </div>
          <img src="https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1" alt="Content Image" className="mx-auto mb-4 rounded-lg shadow-md md:w-[70%]"  />
         
          <p className=" text-justify md:w-[70%] text-[18px] text-[#a9a8a8] mx-auto">
             <span className="text-[25px] font-semibold text-[#ebe8e8] text-center py-3">A MERN STACK DEVELOPER </span> <br />
            As a MERN (MongoDB, Express.js, React, Node.js) stack developer, your role involves working with a set of technologies that enable you to build full-stack web applications. The MERN stack is particularly well-suited for developing modern, dynamic, and interactive web applications. Looking into the future, the role of a MERN stack developer continues to evolve and hold significant importance in the web development landscape. Here are some aspects to consider:</p>
        <div className='md:w-[70%]  mx-auto'>
      <p className='text-[18px] mt-3 text-justify'>01. 
        <span className="text-[#ebe8e8] text-[22px]"> Full-Stack Expertise:</span> MERN stack developers are known for their ability to work on both the front-end (using React) and back-end (using Node.js and Express.js) of applications. This <span className="text-[#ebe8e8] text-[22px]">full-stack expertise</span> positions them well for various types of projects and roles.
      </p>
      <p className='text-[18px] mt-3 text-justify'>02.
        <span className="text-[#ebe8e8] text-[22px]"> Single Page Applications (SPAs):</span> The dominance of SPAs continues to grow due to their enhanced user experience and performance. As a MERN stack developer, your expertise in building SPAs using React will remain valuable.
      </p>
      <p className='text-[18px] mt-3 text-justify'>03.
        <span className="text-[#ebe8e8] text-[22px]"> Real-Time Applications:</span> MERN stack, with its use of WebSockets and event-driven architecture, is well-suited for building real-time applications like chat apps, collaborative tools, and live dashboards.
      </p>
      <p className='text-[18px] mt-3 text-justify'>04.
        <span className="text-[#ebe8e8] text-[22px]">Microservices Architecture:</span> The MERN stack can be used in microservices architectures, where various services communicate through APIs. This approach facilitates scalability, maintainability, and flexibility.
      </p>
      <p className='text-[18px] mt-3 text-justify'>05.
        <span className="text-[#ebe8e8] text-[22px]">Serverless Computing:</span> The MERN stack can be integrated with serverless platforms like AWS Lambda or Firebase Functions for building serverless applications. This enables automatic scaling and cost savings.
      </p>
      <p className='text-[18px] mt-3 text-justify'>06.
        <span className="text-[#ebe8e8] text-[22px]">Progressive Web Apps (PWAs):</span> PWAs are becoming more popular due to their ability to provide an app-like experience on the web. React, with its component-based architecture, is well-suited for building PWAs.
      </p>
      <p className='text-[18px] mt-3 text-justify'>07.
        <span className="text-[#ebe8e8] text-[22px]">Hybrid Mobile Apps:</span> React Native, which leverages the knowledge of React, can be used to build mobile apps that work on both Android and iOS platforms. This allows MERN stack developers to extend their skills to mobile app development.
      </p>
      <p className='text-[18px] mt-3 text-justify'>08.
        <span className="text-[#ebe8e8] text-[22px]">JAMstack and Headless CMS:</span> MERN stack developers can also explore the JAMstack (JavaScript, APIs, Markup) architecture and headless CMS platforms to build fast, secure, and scalable web applications.
      </p>
      <p className='text-[18px] mt-3 text-justify'>09.
        <span className="text-[#ebe8e8] text-[22px]">Server-Side Rendering (SSR):</span> While React is primarily known for client-side rendering, the need for server-side rendering (for SEO and performance optimization) remains relevant. MERN stack developers can learn about frameworks like Next.js for SSR.
      </p>
      <p className='text-[18px] mt-3 text-justify'>10.
        <span className="text-[#ebe8e8] text-[22px]">Containerization and DevOps:</span> Understanding containerization (using tools like Docker) and DevOps practices becomes essential for deploying and managing MERN stack applications efficiently.
      </p>
      <p className='text-[18px] mt-3 text-justify'>11.
        <span className="text-[#ebe8e8] text-[22px]">Security and Authentication:</span> As applications handle sensitive user data, security and authentication remain crucial areas of expertise. Understanding OAuth, JWT, and secure coding practices is vital.
      </p>
      <p className='text-[18px] mt-3 text-justify'>12.
        <span className="text-[#ebe8e8] text-[22px]">Continuous Learning:</span> The web development landscape is ever-evolving. MERN stack developers need to stay updated with the latest technologies, libraries, and best practices to remain effective.
      </p>
      <p className='text-[18px] mt-3 text-justify pt-6'> Continuous Learning: The web development landscape is ever-evolving. MERN stack developers need to stay updated with the latest technologies, libraries, and best practices to remain effective. </p>
    </div>
        
        </div>
      </div>

 
    );
};

export default Blocks;
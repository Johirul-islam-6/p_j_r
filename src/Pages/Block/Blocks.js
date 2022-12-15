import React from 'react';
import { motion, useTime, useTransform } from 'framer-motion'

const Blocks = () => {
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });


    return (
        <div className='bg-[#14213D] w-[100%] h-[90vh] flex justify-center items-center'>
            <div className="flex">
                <motion.h1
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 3,
                        rotate: 0,
                        opacity: 1
                    }}
                    transition={{ type: "tween", duration: 2 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}

                    className='text-center text-[10px] md:text-[22px]'>Comming Soon !</motion.h1>
                <motion.h1 style={{ rotate }}
                    animate={{
                        x: -100,
                        y: -100,
                        scale: 3,
                        rotate: 360,
                        opacity: 1
                    }}
                    transition={{ type: "tween", duration: 3.5 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}

                    className='text-center md:ml-[170px] mt-5  absolute right-20 md:mt-10 md:right-[43%]'>🙂</motion.h1>
            </div>
            <h1 className='text-center ml-8 text-4xl'></h1>
            {/* <motion.span>
                animate={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    rotate: 45
                    // opacity: 1
                }}
                transition={{ type: "tween", duration: 3 }}


                🙂! </motion.span>! */}
        </div>
    );
};

export default Blocks;
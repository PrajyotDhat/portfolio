import React from 'react';
import HTML from '../assests/tools/html.png'
import CSS from '../assests/tools/css.png'
import JavaScript from '../assests/tools/javascript.png'
import ReactJs from '../assests/tools/react.png'
import Tailwind from '../assests/tools/tailwind.png'
import GitHub from '../assests/tools/github.png'
import ReduxToolKit from '../assests/tools/rtk.png'
import Bootstrap from '../assests/tools/bootstrap.png'
import { motion } from "framer-motion";
import { fadeIn } from "../variant"

const Services = () => {
    return (
        <div id='services' className='w-full h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <motion.div
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4 font-bold'>These are the technologies I've worked with</p>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'
                >
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="icon" />
                        <p className='my-4'>BOOTSTRAP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactJs} alt="icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReduxToolKit} alt="icon" />
                        <p className='my-4'>REDUX TOOLKIT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Services;
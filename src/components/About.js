import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const services = [
  {
    name: "IMDB Clone",
    description:"Developed dynamic functionalities such as movie listing and search using JavaScript,React Js.",
    link: "Learn More",
    arrow_url: "https://musical-pothos-1a4469.netlify.app/",
    url: "https://github.com/PrajyotDhat/IMDB-Clone",
  },
  {
    name: "Debit Card",
    description:"Developed checkout component with React for intuitive user experience.",
    link: "Learn More",
    arrow_url: "https://debit-card-three.vercel.app/",
    url: "https://github.com/PrajyotDhat/Debit-Card",
  },
  {
    name: "Sports Academy",
    description:" Designed responsive layouts using HTML and styling with CSS for a polished user interface.",
    link: "Learn More",
    arrow_url: "https://amazing-pudding-c9d8d4.netlify.app/",
    url: "https://github.com/PrajyotDhat/Sports-Academy",
  },
  
]

const About = () => {
  return (
    <section className='section' id="about">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Front-end Developer with over 2 years of experience.
            </h3>
            <a href="https://github.com/PrajyotDhat?tab=repositories" >
              <button className='btn btn-sm'>See My Work</button>
            </a>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1'
          >
            <div>
              {services.map((service, index) => {
                const {name, description, link, arrow_url, url} =  service;
                return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={arrow_url} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href={url} className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

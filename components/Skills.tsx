import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getSkills } from '../graphql';
import Experience from './Experience';

function Skills() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((result) => setSkills(result));
  }, []);
  const skill = skills.map((item: any) => item.node);

  const scaleVariants = {
    whileInView: {
      translateY: [100, 0],
      opacity: [0, 1],
      transition: {
        duration: 1,
        delayChildren: 1,
        ease: 'easeInOut',
      },
    },
  };
  const gradVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 0.3],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };


  return (
    <section className='min-h-screen items-center justify-center flex w-screen mx-auto relative' id='skills'>
      <div className='px-8 md:px-0 py-8 container mx-auto lg:max-w-6xl'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-start w-full md:space-x-16 z-20'>
          <div className='flex flex-wrap md:grid grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center md:px-16 w-full md:max-w-xl'>
            {skill.map((item: any) => (
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                key={item.id}
                className='flex flex-col items-center justify-center space-y-3'
              >
                <div className='select-none p-3 md:p-4 rounded-full w-14 md:w-16 cursor-pointer relative' style={{ backgroundColor: item.color }}>
                  <div className='select-none w-16 h-16 md:w-16 rounded-full md:h-16 cursor-pointer bg-transparent absolute inset-0'></div>
                  <Image src={item.icon.url} alt='icon' width={1000} height={1000} unoptimized className='w-full h-auto' />
                </div>
                <p className='font-medium text-sm md:text-base'>
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className='flex flex-col items-start justify-start space-y-5 md:space-y-7 my-12 md:my-0'>
            <div className='flex flex-col items-start justify-start'>
              <span className='bg-gradient-to-r from-purple-500 to-rose-500 h-1 w-12 rounded-sm mb-4'></span>
              <div className='flex items-start w-full'>
                <h4 className='text-2xl md:text-3xl font-medium'>
                  Skills and Experiences
                </h4>
              </div>
              <Experience />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

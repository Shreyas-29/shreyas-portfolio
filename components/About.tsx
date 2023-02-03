import React, { useState, useEffect } from 'react';
import { getAbout, getTitle } from '../graphql';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AboutCard } from '.';


function About() {

  const [img, setImg] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    getAbout()
      .then((data) => setImg(data));
    getTitle()
      .then((data) => setTitle(data))
  }, []);

  const result = img.map((item: any) => item.node);
  const name = title.map((item: any) => item);
  // console.log(result);

  const transitionVariants = {
    whileInView: {
      translateX: [100, 0],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };


  return (
    <section className='min-h-screen items-center justify-center flex w-screen mx-auto bg-white relative' id='about'>
      <div className='w-screen h-60 bg-gradient-to-b from-indigo-500 absolute opacity-20 top-0 left-0 gradient'></div>
      {result.slice(0, 1).map((item: any) => (
        <div className='px-8 md:px-0 py-8 md:py-16 container mx-auto lg:max-w-6xl relative' key={item.id}>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center h-full justify-center w-full gap-8 relative'>
            {/* <motion.div variants={gradVariants} whileInView={gradVariants.whileInView} className={`w-96 h-96 rounded-full hidden lg:block bg-gradient-to-br from-purple-500 to-pink-500 absolute z-0 opacity-40 blur-3xl left-1/4 top-0`}></motion.div> */}
            <motion.div
              variants={transitionVariants}
              whileInView={transitionVariants.whileInView}
              className='flex flex-col items-start justify-center w-full py-8 z-[1] space-y-4'
            >
              <span className='w-14 h-1 rounded-md bg-gradient-to-r from-blue-500 to-violet-500'></span>
              <h2 className='text-2xl md:text-3xl font-medium'>
                About me
              </h2>
              <p className='text-slate-600 text-base flex-wrap leading-7'>
                {item.aboutMe}
              </p>
            </motion.div>

            
            <AboutCard name={name} item={item} />

          </div>
        </div>
      ))}
    </section>
  )
}

export default About;
// lightbox gallery
// unselectable='off'
{/* <Image unoptimized src={item.photo1.url} alt="image" width={2000} height={2000} className='w-full object-cover' /> */ }
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getWork } from '../graphql';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Link from 'next/link';

function Work() {

  const [project, setProject] = useState([]);

  useEffect(() => {
    getWork()
      .then((data) => setProject(data));
  }, []);

  const projects = project.map((item: any) => item.node);

  const transitionVariants = {
    whileInView: {
      translateY: [-100, 0],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };


  return (
    <section className='min-h-screen items-center justify-center flex w-screen mx-auto bg-white relative' id='work'>
      <div className='px-8 md:px-0 py-8 container mx-auto lg:max-w-6xl'>
        <div className='flex flex-col items-center justify-center w-full'>
          {/* top */}
          <motion.div variants={transitionVariants} whileInView={transitionVariants.whileInView} className='flex flex-col items-start lg:items-center justify-center w-full py-8 mb-8 md:mb-16 space-y-4 z-[1]'>
            <span className='w-14 h-1 rounded-md block md:hidden bg-gradient-to-r from-teal-500 to-blue-500'></span>
            <h2 className='text-2xl md:text-3xl font-medium'>
              My projects
            </h2>
            <p className='text-slate-500 text-start md:text-center'>
              Making good projects show case your skills. Have a look at some of my projects with various technologies.
            </p>
          </motion.div>

          {/* work */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-center justify-center gap-10 relative'>
            {projects.map((item: any) => (
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                key={item.id}
                className='relative w-full rounded-xl group backdrop-blur-sm'
              >
                <Image
                  src={item.featuredImage.url}
                  alt={item.title}
                  width={2000}
                  height={2000}
                  unoptimized
                  className='w-full h-auto object-cover rounded-xl border shadow-2xl backdrop-blur-sm shadow-pink-200/50'
                />
                <div className='absolute h-full w-full top-0 left-0 rounded-xl bg-violet-400 bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-0 group-hover:bottom-0 transition duration-300 ease-in-out'>
                  <h2 className='text-center text-white font-semibold text-lg mb-4'>
                    {item.title}
                  </h2>
                  <div className='flex items-center justify-center space-x-6 w-full'>
                    <Link href={`${item.github}`} target='_blank'>
                      <div className='rounded-full p-2 bg-white text-violet-500 cursor-pointer'>
                        <BsGithub size={20} />
                      </div>
                    </Link>
                    <Link href={`${item.view}`} target='_blank'>
                      <div className='rounded-full p-2 bg-white text-violet-500 cursor-pointer'>
                        <HiOutlineExternalLink size={20} />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Work

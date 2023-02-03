import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getAbout, getServices } from '../graphql';
import { motion } from 'framer-motion';

function Services() {

    const [service, setService] = useState([]);
    const [about, setAbout] = useState([]);

    useEffect(() => {
        getServices()
            .then((data) => setService(data));
        getAbout()
            .then((data) => setAbout(data));

    }, []);
    const services = service.map((item: any) => item.node);
    const desc = about.map((item: any) => item.node);
    const info = desc.map((item: any) => item);

    const transition1 = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };
    const transition2 = {
        whileInView: {
            scale: [0, 1],
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
            opacity: [0, 0.3],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };
    const transitionVariants = {
        whileInView: {
            translateX: [-100, 0],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };


    return (
        <section className='min-h-screen items-center justify-center flex w-screen mx-auto relative' id='services'>
            <div className='px-8 md:px-0 py-8 md:py-16 container mx-auto lg:max-w-6xl relative my-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center !h-full justify-center w-full gap-8'>
                    {/* left */}
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 w-full relative'>
                        <motion.div whileInView={scaleVariants.whileInView} className={`w-96 h-96 rounded-full hidden lg:block bg-gradient-to-br from-emerald-500 to-blue-500 absolute z-0 opacity-30 blur-3xl left-0 -top-20`}></motion.div>
                        <div className='flex items-center justify-center flex-col space-y-5 z-[1]'>
                            {services.slice(0, 2).map((item: any) => (
                                <motion.div
                                    variants={transition1}
                                    whileInView={transition1.whileInView}
                                    key={item.id}
                                    className='flex items-center justify-start space-x-4 px-6 py-3 rounded-xl bg-white shadow-lg shadow-blue-200/50 w-full h-24 aspect-video hover:bg-violet-500 group transition duration-300 hover:-translate-y-2'
                                >
                                    <Image
                                        src={item.featuredImage.url}
                                        alt='Skill'
                                        width={100}
                                        height={100}
                                        unoptimized
                                        className='w-20 h-20 object-cover'
                                    />
                                    <h4 className='text-base group-hover:text-white font-medium text-gray-800'>
                                        {item.title}
                                    </h4>
                                </motion.div>
                            ))}
                        </div>
                        {services.slice(2, 3).map((item: any) => (
                            <motion.div
                                variants={transition2}
                                whileInView={transition2.whileInView}
                                key={item.id}
                                className='flex items-center justify-start space-x-4 px-6 py-3 rounded-xl bg-white shadow-lg shadow-blue-200/50 w-full h-24 aspect-video hover:bg-violet-500 group transition duration-300 hover:-translate-y-2 z-[1]'
                            >
                                <Image
                                    src={item.featuredImage.url}
                                    alt='Skill'
                                    width={100}
                                    height={100}
                                    unoptimized
                                    className='w-20 h-20 object-cover'
                                />
                                <h4 className='text-base group-hover:text-white font-medium text-gray-800'>
                                    {item.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>

                    {/* right */}
                    <motion.div
                        variants={transitionVariants}
                        whileInView={transitionVariants.whileInView}
                        className='flex flex-col items-start justify-center w-full py-8 space-y-4'>
                        <span className='w-14 h-1 rounded-md bg-gradient-to-r from-purple-500 to-pink-500'></span>
                        <h2 className='text-2xl md:text-3xl font-medium'>
                            What I offer
                        </h2>
                        {info.slice(1).map((item: any) => (
                            <p className='text-slate-600 text-base flex-wrap' key={item.id}>
                                {item.aboutMe}
                            </p>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services

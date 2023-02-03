import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


function Card({ name, item }: any) {

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
        <div className='gap-4 space-y-5 columns-1 md:columns-2'>
            {name.slice(0, 1).map((name: any) => (
                <motion.div
                    id={name.id}
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='relative group shadow-xl shadow-fuchsia-200/40 rounded-lg shadow-'>
                    <Image unoptimized src={item.photo2.url} alt="image" width={2000} height={2000} className='w-full aspect-video h-auto rounded-lg object-cover relative' />
                    <p className='absolute bottom-0 backdrop-blur-sm tooltip flex items-center justify-center text-white bg-gradient-to-t from-gray-400 rounded-b-lg w-full h-1/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        {name.title}
                    </p>
                </motion.div>
            ))}
            {name.slice(1, 2).map((name: any) => (
                <motion.div
                    id={name.id}
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='relative group shadow-xl shadow-fuchsia-200/40 rounded-lg shadow-'>
                    <Image unoptimized src={item.photo1.url} alt="image" width={2000} height={2000} className='w-full aspect-square h-auto rounded-lg object-cover relative' />
                    <p className='absolute bottom-0 backdrop-blur-sm tooltip flex items-center justify-center text-white bg-gradient-to-t from-gray-400 rounded-b-lg w-full h-1/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        {name.title}
                    </p>
                </motion.div>
            ))}
            {name.slice(2, 3).map((name: any) => (
                <motion.div
                    id={name.id}
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='relative group shadow-xl shadow-fuchsia-200/40 rounded-lg shadow-'>
                    <Image unoptimized src={item.photo3.url} alt="image" width={2000} height={2000} className='w-full aspect-square h-auto rounded-lg object-cover relative' />
                    <p className='absolute bottom-0 backdrop-blur-sm tooltip flex items-center justify-center text-white bg-gradient-to-t from-gray-400 rounded-b-lg w-full h-1/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        {name.title}
                    </p>
                </motion.div>
            ))}
            {name.slice(3, 4).map((name: any) => (
                <motion.div
                    id={name.id}
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='relative group shadow-xl shadow-fuchsia-200/40 rounded-lg shadow-'>
                    <Image unoptimized src={item.photo4.url} alt="image" width={2000} height={2000} className='w-full aspect-video h-auto rounded-lg object-cover relative' />
                    <p className='absolute bottom-0 backdrop-blur-sm tooltip flex items-center justify-center text-white bg-gradient-to-t from-gray-400 rounded-b-lg w-full h-1/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        {name.title}
                    </p>
                </motion.div>
            ))}
        </div>
    )
}

export default Card
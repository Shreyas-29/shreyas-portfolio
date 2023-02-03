import React from 'react';
import { motion } from 'framer-motion';



function Hero() {


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
    const scaleVariants1 = {
        whileInView: {
            scale: [0, 1],
            translateY: [50, 0],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };
    const scaleVariants2 = {
        whileInView: {
            scale: [0, 1],
            translateY: [-50, 0],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    const leftVariants = {
        whileInView: {
            translateX: [-100, 0],
            opacity: [0, 1],
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
            },
        },
    }
    const secondVariant = {
        whileInView: {
            translateX: [-100, 0],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    }
    const thirdVariant = {
        whileInView: {
            translateX: [-100, 0],
            opacity: [0, 1],
            transition: {
                duration: 1.4,
                ease: 'easeInOut',
            },
        },
    }
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
        <header className='min-h-screen w-screen lg:max-w-6xl mx-auto md:px-0 flex items-start justify-center pb-8 pt-10' id='home'>
            <motion.div variants={gradVariants} whileInView={gradVariants.whileInView} className={`w-96 h-96 rounded-full hidden lg:block bg-gradient-to-br from-blue-500 to-violet-500 absolute z-0 opacity-40 blur-3xl right-1/4 top-40`}></motion.div>
            <div className='hidden md:grid grid-cols-3 items-center justify-center w-full mt-20'>

                {/* left */}
                <div className='flex flex-col items-start justify-center w-full h-full relative pl-12'>
                    <motion.div
                        variants={leftVariants}
                        whileInView={leftVariants.whileInView}
                        className='px-8 py-4 rounded-xl bg-white shadow-lg flex items-center space-x-3'
                    >
                        <span className='text-4xl'>👋</span>
                        <span className='flex items-start space-y-3 flex-col text-slate-600 text-sm'>
                            Hello, I am <span className='text-2xl md:text-4xl font-semibold text-slate-900'>Shreyas</span>
                        </span>
                    </motion.div>
                    <motion.div
                        variants={secondVariant}
                        whileInView={secondVariant.whileInView}
                        className='cursor-pointer flex flex-col items-end mt-12 pr-10 w-full'
                    >
                        <span className='bg-white px-6 py-4 rounded-xl shadow-lg shadow-indigo-300/20 text-orange-500 font-medium'>Developer</span>
                    </motion.div>
                    <motion.div
                        variants={thirdVariant}
                        whileInView={thirdVariant.whileInView}
                        className='cursor-pointer flex flex-col items-center mt-16'
                    >
                        <span className='bg-white px-6 py-4 rounded-xl shadow-lg text-blue-500 font-medium'>Designer</span>
                    </motion.div>
                </div>

                {/* middle */}
                <motion.div
                    className='flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-8 relative'>
                    <span className='w-96 h-96 absolute bg-transparent top-0 select-none'></span>
                    <motion.img
                        // whileInView={{ opacity: [0, 1] }}
                        variants={scaleVariants}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        src='/hero.png'
                        alt='profile'
                        className='w-96 h-96 object-cover ml-8 object-center z-[1] select-none relative rounded-full '
                    />
                    <motion.div className="absolute bottom-0 left-0">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }} className='bg-gradient-to-br from-violet-400 to-fuchsia-400 w-[26rem] h-[26rem] overflow-hidden rounded-full absolute z-0 bottom-2 shadow-lg shadow-purple-500/40'
                        />
                    </motion.div>
                </motion.div>
                {/* right */}
                <motion.div className='flex flex-col items-end justify-center w-full h-full pr-12 z-[1]'>
                    <motion.div variants={scaleVariants1}
                        whileInView={scaleVariants1.whileInView} className='flex flex-col items-start pl-14 w-full'>
                        <div className='bg-white shadow-lg p-5 rounded-full'>
                            <img src="/icon.svg" alt="mui" className='w-10 h-10' />
                        </div>
                    </motion.div>
                    <motion.div variants={scaleVariants}
                        whileInView={scaleVariants.whileInView} className='flex flex-col items-center mt-10 w-full'>
                        <div className='bg-white shadow-lg p-7 rounded-full'>
                            <img src="/figma.png" alt="mui" className='w-20 h-20' />
                        </div>
                    </motion.div>
                    <motion.div variants={scaleVariants2}
                        whileInView={scaleVariants2.whileInView} className='flex flex-col items-start w-full pl-14 mt-8'>
                        <div className='bg-white shadow-lg p-4 rounded-full'>
                            <img src="/tailwind.svg" alt="mui" className='w-7 h-7' />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className='grid items-center grid-cols-1 justify-center relative md:hidden w-full mt-0 space-y-16 py-16'>
                <div className='flex flex-col items-start justify-center w-full h-full relative px-8'>
                    <motion.div
                        variants={leftVariants}
                        whileInView={leftVariants.whileInView}
                        className='px-8 py-4 rounded-xl bg-white shadow-lg flex items-center space-x-3'
                    >
                        <span className='text-4xl'>👋</span>
                        <span className='flex items-start space-y-3 flex-col text-slate-600 text-sm'>
                            Hello, I am <span className='text-2xl md:text-4xl font-semibold text-slate-900'>Shreyas</span>
                        </span>
                    </motion.div>
                    <motion.div
                        variants={secondVariant}
                        whileInView={secondVariant.whileInView}
                        className='cursor-pointer flex flex-col items-start mt-12 pr-10 w-full'
                    >
                        <span className='bg-white px-6 py-4 rounded-xl shadow-lg shadow-indigo-300/20 text-orange-500 font-medium'>Developer</span>
                    </motion.div>
                </div>

                <motion.div className='flex items-center justify-center relative px-1'>
                    <motion.div variants={scaleVariants}
                        whileInView={scaleVariants.whileInView} className='bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-80 h-80'>
                        <motion.img
                            variants={scaleVariants}
                            whileInView={scaleVariants.whileInView}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            src='/hero.png'
                            alt='profile'
                            className='w-80 h-80 object-cover object-center z-[1] select-none relative rounded-full'
                        />
                    </motion.div>
                </motion.div>

                <motion.div className='flex flex-wrap flex-row w-full space-x-5 z-[1] px-8'>
                    <motion.div variants={scaleVariants}
                        whileInView={scaleVariants.whileInView} className='flex flex-col items-start pt-4'>
                        <div className='bg-white shadow-lg p-4 rounded-full'>
                            <img src="/icon.svg" alt="mui" className='w-10 h-10' />
                        </div>
                    </motion.div>
                    <motion.div variants={scaleVariants}
                        whileInView={scaleVariants.whileInView} className='flex flex-col items-center mt-10'>
                        <div className='bg-white shadow-lg p-6 rounded-full'>
                            <img src="/figma.png" alt="figma" className='w-20 h-20' />
                        </div>
                    </motion.div>
                    <motion.div variants={scaleVariants}
                        whileInView={scaleVariants.whileInView} className='flex flex-col items-start mt-8'>
                        <div className='bg-white shadow-lg p-3 rounded-full'>
                            <img src="/tailwind.svg" alt="tailwind" className='w-7 h-7' />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </header>
    )
}

export default Hero

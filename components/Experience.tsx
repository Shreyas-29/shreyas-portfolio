import React, { useState, useEffect } from 'react';
import { getExps } from '../graphql';
import { motion } from 'framer-motion';


function Experience() {

    const [exp, setExp] = useState([]);

    useEffect(() => {
        getExps()
            .then((data) => setExp(data));
    }, []);
    const experience = exp.map((item: any) => item);



    return (
        <div className='flex flex-col items-start justify-center w-full py-12 space-y-12'>
            {experience.map((item: any) => {
                // console.log(item)
                return (
                    <div className='flex items-start justify-start w-full space-x-10' key={item.id}>
                        <div className='text-start'>
                            <p className='text-violet-500 font-semibold'>
                                {item.year}
                            </p>
                        </div>
                        <div className='flex flex-col items-start w-full space-y-4 relative'>
                            {item.workExperiences.map((work: any) => (
                                <>
                                    <motion.div whileHover={{ scale: 1 }} className='flex flex-col items-start space-y-1 cursor-pointer justify-start group relative w-full' key={work.name}>
                                        <h5 className='font-medium'>
                                            {work.name}
                                        </h5>
                                        <span className='text-sm text-slate-400'>
                                            {work.company}
                                        </span>
                                    </motion.div>
                                    {/* <Tooltips work={work} /> */}
                                </>
                            ))}
                        </div>
                    </div>
                )
            })}
            {/* @ts-ignore */}
            {/* <ReactTooltip
                                id={work.name}
                                effect="solid"
                                arrowColor="#fff"
                                className="skills-tooltip"
                            >
                                {work.info}
                            </ReactTooltip> */}
            {/* {experience?.map((experience: any) => {
                // const year = experience.experience;
                return (
                    <div className='flex items-start justify-start w-full space-x-10' key={experience.id}>
                        <div className='text-start'>
                            <p className='text-violet-500 font-semibold'>
                                {experience.experience.year}
                            </p>
                        </div>
                        <div className='flex flex-col items-start space-y-1 cursor-pointer justify-start'>
                            <h5 className='font-medium'>
                                {experience.name}
                            </h5>
                            <span className='text-sm text-slate-400'>
                                {experience.company}
                            </span>
                        </div>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Experience

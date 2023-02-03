import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import Marquee from "react-fast-marquee";


function MarqueeComponent() {
    return (
        <div className='flex items-center justify-center max-w-md w-[32rem] py-12 z-50 rounded-full px-2' id='home'>
            <div className="relative marquee overflow-hidden flex items-center gap-x-40 w-1/2 rounded-full hover:scale-105 transition-all duration-300 border border-transparent hover:border hover:border-slate-200 to-zinc-300">
                <a href="#contact">
                    <Marquee pauseOnHover={true} gradient={false} speed={60} style={{ backgroundColor: '#f8fafc', cursor: 'pointer', borderRadius: 100 }}className='mar'>
                        <p className="text-black flex items-center gap-x-2 uppercase py-2 px-6">
                            <BsCircleFill className='text-green-500' /> Available for freelance work
                        </p>
                    </Marquee>
                </a>
            </div>
        </div>
    )
}

export default MarqueeComponent

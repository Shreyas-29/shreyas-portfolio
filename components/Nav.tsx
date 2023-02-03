import React, { useState, useEffect } from 'react'
import { HiHome } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import { RiServiceFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';
import { FaAward } from 'react-icons/fa';
import { IoChatboxEllipses } from 'react-icons/io5';
import Link from 'next/link';
import { BsPersonFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Tooltip from './Tooltip';

function Nav({ id, pathname }: any) {

    // const router = useRouter();
    // const [active, setActive] = useState(false);
    const active = pathname === `#${id}`;
    // const href = router.pathname;

    // useEffect(() => {
    //     setActive(router.pathname === href);
    // }, [router.pathname, href]);

    return (
        <div className='flex items-center justify-center max-w-xs md:max-w-md absolute bottom-8 left-0 right-0 mx-auto rounded-lg navbar space-x-6 md:space-x-5 py-4 md:py-2'>
            <a href={'#home'} className='relative group'>
                <div className='flex items-center flex-col p-0 md:p-2'>
                    <HiHome className={`w-6 h-6 hover:text-violet-900 ${active ? 'text-violet-900' : 'text-violet-700'}`} />
                    <p className='text-xs text-slate-700 font-normal hidden md:block mt-1 capitalize'>home</p>
                </div>
                <Tooltip title='home' />
            </a>
            <a href={'#about'} className='relative group'>
                <div className='flex items-center flex-col p-0 md:p-2'>
                    <BsPersonFill className={`w-6 h-6 hover:text-violet-900 ${active ? 'text-violet-900' : 'text-violet-700'}`} />
                    <p className='text-xs text-slate-700 font-normal hidden md:block mt-1 capitalize'>about</p>
                </div>
                <Tooltip title='about' />
            </a>
            <a href={'#services'} className='relative group'>
                <div className='flex items-center flex-col p-0 md:p-2'>
                    <RiServiceFill className={`w-6 h-6 hover:text-violet-900 ${active ? 'text-violet-900' : 'text-violet-700'}`} />
                    <p className='text-xs text-slate-700 font-normal hidden md:block mt-1 capitalize'>services</p>
                </div>
                <Tooltip title='services' />
            </a>
            <a href={'#work'} className='relative group'>
                <div className='flex items-center flex-col p-0 md:p-2'>
                    <MdWork className={`w-6 h-6 hover:text-violet-900 ${active ? 'text-violet-900' : 'text-violet-700'}`} />
                    <p className='text-xs text-slate-700 font-normal hidden md:block mt-1 capitalize'>work</p>
                </div>
                <Tooltip title='work' />
            </a>
            <a href={'#skills'} className='relative group'>
                <div className='flex items-center flex-col p-0 md:p-2'>
                    <FaAward className={`w-6 h-6 hover:text-violet-900 ${active ? 'text-violet-900' : 'text-violet-700'}`} />
                    <p className='text-xs text-slate-700 font-normal hidden md:block mt-1 capitalize'>skills</p>
                </div>
                <Tooltip title='skills' />
            </a>
            <a href={'#contact'} className='relative group'>
                <div className='flex items-center flex-col p-0 md:p-2'>
                    <IoChatboxEllipses className={`w-6 h-6 hover:text-violet-900 ${active ? 'text-violet-900' : 'text-violet-700'}`} />
                    <p className='text-xs text-slate-700 font-normal hidden md:block mt-1 capitalize'>contact</p>
                </div>
                <Tooltip title='contact' />
            </a>
        </div>
    )
}

export default Nav

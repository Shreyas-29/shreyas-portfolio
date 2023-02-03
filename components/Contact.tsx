import React, { useState, useEffect, useRef, Attributes } from 'react';
import { motion } from 'framer-motion';
import { getClient } from '../graphql';
import Image from 'next/image';


type Ref<T> = string | ((instance: T) => any);

interface ClassAttributes<T> extends Attributes {
  ref?: Ref<T>;
}

function Contact() {

  const [formdata, setFormdata] = useState({ name: '', email: '', message: '' });
  const [submited, setSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const nameEl = React.useRef<HTMLInputElement>(null);
  const emailEl = React.useRef<HTMLInputElement>(null);
  const messageEl = React.useRef<HTMLTextAreaElement>(null);


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    setError(false);
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    // @ts-ignore
    const { value: name } = nameEl.current as HTMLInputElement | null;
    // @ts-ignore
    const { value: email } = emailEl.current;
    // @ts-ignore
    const { value: message } = messageEl.current;

    if (!name || !email || !message) {
      setError(true);
      setLoading(false);
      return;
    }

    const clientObj = { name, email, message };

    getClient(clientObj).then(() => {
      setTimeout(() => {
        setSubmited(true);
        setLoading(false);
      }, 1000);
    })

  }


  return (
    <section className='min-h-screen items-center justify-center flex w-screen mx-auto relative bg-white' id='contact'>
      <div className='px-6 md:px-0 py-8 pb-32 container mx-auto lg:max-w-6xl md:pt-12 lg:pb-32'>
        <motion.div className='flex flex-col items-center justify-center w-full py-8 z-[1]'>
          <h2 className='text-2xl md:text-3xl font-medium'>
            Contact
          </h2>
          <p className='text-slate-600 text-base flex-wrap leading-7 text-center mt-4'>
            Something on your mind? Get in touch and let's chat!
          </p>
          <div className='flex flex-col md:flex-row items-center justify-center w-full space-x-0 md:space-x-6 lg:space-x-12 space-y-5 md:space-y-0 mt-6'>
            <a href='mailto:sihasaneshreyas@gmail.com' className='text-slate-500 space-x-3 text-sm hover:text-blue-500'>
              <div className='flex items-center justify-start gap-x-3 bg-blue-100 rounded-lg w-80 px-8 py-4'>
                <Image src={'/message.png'} alt='message' unoptimized unselectable='on' width={512} height={512} className='w-10 h-10 object-cover' />
                sihasaneshreyas@gmail.com
              </div>
            </a>
            <a href='tel:123456789' className='text-slate-500 text-sm hover:text-teal-500'>
              <div className='flex items-center justify-start gap-x-3 bg-teal-100 rounded-lg w-80 px-8 py-4'>
                <Image src={'/smartphone.png'} alt='message' unoptimized width={512} height={512} className='w-10 h-10 object-cover' />
                +91 123 456 7890
              </div>
            </a>
          </div>
        </motion.div>
        {!submited ? (
          <div className='flex items-center justify-center flex-col space-y-5 w-full mt-6'>
            <div className='w-full md:w-3/5'>
              <input
                ref={nameEl}
                autoComplete='off'
                required
                value={formdata.name}
                onChange={handleChange}
                type="text"
                placeholder='Your Name'
                name='name'
                className='outline-none border rounded-md px-5 py-2 bg-slate-100 w-full'
              />
            </div>
            <div className='w-full md:w-3/5'>
              <input
                ref={emailEl}
                autoComplete='off'
                required
                onChange={handleChange}
                type="email"
                placeholder='Your Email'
                name='email'
                className='outline-none border rounded-md px-5 py-2 bg-slate-100 w-full'
              />
            </div>
            <div className='w-full md:w-3/5'>
              <textarea
                ref={messageEl}
                autoComplete='off'
                required
                onChange={handleChange}
                placeholder='Your Message'
                rows={4}
                name='message'
                className='resize-none outline-none border rounded-md px-5 py-2 bg-slate-100 w-full'
              />
            </div>

            {error && <p className='w-full text-center text-sm text-red-500'>
              All fields are required!</p>}

            <div className='w-full items-center flex justify-center'>
              <button
                onClick={handleSubmit}
                type='button'
                className={`font-medium px-5 py-2 rounded-md ${loading ? 'bg-violet-400 text-slate-200 cursor-not-allowed' : 'bg-violet-500 text-white hover:bg-violet-700 cursor-pointer'}`}
                disabled={loading}
                style={{
                  pointerEvents: loading ? 'none' : 'auto'
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center w-full my-8'>
            <p className='text-lg font-normal bg-green-100 px-8 py-3 rounded-lg text-green-700 text-center'>
              Thank you
              <span className='text-green-700 font-medium mx-1 !capitalize'>'{formdata.name}'</span>
              {/* {console.log(formData.name)} */}
              for getting in touch.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact

import type { NextPage } from 'next';
import Head from 'next/head';
import { About, Contact,  Hero, MarqueeComponent, Services, Skills, Work } from '../components';

const Home: NextPage = () => {
  return (
    <div className="__next">
      <Head>
        <title>Shreyas | Portfolio</title>
        <link rel="icon" href="/icon2.svg" />
      </Head>

      <main className='relative w-screen flex flex-col items-center'>
        <MarqueeComponent />
        <Hero />
        <About />
        <Services />
        <Work />
        <Skills />
        <Contact />
      </main>

    </div>
  )
}

export default Home

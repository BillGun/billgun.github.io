'use client'

import AnimatedText from '@/components/AnimatedText'
import Educations from '@/components/Educations'
import Experiences from '@/components/Experiences'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Metadata } from 'next'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import profilePic from '../../../public/images/reluna_chibi.png'

export const metadata: Metadata = {
  title: 'Hehe',
}

const AnimatedNumbers = ({ value = 0 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value])


  return <span ref={ref}></span>
}

export default function AboutPage() {
  return (
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
            <p className='font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis mollis hendrerit. Ut tincidunt mi eget rutrum ornare. Maecenas venenatis libero metus. Etiam feugiat, odio vel pharetra pharetra, enim libero sollicitudin erat, et accumsan leo tellus vitae magna. Maecenas ligula ex, hendrerit sed ipsum non, volutpat fringilla metus. Curabitur eu mauris lorem. Sed lobortis hendrerit gravida.
            </p>
            <p className='font-medium my-4' >
              Duis semper quam et tempor varius. Praesent a nisi eget neque pulvinar tincidunt et vitae lacus. Etiam vitae nulla sit amet mauris ultricies facilisis id vel magna. Vivamus ut enim commodo, pellentesque mi nec, aliquam est. Sed rhoncus eros at semper commodo. Sed viverra vulputate justo in tempor. Vestibulum id lectus quam. Sed scelerisque ex eu tempus sollicitudin.
            </p>
            <p className='font-medium'>
              Vestibulum sed nisi dui. Donec sit amet sagittis enim. Proin pellentesque, ipsum quis molestie sodales, lacus risus malesuada nulla, ut auctor ex nibh id ex. Sed ullamcorper nisi in orci rutrum molestie. Quisque laoreet eget ipsum vulputate egestas. Aenean eu felis in enim mollis suscipit. Maecenas scelerisque tempus ligula at rutrum. Vestibulum non ligula tempus, porta eros a, consectetur libero.
            </p>
          </div>

          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
            <Image src={profilePic} alt='Chibi' className='w-full h-auto rounded-2xl' />
          </div>

          <div className='col-span-2 flex flex-col items-end justify-between'>
            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={20} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={30} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>satisfied clients</h2>
            </div>
          </div>
        </div>

        <Skills />
        <Experiences />
        <Educations />
      </Layout>
    </main>
  )
}

import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import { Metadata } from 'next'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Url } from 'next/dist/shared/lib/router/router'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from "../../../public/images/Reluna_No_Glasses.png"

export const metadata: Metadata = {
  title: 'Hehexd',
}
const FeaturedProject = ({ type, title, summary, img, link, github }: { type: string, title: string, summary: string, img: string | StaticImport, link: Url, github: Url }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[101%] xs:w-full xs:rounded-[1.5rem]' />

      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-sm'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl xs:text-xl'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light '>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit Project</Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ type, title, img, link, github }: { type: string, title: string, img: string | StaticImport, link: Url, github: Url }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:border-light dark:bg-dark xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base '>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline underline-offset-2 md:text-base'>Visit Project</Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon /></Link>
        </div>
      </div>

    </article>
  )
}

const page = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
            <FeaturedProject
              type='Featured Project'
              title='Crypto Screener Application'
              summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
              img={profilePic}
              link='https://www.youtube.com/'
              github='https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              type='Project'
              title='Crypto Screener Application'
              img={profilePic}
              link='https://www.youtube.com/'
              github='https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              type='Project 2'
              title='Crypto Screener Application'
              img={profilePic}
              link='https://www.youtube.com/'
              github='https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
            />          </div>

        </div>
      </Layout>
    </main>
  )
}

export default page
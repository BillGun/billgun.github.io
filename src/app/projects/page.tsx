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
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:border-light dark:bg-dark'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />

      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light '>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit Project</Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ type, title, img, link, github }: { type: string, title: string, img: string | StaticImport, link: Url, github: Url }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:border-light dark:bg-dark'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline underline-offset-2'>Visit Project</Link>
          <Link href={github} target='_blank' className='w-8'><GithubIcon /></Link>
        </div>
      </div>

    </article>
  )
}

const page = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText className='mb-16' text='Imagination Trumps Knowledge!' />
        <div className="grid grid-cols-12 gap-24">
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
          <div className="col-span-6">
            <div className="col-span-12">
              <Project
                type='Featured Project'
                title='Crypto Screener Application'
                img={profilePic}
                link='https://www.youtube.com/'
                github='https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg'
              />
            </div>          </div>
          <div className="col-span-6">
            Project 2
          </div>

        </div>
      </Layout>
    </main>
  )
}

export default page
import AnimatedText from "@/components/AnimatedText"
import HireMe from "@/components/HireMe"
import { LinkArrow } from "@/components/Icons"
import Layout from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"
import profilePic from "../../public/images/Reluna_No_Glasses.png"
import lightBulb from "../../public/images/light-bulb.svg"

export default function Home() {
  return (
    <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2">
            <Image src={profilePic} alt='RC' className='w-full h-auto' priority
              sizes="(max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    50vw" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl" />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link href="/cv.pdf" target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-sm sm:text-xs">
                Resume
                <LinkArrow className="w-6 ml-1 md:w-5 sm:w-4" />
              </Link>
              <Link href="mailto:privatebillgun@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className="absolute right-8 bottom-2 inline-block w-24 lg:w-16 md:w-14">
        <Image src={lightBulb} alt="light-bulb" className="w-full h-auto" />
      </div>
    </main>
  )
}

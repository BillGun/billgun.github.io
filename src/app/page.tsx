import AnimatedText from "@/components/AnimatedText"
import { LinkArrow } from "@/components/Icons"
import Image from "next/image"
import Link from "next/link"
import profilePic from "../../public/images/Reluna_No_Glasses.png"

export default function Home() {
  return (
    <main className={`w-full h-full inline-block z-0 bg-light p-32 pt-0`}>
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image src={profilePic} alt='RC' className='w-full h-auto' />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left" />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center self-start mt-2">
            <Link href="/cv.pdf" target="_blank"
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark">
              Resume
              <LinkArrow className="w-6 ml-1" />
            </Link>
            <Link href="mailto:privatebillgun@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

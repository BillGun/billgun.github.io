import Image from "next/image"
import profilePic from "../../public/images/Reluna_No_Glasses.png"

export default function Home() {
  return (
    <main className={`w-full h-full inline-block z-0 bg-light p-32 pt-0`}>
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image src={profilePic} alt='RC' className='w-full h-auto' />
        </div>
        <div className="w-1/2">
          <h1>Turning Vision Into Reality With Code And Design. </h1>
          <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
        </div>
      </div>
    </main>
  )
}

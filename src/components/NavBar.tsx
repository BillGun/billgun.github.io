'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href = '/', title = '', className = '' }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}
const CustomLinkMobile = ({ href = '/', title = '', className = '', toggle = () => { } }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    toggle();
  }

  return (
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </button>
  )
}
export default function Navbar() {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light lg:px-16 md:px-12 sm:px-8">

      {/* Burger */}
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Navbar */}
      <div className="w-full flex items-center justify-between lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="ml-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mr-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href='https://www.linkedin.com/in/billgun/' target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3">
            <LinkedInIcon />
          </motion.a>
          <motion.a href='https://github.com/BillGun' target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 ">
            <GithubIcon />
          </motion.a>
          <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark">
            {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
          </button>
        </nav>
      </div>

      {/* Burger Menu */}
      {isOpen ?
        <motion.div className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomLinkMobile href="/" title="Home" toggle={handleClick} />
            <CustomLinkMobile href="/about" title="About" toggle={handleClick} />
            <CustomLinkMobile href="/projects" title="Projects" toggle={handleClick} />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a href='https://www.linkedin.com/in/billgun/' target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3 sm:mr-1">
              <LinkedInIcon />
            </motion.a>
            <motion.a href='https://github.com/BillGun' target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3 sm:mx-3 bg-light dark:bg-dark rounded-full">
              <GithubIcon />
            </motion.a>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-3 sm:ml-1 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark">
              {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
            </button>
          </nav>

        </motion.div>
        :
        null
      }

      <div className="absolute left-[50%] top-2 translate-x-[50%] z-10">
        <Logo />
      </div>
    </header >
  )
}
'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
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

export default function Navbar() {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="ml-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mr-4" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href='https://www.linkedin.com/in/billgun/' target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href='https://github.com/BillGun' target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
          <GithubIcon />
        </motion.a>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark">
          {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
        </button>
      </nav>
    </header>
  )
}
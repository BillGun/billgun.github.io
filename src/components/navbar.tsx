'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { GithubIcon, TwitterIcon } from "./icons";
import Logo from "./logo";

const CustomLink = ({ href = '/', title = '', className = '' }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="ml-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mr-4" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href='https://twitter.com' target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3">
          <TwitterIcon />
        </motion.a>
        <motion.a href='https://twitter.com' target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  )
}
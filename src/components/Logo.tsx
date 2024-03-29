import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink href="/" className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{ scale: 1.1, transition: { duration: 2 } }}
        whileTap={{ scale: 0.9, }}
      >
        BG
      </MotionLink>
    </div >
  )
}
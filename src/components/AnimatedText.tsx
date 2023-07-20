'use client'

import { motion } from "framer-motion"

const quoteAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    }
  }
}

const wordAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}

export default function AnimatedText({ text = '', className = '' }) {
  return (
    <div className={`w-full mx-auto py-2 flex items-center justify-center text-center 
    overflow-hidden`}>
      <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quoteAnimation} initial="initial" animate="animate">
        {
          text.split(" ").map((word, i) =>
            <motion.span key={`word-${i}`} className="inline-block" variants={wordAnimation}>
              {word}&nbsp;
            </motion.span>
          )
        }
      </motion.h1>
    </div>
  )
}

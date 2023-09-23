'use client'

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Education = ({ type = '', time = '', place = '', info = '' }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  )
}
const Educations = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-16 w-full text-center lg:text-7xl lg:mb-8 sm:text-6xl xs:text-4xl">Educations</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Education
            type="Bachelor of Computer Science in Informatics"
            time="2014-2018"
            place="Universitas Tanjungpura"
            info="Completed a bachelor's project on machine learning, developing a web-based application for sentiment analysis. Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Natural Language Processing."
          />
        </ul>
      </div>
    </div>
  )
}

export default Educations
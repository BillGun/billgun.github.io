'use client'

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Experience = ({ position = '', company = '', companyLink = '', time = '', address = '', work = '' }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position} <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">@{company}</a></h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  )
}
const Experiences = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-16 w-full text-center lg:text-7xl lg:mb-8 sm:text-6xl xs:text-4xl">Experience</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Experience
            position="Technical Lead"
            company="Ifabula"
            companyLink="https://ifabula.com/"
            time="Jan 2020 - Jan 2023"
            address="Tangerang, Banten, Indonesia"
            work="Analyze the application business process and flow, designing and translating business requirement into technical solution, manage development plan and monitor development process to make sure successful project delivery and help to manage the project delivery strategies"
          />
          <Experience
            position="Software Developer"
            company="Ifabula"
            companyLink="https://ifabula.com/"
            time="Nov 2018 - Jan 2023"
            address="Tangerang, Banten, Indonesia"
            work="Application development (mobile/web) based on user and business requirement, unit testing in development process, bug fixing and support in maintenance work and report progress to Technical Lead"
          />
        </ul>
      </div>
    </div>
  )
}

export default Experiences
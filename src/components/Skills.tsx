'use client'

import { motion } from "framer-motion";

const Skill = ({ name = '', x = '', y = '' }) => {

  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute dark:bg-light dark:text-dark dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>)
}


const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center lg:text-7xl sm:text-6xl xs:text-4xl">Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2" whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        <Skill name="HTML" x="-18vw" y="5vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="Angular" x="0vw" y="12vw" />
        <Skill name="React" x="-20vw" y="-15vw" />
        <Skill name="Java" x="15vw" y="-12vw" />
        <Skill name="Spring Boot" x="32vw" y="-15vw" />
        <Skill name="NextJS" x="0vw" y="-20vw" />
        <Skill name="SQL Server" x="-25vw" y="18vw" />
        <Skill name="PostgreSQL" x="18vw" y="18vw" />
        <Skill name="Outsystems" x="32vw" y="-2vw" />
        <Skill name="Tailwind CSS" x="-20vw" y="-5vw" />

      </div>
    </>
  )
}

export default Skills
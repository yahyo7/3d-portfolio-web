import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';
import { leetcode } from '../assets';


const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h1 className={styles.sectionHeadText}>Overview</h1>
    </motion.div>

    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Result-oriented Full Stack Software Developer with a passion for building scalable and innovative web applications. Proficient in front-end development with React and back-end development using Node.js, Python, Flask, and Django. Skilled in designing robust architectures, implementing RESTful APIs, and optimizing application performance. Adept at working in agile environments and collaborating with cross-functional teams to deliver high-quality solutions. Eager to leverage expertise in full-stack development to drive business success and exceed client expectations.
    </motion.p>

    <div className="flex mt-4 space-x-4"> 
        <a href="https://www.linkedin.com/in/yakhyokhon/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-secondary text-2xl" /> 
        </a>
        <a href="https://github.com/yahyo7" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-secondary text-2xl" />
        </a>
        <a href="https://leetcode.com/u/kV9RzmjFD7/" target="_blank" rel="noopener noreferrer">
        <img src={leetcode} alt="LeetCode Profile" style={{ width: '1.5rem', height: '1.5rem' }}/>
        </a>
    </div>

    <div 
    className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=> (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
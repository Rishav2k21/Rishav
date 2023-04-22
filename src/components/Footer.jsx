import React from "react";
import {Tilt }from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { github ,sound} from "../assets";
import { Link } from "react-router-dom";
function play(){
  new Audio(sound).play();
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  nam
}) => (
  <motion.div
  onClick ={()=>{play();
    window.open(name);}}
    variants={fadeIn("", "spring", index * 0.5, 0.75)}>
     <Tilt
        options={{
          max: 65,
          scale: 1,
          speed: 550,
        }}
    className='bg-black-200 p-10 rounded-3xl xs:w-[230px] w-full'
  >
    {/* <p className='text-white font-black text-[48px]'>"</p> */}

    <div  className='mt-1'>
      {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */}

      <div    className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> <a href={name}>{nam}</a>
          </p>
          <div>
     
          </div>
          {/* <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p> */}
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
    </Tilt>
  </motion.div>
);

const Footer = () => {
  return (
    <>
    
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>social media </p>
          <h2 className={styles.sectionHeadText}>contact us on .</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    

    </div>

    </>
  
    
    
  );
};

export default SectionWrapper(Footer, "");
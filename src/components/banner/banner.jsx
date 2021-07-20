import React from 'react';
import './banner.css';
import banner from '../../image/bbb.png';
import { motion } from "framer-motion"


const Banner = () => {
    return (
        <div className="banner__container">
            <div className="button__container">
              
               <motion.h1 animate={{x:0,opacity:1}}
                transition={
                {duration:1.1,
                type:'tween',
                stiffness:300
                }} 
                initial={
                    {x:-30,
                    opacity:0
                    }}>find art your love</motion.h1>

               <a href="#list">               
                <motion.button animate={{opacity:1}} transition={{delay:1,duration:1}} initial={{opacity:0}}>shop now</motion.button>
              
                </a>
            </div>
           
           <div className="banner__logo">
           <motion.img initial={{
               opacity:0,
               scale:0,
           }} 
           animate={{
               opacity:1,
               scale:0.9,
           }}
           transition={{
               delay:2,
               duration:1,
               type:'spring',
           }}
           src={banner} alt="" className="bannerlogo" />
           </div>
         
        </div>
    )
}

export default Banner

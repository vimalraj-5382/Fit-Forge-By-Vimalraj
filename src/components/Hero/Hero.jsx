import React, { useRef } from 'react';
import './Hero.css';
import Header from '../Header/Header.jsx';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {

  const transition = {type:'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true: false;

  return (
    <div className="Hero" id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />

            <div>
              <motion.div 
                initial={{left: mobile? '178px': '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
              <span>The best fitness club in this town</span>
            </div>

            <div className="hero-text">
              <div>
                <span className='stroke-text'>don't dream</span>
              </div>
              <div><span> train for it!</span></div>
              <div className="span">
                <span>
                  The harder you work and the more prepared you are for something, you’re going to be able to persevere through anything
                </span>
              </div>
            </div>
            <div className="figures">
                <div>
                  <span><NumberCounter end={140} start={80} delay='3' postFix="+" /></span><span>Expert Coaches</span>
                </div>
                <div>
                  <span><NumberCounter end={840} start={700} delay='3' postFix="+" /></span><span>Members Joined</span>
                </div>
                <div>
                  <span><NumberCounter end={40} start={0} delay='3' postFix="+" /></span><span>Fitness Program</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className='btn' id='left-h-btn1'>Get Started</button>
                <button className='btn' id='left-h-btn2'>Join Now</button>
              </div>
        </div>
        <div className="right-h" >
          <button className='btn' id='right-h-btn'>Join Now</button>

          <motion.div 
            initial={{right: '-2rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
            <img src={heart} />
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>
          <img src={hero_image} className='hero-image' />
          <motion.img 
              initial={{right: '11rem'}}
              whileInView={{right: '20rem'}}
              transition={transition}
              src={hero_image_back} className='hero-image-back' />
        
          <motion.div 
              initial={{right: '45rem'}}
              whileInView={{right: '35rem'}}
              transition={transition} 
              className="calories">
            <img src={calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>210 Kcal</span>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero
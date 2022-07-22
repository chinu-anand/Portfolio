import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../Wrapper';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
  },
  transition: {
    duration: 1,
    ease: 'easeInOut'
  }
}

const Header = () => {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Chinu</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web & Android Developer</p>
            <p className="p-text">DevOps Enthusiast</p>
          </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], delayChildren: 0.5 }}
        transition={{ duration: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        transition={scaleVariants.transition}
        className='app__header-circles'
      >
        {[images.java, images.react, images.tailwind].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');
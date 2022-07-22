import React, { useState } from 'react';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

import { images } from '../../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);


  return (
    <nav className="app__navbar">
      <a href="#home">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
      </a>

      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div></div>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt1 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
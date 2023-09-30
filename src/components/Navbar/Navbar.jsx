import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'
import { images } from '../../constants';
import { pdfs } from '../../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href='/'>
          <img src={images.logo} alt='logo' />
        </a>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
          </li>
        ))}
        <li className='app__flex p-text'>
          <div />
          <a href={pdfs.resume} download="resume.pdf">resume</a>
        </li>
        <li className='app__flex p-text'>
          <div />
          <a href={pdfs.certificates} download="certificates.pdf">certifications</a>
        </li>
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  {/* <div /> */}
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
              <li>
                <a href=''>resume</a>
              </li>
              <li>
                <a href=''>certifications</a>
              </li>
            </ul>
          </motion.div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
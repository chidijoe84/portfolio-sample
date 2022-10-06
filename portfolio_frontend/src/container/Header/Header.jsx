import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';
import { AppWrap } from '../../wrapper';
import Tilt from 'react-parallax-tilt';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Anigbo Joel CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Anigbo Joel CV.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 5 }}
        className='app__header-info'
      >

        <Tilt>
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>
                Hello, I am
              </p>
              <h1 className='head-text'>Maxxicov</h1>

            </div>

          </div>

          <div className="tag-cmp app__flex">
            <p className='p-text'>Frontend Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>
          <div>
            <button class="glow-on-hover" type="button" onClick={onButtonClick}>
              Click To Download CV!
            </button>
          </div>
        </div>
        </Tilt>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.8 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`} >
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>


    </div>
  )
}

export default AppWrap(Header, 'home');
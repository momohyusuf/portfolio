import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  return (
    <>
      <h2 className="head-text">
        "What i cannot <span>Create</span> <br />I do not understand"{' '}
        <span> Richard Feynman.</span>
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
        >
          <img
            src="https://media.licdn.com/dms/image/C4E16AQFQdXMPrqBrxQ/profile-displaybackgroundimage-shrink_350_1400/0/1655241056600?e=1677110400&v=beta&t=VYbXNbUYC2YDY6Wmln8DxCcGOYQmEjGruXnxjpLL3Xg"
            alt="Momoh Yusuf"
          />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            About Me
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            Dependable self-motivated software developer. with a passion for
            building innovative and intuitive solutions to complex problems.
            With over 3 years of experience in the field, I have a strong
            background in Javascript, React, Next.js Node.js, and MongoDB. I am
            constantly seeking new challenges and opportunities to learn and
            grow as a developer. If you have a project that could benefit from
            my skills and experience, I would love to hear more about it. Thank
            you for considering me for your team.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);

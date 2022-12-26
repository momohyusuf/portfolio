import React from 'react';
import { motion } from 'framer-motion';

import { skilledAt, experience } from '../../data/skilledAt';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';
import Experiences from './Experiences';

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        Skills{' '}
        <span
          style={{
            color: '#4b23cf',
          }}
        >
          &
        </span>{' '}
        Experiences
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skilledAt.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{
                  backgroundColor: 'whitesmoke',
                  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* experience */}
        <Experiences experience={experience} />
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);

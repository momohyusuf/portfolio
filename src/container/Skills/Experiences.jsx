import { motion } from 'framer-motion';
import React from 'react';
import ReactTooltip from 'react-tooltip';

const Experiences = ({ experience }) => {
  return (
    <div className="app__skills-exp">
      {experience.map((experience, index) => (
        <motion.div className="app__skills-exp-item" key={index}>
          <div className="app__skills-exp-year">
            <p className="bold-text">
              {experience.startYear} - {experience.endYear}
            </p>
          </div>
          <motion.div className="app__skills-exp-works">
            {experience.works.map((work, index) => (
              <div key={index}>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                >
                  <h4 className="bold-text">{work.name}</h4>
                  <p className="p-text">{work.company}</p>
                </motion.div>
                <ReactTooltip
                  id={work.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {work.desc.replace(/line/, 'line\n')}
                </ReactTooltip>
              </div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experiences;

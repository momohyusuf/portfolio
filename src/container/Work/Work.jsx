import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import { portfolio } from '../../data/portfolio';

const Work = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(portfolio);

  return (
    <>
      <h2
        className="head-text"
        style={{
          margin: '3rem 0',
          textAlign: 'center',
        }}
      >
        Projects I've <span>Worked</span> On.
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <div id="#projects" className="portfolio--container">
          {portfolio.map((project, index) => (
            <article className="project--card" key={index}>
              <img src={project.imgUrl} alt={project.name} />
              <h3>{project.name}</h3>
              <div className="overlay">
                <section className="portfolio--content">
                  <h3>{project.name}</h3>

                  <div className="links">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {' '}
                      <AiFillEye /> Live Url
                    </a>

                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {' '}
                      <AiFillGithub /> Code
                    </a>
                  </div>
                </section>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Work;

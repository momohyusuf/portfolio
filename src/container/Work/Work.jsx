import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { portfolio } from "../../data/portfolio";
import WorkCard from "./WorkCard";

const Work = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(portfolio);

  return (
    <section id="projects">
      <h2
        className="head-text"
        style={{
          textAlign: "center",
          padding: "1.5rem 0",
        }}
      >
        Projects I've <span>Worked</span> On.
      </h2>

      <p className="p-text">
        While working on enterprise applications that have successfully scaled
        to serve thousands or users, in my spare time, I also worked on personal
        projects that showcase my skills and creativity, this involves building
        project that serves every day users and also tools to enhances other
        developers productivity. Here are some of the projects I've built, each
        reflecting my passion for coding and problem-solving.
      </p>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <div id="#projects" className="portfolio--container">
          {portfolio.map((project, index) => (
            <WorkCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;

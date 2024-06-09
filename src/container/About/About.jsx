import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        "What i cannot <span>Create</span> <br />I do not understand"{" "}
        <span> Richard Feynman.</span>
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.code} alt="Momoh Yusuf" />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            About Me
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            Dependable self-motivated software developer. with a passion for
            building innovative and intuitive solutions to complex problems.
            With over 3 years of experience in Frontend development, Mobile app
            development, Backend development, and Database I am constantly
            seeking new challenges and opportunities to learn and grow as a
            developer. If you have a project that could benefit from my skills
            and experience, I would love to hear more about it.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

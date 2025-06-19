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
          <img
            src={
              "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F09%2FUntitled-design-14.jpg&signature=3de86691d6ab8d950654a02334fd2774"
            }
            alt="Momoh Yusuf"
          />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            About Me
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            <span
              style={{
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              A
            </span>{" "}
            Solution oriented Fullstack Developer with over 5 years of hands-on
            experience building dynamic, responsive, and scalable web
            applications. Skilled in both front-end and back-end development.
            With deep understanding of modern web development practices, I craft
            efficient, well-architected systems with clean, maintainable code.
            My expertise spans building RESTful APIs, implementing user-friendly
            UIs, integrating databases, and optimising performance for
            fast-loading websites. Whether working on collaborative projects or
            independently, I thrive in environments where innovation,
            problem-solving, and attention to details are critical.
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

import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { SocialMedia } from "../../components";
import { socialMediaLinks } from "../../constants/socialMediaLinks";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 10 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Momoh Yusuf</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Software developer</p>
          <button className="btn-grad">
            <a
              href="https://drive.google.com/file/d/1PxjflzahwfSWp1HjSnLAEk-2H0EmtJcQ/view?usp=drive_link"
              download
            >
              Download CV
            </a>
          </button>
        </div>
        <section className="mobile__social__links">
          {socialMediaLinks.map((socialMedia, index) => (
            <article key={index}>
              <a
                href={socialMedia.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMedia.icon}
                <span>{socialMedia.title}</span>
              </a>
            </article>
          ))}
        </section>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[
        { icon: images.react, skillBgColor: "#61dbfb5f" },
        {
          icon: images.node,
          skillBgColor: "#68a0635f",
        },

        { icon: images.git, skillBgColor: "#f34f295f" },
      ].map((circle, index) => (
        <div
          style={{ backgroundColor: circle.skillBgColor }}
          className="circle-cmp app__flex"
          key={`circle-${index}`}
        >
          <img src={circle.icon} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");

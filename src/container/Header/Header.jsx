import { motion } from "framer-motion";
import { GrDocumentPdf } from "react-icons/gr";

import { AppWrap } from "../../wrapper";
import "./Header.scss";

import { socialMediaLinks } from "../../constants/socialMediaLinks";

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span
            style={{
              fontSize: "3rem",
            }}
          >
            👋
          </span>
          <div style={{ marginLeft: 10 }}>
            <p>Hello, Thank you for visiting!</p>
            <h1>I'M, Momoh Yusuf.</h1>
          </div>
        </div>

        <section className="app__header-nav">
          <div className="tag-cmp app__flex">
            <p className="p-text">Fullstack Software Developer</p>
            <button className="btn-grad">
              <a
                href="https://drive.google.com/file/d/1WRP-drS03bybrklSTOG8rmkfFLQ5K7G0/view?usp=sharing"
                download
              >
                <span> View Resume</span>
              </a>
            </button>
          </div>
          <div className="mobile__social__links">
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
          </div>
        </section>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");

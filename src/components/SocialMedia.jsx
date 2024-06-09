import React from "react";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoCallSharp,
} from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://x.com/yusufmomohh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoTwitter />

        <span>X</span>
      </a>
    </div>
    <div>
      <a
        href="https://github.com/momohyusuf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
        <span>GITHUB</span>
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/yusuf-momoh-a17193241/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoLinkedin />
        <span>LINKEDIN</span>
      </a>
    </div>
    <div>
      <a
        href="mailto:yusufmomoh6@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosMail />
        <span>EMAIL</span>
      </a>
    </div>
    <div>
      <a href="tel:+2347067435729" target="_blank" rel="noopener noreferrer">
        <IoCallSharp />
        <span>CALL</span>
      </a>
    </div>
  </div>
);

export default SocialMedia;

import React from 'react';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoCallSharp,
} from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://twitter.com/starkweb911"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/starkweb108"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/yusuf-momoh-a17193241/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoLinkedin />
      </a>
    </div>
    <div>
      <a
        href="mailto:yusufmomoh6@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoIosMail />
      </a>
    </div>
    <div>
      <a href="tel:+2347067435729" target="_blank" rel="noopener noreferrer">
        <IoCallSharp />
      </a>
    </div>
  </div>
);

export default SocialMedia;

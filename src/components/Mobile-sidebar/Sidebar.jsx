import { motion } from "framer-motion";
import React from "react";
import { HiX } from "react-icons/hi";
import SocialMedia from "../SocialMedia";
const Sidebar = ({ setToggle }) => {
  return (
    <div>
      <motion.div whileInView={{ x: [300, 0] }}>
        <HiX onClick={() => setToggle(false)} />
        <ul>
          {["home", "about", "skills", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => setToggle(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;

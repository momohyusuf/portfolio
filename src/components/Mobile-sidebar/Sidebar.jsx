import { motion } from 'framer-motion';
import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
const Sidebar = ({ setToggle }) => {
  return (
    <div>
      {' '}
      <motion.div
        whileInView={{ x: [300, 0] }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <HiX onClick={() => setToggle(false)} />
        <ul>
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
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

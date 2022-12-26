import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import './Navbar.scss';
import Sidebar from '../Mobile-sidebar/Sidebar';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        Momoh <span style={{ color: '#4b23cf' }}>Yusuf</span>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <GiHamburgerMenu onClick={() => setToggle(true)} />
        {toggle && <Sidebar setToggle={setToggle} />}
      </div>
    </nav>
  );
};

export default Navbar;

import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar__container">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          Momoh{" "}
          <span style={{ color: "white", marginLeft: "1rem" }}>Yusuf</span>
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "skills", "contact", "Projects"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

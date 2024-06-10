import "react-toastify/dist/ReactToastify.css";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Get <span>In</span> Touch.
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:yusufmomoh6@gmail.com" className="p-text">
            yusufmomoh6@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+2347067435729" className="p-text">
            +234 706-745-729
          </a>
        </div>
      </div>

      <div>
        <h3 className="p-text">
          "A team is not a group of people who work together, it is a group of
          people who trust each other" - Simon Sinek
        </h3>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);

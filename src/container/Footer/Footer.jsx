import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    message: "",
    clientEmail: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const { REACT_APP_SERVICEID, REACT_APP_TEMPLATEID } = process.env;

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { clientName, clientEmail, message } = formData;
    if (!clientName || !clientEmail || !message) {
      toast("Please fill the input field properly");
      return;
    }

    const response = await emailjs.sendForm(
      REACT_APP_SERVICEID,
      REACT_APP_TEMPLATEID,
      form.current,
      "-goOoCl8lcxIIBoqI"
    );

    if (response.status === 200) {
      setIsLoading(false);
      toast("Email Sent Thank You!. I Typically Reply Within An Hour");
    } else {
      setIsLoading(false);
      toast("An error ocurred");
    }
  };
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

import React from "react";
import { motion } from "framer-motion";

import { mobile, frontend, backend, Database } from "../../data/skilledAt";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";

const Skills = () => {
  const [skill, setSkills] = React.useState([
    "Frontend",
    "Backend",
    "Database",
    "Mobile",
  ]);
  const [currentTab, setCurrentTab] = React.useState(frontend);
  const [selectedTab, setSelectedTab] = React.useState("Frontend");
  const updateTab = (tab) => {
    switch (tab) {
      case "Frontend":
        setCurrentTab(frontend);
        setSelectedTab("Frontend");
        break;
      case "Backend":
        setCurrentTab(backend);
        setSelectedTab("Backend");
        break;
      case "Database":
        setCurrentTab(Database);
        setSelectedTab("Database");
        break;
      case "Mobile":
        setCurrentTab(mobile);
        setSelectedTab("Mobile");
        break;
      default:
        setCurrentTab(frontend);
    }
  };

  return (
    <section style={{ margin: "6rem 0" }}>
      <h2 className="head-text">
        Skills
        <span
          style={{
            color: "#4b23cf",
          }}
        >
          {" "}
          &{" "}
        </span>
        Tools
      </h2>
      <section className="skills__tab">
        {skill.map((skill, index) => {
          return (
            <motion.div
              whileHover={{ opacity: [1, 0.4] }}
              transition={{ duration: 0.3 }}
              className="app__skills-item"
              key={index}
              onClick={() => updateTab(skill)}
            >
              <p
                className={`p-text ${skill === selectedTab && "current__tab"}`}
              >
                {skill}
              </p>
            </motion.div>
          );
        })}
      </section>

      {/* skills display */}
      {skillsDisplay(currentTab)}
    </section>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);

const skillsDisplay = (skills) => {
  return (
    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={index}
          >
            <div
              className="app__flex"
              style={{
                backgroundColor: skill.skillBgColor,
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

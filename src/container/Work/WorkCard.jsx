import React from "react";
import "./WorkCard.scss";
import { FaCode } from "react-icons/fa";

const WorkCard = ({ imgUrl, name, projectLink, codeLink, tags }) => {
  return (
    <div class="container_chat_bot">
      <div class="container-chat-options">
        <div class="chat">
          <div class="chat-bot">
            <div>
              <img
                // height={220}
                style={{
                  objectFit: "cover",

                  width: "100%",
                }}
                src={imgUrl}
                alt={name}
              />
              <h3
                //   className="head-text"
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  //   fontWeight: "600",
                  margin: "0.5rem 0",
                  //   textAlign: "center",
                  //   textTransform: "uppercase",
                }}
              >
                {name}
              </h3>
            </div>
          </div>
          <div class="options">
            <div class="btns-add">
              {codeLink && (
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <FaCode size={20} />
                </a>
              )}
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <svg
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;

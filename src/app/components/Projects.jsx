import React from "react";
import { FaBroom } from "react-icons/fa6";

const Projects = ({ name = "hello", description = "hello hello", imgUrl, bgColor, dark = false }) => {
  return (
    <div className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`} style={{ background: `${bgColor}` }}>
      <div className="h-full w-full px-10 py-6 duration-[500ms] transition-all ease-in-out hover:scale-105">
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="w-50 h-50">
          <FaBroom size={50} />
          {/* <FontAwesomeIcon icon="fa-regular fa-coffee" /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

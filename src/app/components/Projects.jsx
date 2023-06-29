import React from "react";
import { MdNorthEast } from "react-icons/md";

const Projects = ({ name, description, imgUrl, bgColor, dark }) => {
  return (
    <div
      className={`h-[30rem]  rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ background: `${bgColor}` }}
    >
      <div
        className={`h-full w-full px-10 py-6 duration-[500ms] transition-all ease-in-out hover:scale-105 ${imgUrl} bg-cover bg-center bg-no-repeat`}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium text-2xl">{name}</h2>
            <p className="text-zinc-500">{description}</p>
          </div>
          <div className="w-50 h-50 cursor-pointer">
            <MdNorthEast size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

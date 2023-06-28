"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

export const Timeline = () => {
  return (
    <div>
      <VerticalTimeline lineColor="grey">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to left bottom, #dce7e3, #d9e9dd, #dde9d3, #e6e7c9, #f4e4c0)",
            color: "black",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="April 2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Ragnets Software LTD.</h4>
          <p> Designing and developing dynamic features, Project Management, Team Leading</p>
        </VerticalTimelineElement>
        {/* </VerticalTimeline>
      <VerticalTimeline> */}
        <VerticalTimelineElement
          position="right"
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to left bottom, #dce7e3, #d9e9dd, #dde9d3, #e6e7c9, #f4e4c0)",
            color: "black",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="February 2023 - April 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title"> Intern Front-End Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Ragnets Software LTD.</h4>
          <p>Assisting senior web developers in the design and development of software</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

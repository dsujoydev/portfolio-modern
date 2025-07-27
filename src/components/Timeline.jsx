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
          <h3 className="text-xl">Frontend Engineer</h3>
          <h4 className="text-base">Ragnets Software LTD.</h4>
          <p className="text-sm">
            Designing and developing dynamic features with React, NextJs, Astro, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>

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
          <h3 className="text-xl"> Frontend Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Ragnets Software LTD.</h4>
          <p>Assisting senior web developers in the design and development of software</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          position="left"
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to left bottom, #dce7e3, #d9e9dd, #dde9d3, #e6e7c9, #f4e4c0)",
            color: "black",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2021 – November 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="text-xl">Research Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">Advanced Machine Intelligence Research Lab - AMIR Lab</h4>
          <p>Research, developement & Implementation on Deep Learning, Writer Identification</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position="right"
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to left bottom, #dce7e3, #d9e9dd, #dde9d3, #e6e7c9, #f4e4c0)",
            color: "black",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="March 2021 – August 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="text-xl">Research Associate Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Advanced Machine Intelligence Research Lab - AMIR Lab</h4>
          <p>
            Research & developement on Automatic Text Summarization, Brain-Computer Interface, Feature Selection, Plant
            Disease Detection, Neurological Diseases
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

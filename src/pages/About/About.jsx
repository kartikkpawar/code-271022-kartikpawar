import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="pageContainer" name="aboutus">
      <div className="pageIntroText">
        <span className="pageTitle">About Us</span>
        <span className="pageInfo">Allow us to tell a short story...</span>
      </div>
      <div className="chapterContainer">
        <div className="chapterContainer_group">
          <div className="chapter1">
            <div className="chapterInfo">
              <span className="chapterName">Chapter 1</span>
              <span className="chapterText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                aperiam voluptates excepturi provident ex odit!
              </span>
            </div>
          </div>
          <div className="chapter2">
            <div className="chapterInfo">
              <span className="chapterName">Chapter 2</span>
              <span className="chapterText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                aperiam voluptates excepturi provident ex odit!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

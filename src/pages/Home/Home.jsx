import React from "react";
import "./home.css";
import { BsChevronDown } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="homeContainer" name="home">
      <div className="sloganContainer">
        <span className="slogan1">
          Rethink your
          <br /> living & renting
        </span>
        <span className="slogan2">Make your stay painless with us</span>
      </div>
      <div className="filterContainer">
        <div className="filter">
          <span className="filterName">City</span>
          <span className="filterHelper">Select your city</span>
        </div>{" "}
        <div className="filter">
          <span className="filterName">Date</span>
          <span className="filterHelper">Select your dates</span>
        </div>{" "}
        <div className="filter">
          <span className="filterName">Guest</span>
          <span className="filterHelper">Add Guest</span>
        </div>{" "}
        <button className="filterButton">
          <FaSearch style={{ marginRight: "10px" }} /> Search
        </button>
      </div>
      <div className="downArrowHolder">
        <BsChevronDown className="downArrow_home" />
      </div>
      <svg
        className="wave"
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0,20L26.7,30C53.3,40,107,60,160,58.3C213.3,57,267,33,320,21.7C373.3,10,427,10,480,21.7C533.3,33,587,57,640,70C693.3,83,747,87,800,83.3C853.3,80,907,70,960,66.7C1013.3,63,1067,67,1120,68.3C1173.3,70,1227,70,1280,58.3C1333.3,47,1387,23,1440,21.7C1493.3,20,1547,40,1600,46.7C1653.3,53,1707,47,1760,41.7C1813.3,37,1867,33,1920,38.3C1973.3,43,2027,57,2080,51.7C2133.3,47,2187,23,2240,26.7C2293.3,30,2347,60,2400,70C2453.3,80,2507,70,2560,61.7C2613.3,53,2667,47,2720,36.7C2773.3,27,2827,13,2880,10C2933.3,7,2987,13,3040,16.7C3093.3,20,3147,20,3200,25C3253.3,30,3307,40,3360,45C3413.3,50,3467,50,3520,50C3573.3,50,3627,50,3680,48.3C3733.3,47,3787,43,3813,41.7L3840,40L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;

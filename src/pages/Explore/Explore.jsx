import Room from "components/Room/Room";
import React from "react";
import { ScrollLink } from "react-scroll";
import "./explore.css";

const roomData = {
  room1: {
    price: 35,
    area: 28,
    img: "images/explore-2.jpg",
    info: "Room with one king-size bed",
  },
  room2: {
    price: 2039,
    area: 438,
    img: "images/explore-1.jpg",
    info: "Penthouse for 8 person",
  },
};

const Explore = () => {
  return (
    <div className="pageContainer" name="explore">
      <div className="pageIntroText">
        <span className="pageTitle">Explore</span>
        <span className="pageInfo">
          From one-guest rooms to <br /> penthouse with pools and garderns
        </span>
      </div>
      <div className="roomContainer">
        <Room data={roomData.room1} />
        <Room data={roomData.room2} />
      </div>
    </div>
  );
};

export default Explore;

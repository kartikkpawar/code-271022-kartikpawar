import React from "react";
import "./room.css";

const Room = ({ data }) => {
  return (
    <div className="room">
      <img
        src={data.img}
        alt="Explore Section Img"
        height="100%"
        width="100%"
        className="roomImage"
      />
      <div className="roomData">
        <div className="pricingInfo">
          <span className="roomTitle">{data.info}</span>
          <div className="roomInfoContainer">
            <div className="roomInfo gradientStyling">{data.price} $</div>
            <div className="roomInfo gradientStyling">
              {data.area} M<sup>2</sup>
            </div>
          </div>
        </div>
        <button className="bookButton gradientStyling">! Book</button>
      </div>
    </div>
  );
};

export default Room;

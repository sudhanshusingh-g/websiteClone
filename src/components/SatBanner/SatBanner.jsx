import React from "react";
import "./SatBanner.css";
import award from "../assets/trophy.svg";
import badge from "../assets/badge.svg";
import awardGirl from "../assets/awardGirl.png";
import Button from "./Button/Button";
function SatBanner() {
  return (
    <div className="section satSection">
      <div className="contentArea">
        <h1>
          Get up to 100% scholarship
          <br />
          with the&nbsp;
          <span className="primary">
             Vedantu Scholarship
            <br />
            Admission Test
          </span>
        </h1>
        <div className="perks">
          <div className="win">
            <img src={award} alt="" />
            <p>Take the Online test & win from a pool of 100+ Crore</p>
          </div>
          <div className="badge">
            <img src={badge} alt="" />
            <p>Assured scholarship for every attendee</p>
          </div>
        </div>
        <div className="btnArea">
          <Button />
          <p>Hurry, limited seats are left</p>
        </div>
      </div>
      <div>
        <img src={awardGirl} alt="girl with award" />
      </div>
    </div>
  );
}

export default SatBanner;

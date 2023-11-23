import React from "react";
import "./TopBanner.css";
import icon from "../assets/WAIcon.svg.svg";
import heroImage from "../assets/heroImage.png";
import thumbnail from "../assets/videoImage.png";
function TopBanner() {
  return (
    <div className="background">
      <div className="content">
        <h1>
          India's <span>Top Teachers</span>
          <br />
          Now in Your City
        </h1>
        <div className="courseTabs">
          <span>JEE</span>
          <span>NEET</span>
          <span>
            9 <sup>th</sup>& 10 <sup>th</sup> Foundation
          </span>
        </div>
        <div className="actionBtn">
          <div className="connectBtn">
            <img src={icon} alt="Whatsapp-Icon" />
            <p>Connect with us</p>
          </div>
          <div className="cta">
            <p>Get a call back</p>
          </div>
        </div>
      </div>
      <div className="heroImg">
        <img src={heroImage} alt="Portrait of a person" />
      </div>
      <div className="thumbnail">
        <img src={thumbnail} alt="Thumnail of youtube video" />
        <p>7631+ students & parents visited our centre last week!</p>
      </div>
    </div>
  );
}

export default TopBanner;

import React from "react";
import "./TopBanner.css";
import ButtonSecondary from '../Button/ButtonSecondary'
import icon from "../assets/WAIcon.svg.svg";
import heroImage from "../assets/heroImage.png";
import thumbnail from "../assets/videoImage.png";
import ButtonTertiary from "../Button/ButtonTertiary";
function TopBanner() {
  return (
    <div className="background">
      <div className="content">
        <h1>
          India's <span className="accent">Top Teachers</span>
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
          <ButtonSecondary>
            <img src={icon} alt="" />
            Connect with us
          </ButtonSecondary>
          <ButtonTertiary>
          Get a call back
          </ButtonTertiary>
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

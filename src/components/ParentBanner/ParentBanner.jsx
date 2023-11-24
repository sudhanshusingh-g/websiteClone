import React from "react";
import "./ParentBanner.css";
import parentImg from '../assets/parentHero.png';
import Features from "./Features/Features";
function ParentBanner() {
  return (
    <div className="background3">
      <div className="section parentSection">
        <div className="textSection">
          <h1>
            <span className="primary">Parents,</span> we know exactly
            <br />
            what you need
          </h1>
          <div className="parentNeeds">
            <Features/>
            <Features/>
            <Features/>
            <Features/>
          </div>
        </div>
        <div className="parentImg">
          <img src={parentImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ParentBanner;

import React from "react";
import "./ServicesSection.css";
import teachers from "../assets/teachers.png";
import Card from "../Cards/Card";
import icon from "../assets/download.svg";
import ButtonSecondary from "../Button/ButtonSecondary";
function ServicesSection() {
  return (
    <div className="background2">
      <div className="section serviceSection">
        <h1>
          <span className="primary">Why choose</span> Vedantu Learning Centre?
        </h1>
        <div className="teacherBanner">
          <img src={teachers} alt="Group of teachers" />
          <div className="content">
            <h1>
              Learn from India's Top
              <br />
              Teachers
            </h1>
            <p>With 16+ years experience of producing top JEE/NEET rankers</p>
            <ButtonSecondary>
              <img src={icon} alt="" />
              Download brochure
            </ButtonSecondary>
          </div>
        </div>
        
        <div className="cardContainer">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <hr />
        <h1 className="lightWeight">
          Experience <span className="primary">100% Offline </span>learning in
          hi-tech interactive
          <br />
          classrooms
        </h1>
        <div className="cardContainer">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;

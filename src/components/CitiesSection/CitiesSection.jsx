import React from "react";
import "./CitiesSection.css";
import cities from '../assets/cities';
import City from "../CityElement/City";
import { Button } from "../Button/Button";
import ButtonCss from "../Button/Button.css"

function CitiesSection(props) {
  return (
    <div className="section citiesSection">
      <div className="citiesHead">
        <h1>
          Available in <span className="primary">12 cities</span>
        </h1>
        <p className="primary">
          View More <span className="rightArrow"></span>
        </p>
      </div>
      <div className="citiesContainer">
        {cities.map((city,i)=>{
          return <City key={i} id={city.id} image={city.icon} name={city.name} />
        })}
      </div>
      <div className="btnCont">
      <Button className={ButtonCss}>Request a Center</Button>
      </div>
      
    </div>
  );
}

export default CitiesSection;

import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="GetStarted">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Embark On a Culinary Journey with Us</span>
          <span className="secondaryText">
          Stay Connected with Culinary Canvas.
                    <br />
                    Join Our Culinary Community for Exclusive Updates, Special offers and more!
          </span>
          <button className="button">
            <a href="mailto:kiariebrandon24@gmail.com">
                Get Started
            </a>
          </button>
         
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

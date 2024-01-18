import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Discover <br /> Our Delectable <br /> Food
            </h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="/public/hero-food.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

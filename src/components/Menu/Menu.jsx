import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Menu.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Menu = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth menu-container">
        <div className="menu-header flexColStart">
          <span className="orangeText">Edible Poetry</span>
          <span className="primaryText">
            Today's Verse of Culinary Delights
          </span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart menu-card">
                <img src={card.image} alt="" />

                <span className="secondaryText">
                  <span style={{ color: "orange" }}>$ </span>
                  <span className="secondaryText menu-price">{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Menu;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="menu-button">
      <button>&lt;</button>
      <button>&gt;</button>
    </div>
  );
};

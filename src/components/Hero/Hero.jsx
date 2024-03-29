import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import { motion, spring } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{y:"2rem", opacity: "0"}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 2, type:"spring"}}
            >
              Discover <br /> Our Delectable <br /> Food
            </motion.h1>
          </div>

          <div className="flexColStart hero-description">
            <span className="secondaryText">Indulge in a symphony of flavors</span>
            <span className="secondaryText">where every bite tells a delicious story</span>
          </div>

          {/* Search */}
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          {/* Stat 1 */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={8800} end={9000} duration={4}/>+
                </span>
                <span className="secondaryText">Premium Producs</span>
            </div>
            {/* Stat 2 */}
            <div className="flexColCenter stat">
                <span>
                    <CountUp start={1900} end={2000} duration={4}/>+
                </span>
                <span className="secondaryText">Happy Customers</span>
            </div>
            {/* Stat 3 */}
            <div className="flexColCenter stat">
                <span>
                    <CountUp end={30} duration={4}/>+
                </span>
                <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x: "7rem", opacity: 0}}
          animate={{x: 0, opacity: 1, }}
          transition={{duration: 2, type: "spring"}}
          className="image-container">
            <img src="/hero-food.jpg" alt="" />
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;

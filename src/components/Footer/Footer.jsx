import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left-side */}
        <div className="flexColStart f-left">
          <img src="/cc_logo.png" alt="" width={120} />

          <span className="secondaryText">
            Operating Hours
            <br />
            Mon - Fri : 6:30 Am - 10Pm
            <br />
            Sat & Sun : 7:30 Am - 12Am
          </span>
        </div>

        {/* right-side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Locate Us</span>
          <span className="secondaryText">United Nations Ave, Nairobi</span>

          <div className="flexCenter f-menu">
            <span>Menu</span>
            <span>Our Values</span>
            <span>Contact Us</span>
            <span>Get Started</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

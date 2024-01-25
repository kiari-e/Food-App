import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper" id="footer">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left-side */}
        <div className="flexColStart f-left">
          <img src="/cc_dark_logo.png" alt="" width={120} />

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
          <a href="#menu">Menu</a>
          <a href="#OurValue">Our Values</a>
          <a href="#Contact">Contact Us</a>
          <a href="#GetStarted">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

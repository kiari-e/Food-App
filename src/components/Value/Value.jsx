import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper" id="OurValue">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left-side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value-image2.webp" alt="" />
          </div>
        </div>

        {/* right-side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">
            Crafting Memories, One Dish at a Time
          </span>
          <span className="secondaryText">
            At Culinary Canvas a symphony of flavours is crafted by culinary
            experts setting
            <br />
            the standard of exceptionl cuisine and elevating your dining
            expectations.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
                const [className, setClassName] = useState(null)
              return (
                <AccordionItem className={`accordionItem ${className}`}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon" key={i} uuid={i}>
                        {item.icon}
                      </div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

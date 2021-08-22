import React from "react";
import img1 from "../images/goku.png";
import Common from "../Component/Common";

const About = (props) => {
  return (
    <>
      <div className="aboutPage">
        <Common
          mode={props.mode}
          name="About"
          imgsrc={img1}
          visit="/contact"
          btname="Contact Now "
        />
      </div>
    </>
  );
};
export default About;

import React from "react";
import img1 from "../images/goku.png";
import Common from "./Common";

const Home = (props) => {
  return (
    <>
      <div className="home">
        <Common
          mode={props.mode}
          name="Transform Yourself With"
          imgsrc={img1}
          visit="/contact"
          btname="Get Started"
        />
      </div>
    </>
  );
};
export default Home;

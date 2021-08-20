import React, { useEffect } from "react";
import Aos from "aos";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div data-aos="fade-up" className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 id="cardtitle" className="font-weight-bold">
              {props.title}
            </h5>
            <p
              className="text-center"
              style={{ color: props.mode === "light" ? "#000" : "#fff" }}
            >
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

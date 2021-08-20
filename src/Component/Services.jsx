import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Services = (props) => {
  return (
    <>
      <div className="container services">
        <h1 id="serviceText" className="text-center">Our Services</h1>
        <hr />
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return (
                    <Card mode={props.mode}
                      key={val.title}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      description={val.description}
                    />
                  );  
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;

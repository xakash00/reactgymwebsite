import Aos from "aos";
import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div >
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div id="cont" className="row" style={{color:props.mode==='light'? '#000':'#fff'}}>
                <div data-aos="fade-right"  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 id="quote">
                    {props.name}
                    <strong className="brand-name"> IRONS</strong>
                  </h1>
                  <h4 id="quote" className="my-3">
                    If you want something you’ve never had, you must be willing
                    to do something you’ve never done.
                  </h4>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to={props.visit}>
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated bounceInDown"
                    alt="Common img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Common;

import React from "react";
import logo from "../images/bicep.svg"
const Footer = () => {
  return (
    <>
      <div>
        <div className="footer container-fluid">
          <div className="mx-5 row">
            <div className="col-sm footersections">
              <div className="d-flex justify-content-start align-items-center">
                <a
                  href="https://www.facebook.com/xakashrajput/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    aria-hidden="true"
                    id="fontA"
                    className="fab fa-facebook fa-2x"
                  ></i>
                </a>

                <div>
                  <div>
                    <a
                      href="https://github.com/xakash00"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i aria-hidden="true" className="fab fa-github fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>Social Links</div>
            </div>
            <div className="col-sm footersections">
              <div className="d-flex justify-content-start align-items-center">
                <i
                  aria-hidden="true"
                  id="fontA"
                  className="fas fa-envelope"
                ></i>
                <div>
                  <div>Email</div>
                  <div>xakashsingh00@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="col-sm footersections">
              <div className="d-flex justify-content-start align-items-center">
                <i aria-hidden="true" id="fontA" className="fas fa-code"></i>
                <div>
                  <div>Created By</div>
                  <div>Akash Singh</div>
                </div>
              </div>
            </div>
            <div className="col-sm footersections">
              <div className="d-flex justify-content-start align-items-center">
                <img className="footerLogo" src={logo} alt="logo" />
                <div>
                  <div>Gym Web App</div>
                  <div>A React.js Appliaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

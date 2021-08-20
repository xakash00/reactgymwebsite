import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import bicep from "../images/bicep.svg";

const NavBar = (props) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div
        className="container-fluid mr-auto"
        style={{ color: props.mode === "light" ? "#000" : "#fff" }}
      >
        <div className="row">
          <div className="col-10 mx-auto">
            <nav
              className={
                colorChange
                  ? `navbar active navbar-expand-lg fixed-top colorChange`
                  : "navbar navbar-expand-lg fixed-top"
              }
            >
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                  <strong id="strong">IRONS GYM</strong>
                  <img
                    src={bicep}
                    id="logo"
                    alt="bicep"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto mb-2  mb-lg-0">
                    <li className="nav-item mx-3">
                      <NavLink
                        style={{
                          color: props.mode === "light" ? "#000" : "#fff",
                        }}
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        style={{
                          color: props.mode === "light" ? "#000" : "#fff",
                        }}
                        activeClassName="menu-ative"
                        exact
                        className="nav-link"
                        to="/services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        style={{
                          color: props.mode === "light" ? "#000" : "#fff",
                        }}
                        activeClassName="menu-ative"
                        exact
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item mx-3">
                      <NavLink
                        style={{
                          color: props.mode === "light" ? "#000" : "#fff",
                        }}
                        activeClassName="menu-ative"
                        exact
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                  <div className="form-check form-switch mx-3">
                    <input
                      onClick={props.toggleMode}
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      {`${
                        props.mode === "light"
                          ? "Enable Dark Mode"
                          : "Enable Light Mode"
                      }`}
                    </label>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;

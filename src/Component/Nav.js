import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Service from "./Service";
// import Contact from "./Contact";
// import Home from "./Home";

const Nav = () => {
  return (
    <>
      <div className="container-fluid nav_bg ">
        <div className="">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid ">
                <NavLink
                  className="navbar-brand mt-2 "
                  style={{
                    dislay: "flex",
                    justifyContent: "flex-start",
                  }}
                  to="/"
                >
                  Zuchini
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active menu_active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link menu_active" to="/service">
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link menu_active" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link menu_active" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;

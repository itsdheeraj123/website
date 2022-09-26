import React from "react";
import { NavLink } from "react-router-dom";
import web from "../Image/anime.jpg";
export default function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                  style={{ textAlign: "bottom-center" }}
                >
                  <h1>
                    Grow your business with
                    <strong style={{ color: "purple" }}>
                      {" "}
                      Zuchini Developers
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    we are the team of talented Developers
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to="/service"
                      className="btn btn-outline-primary"
                      style={{ borderRadius: "50rem" }}
                    >
                      Get started
                    </NavLink>
                    <div
                      className="col-lg-6 order-1 order-lg-2 header-img ms-auto mb-2 mb-lg-0"
                      // style={{
                      //   display: "flex",
                      //   justifyContent: "right",
                      //   flex: "column",
                      // }}
                    >
                      <img
                        src={web}
                        className="img-fliud animated"
                        alt="home img"
                        width="300"
                        height="300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

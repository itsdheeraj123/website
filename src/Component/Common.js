import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../Image/anime.jpg";
export default function Common(props) {
  return (
    <>
      <section id="header">
        <div
          style={{
            display: "flex",
            msFlexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "5%",
            position: "absolute",
            flexDirection: "row",
            boxSizing: "content-box",
          }}
        >
          <img
            src={props.imgsrc}
            className="img-fliud animated  position-absolute bottom-30 start-50"
            alt="home img"
            width="500"
            height="450"
            style={{
              display: "-ms-flexbox",
              alignItems: "flex-end",
              position: "absolute",
              right: "0%",
              marginLeft: "35%",
              boxSizing: "content-box",
            }}
          />
          <div>
            <div className="col-10 mx-auto">
              <div style={{ boxSizing: "border-box" }}>
                <div
                  style={{
                    textAlign: "bottom-center",
                    alignItems: "center",
                  }}
                >
                  <h1>
                    {props.name}
                    <strong style={{ color: "purple" }}>
                      {" "}
                      Zuchini Developers
                    </strong>
                  </h1>
                  <h2>we are the team of talented Developers</h2>
                  <div>
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary"
                      style={{ borderRadius: "50rem" }}
                    >
                      {props.btname}
                    </NavLink>
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

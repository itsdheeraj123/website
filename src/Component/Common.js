import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../Image/anime.jpg";
export default function Common(props) {
  return (
    <>
      <section id="header" className="col-sm-10">
        <div
          className="col-10"
          style={{
            display: "flex",
            flexDirection: "row",

            // justifyContent: "flex-start",
            marginBottom: "4%",

            // boxSizing: "content-box",
          }}
        >
          <img
            src={props.imgsrc}
            className="img-fliud animated  position-absolute bottom-30 start-50"
            alt="home img"
            width="450"
            height="450"
            style={{
              flexDirection: "row",
              justifyContent: "",
              // boxSizing: "border-box",
              display: "flex",

              right: "10%",
              marginBottom: "4%",
              padding: "0",
              // boxSizing: "content-box",
            }}
          />
          <div className="col-3 mx-2 d-flex p-2 flex-grow-6 ">
            <div className="col-2 mx-auto ">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexFlow: "row wrap",
                  flexGrow: "",
                  width: "28rem",
                  height: "28rem",
                  boxSizing: "border-box",
                }}
              >
                <div
                // style={{
                //   display: "flex",
                //   flexDirection: "column",
                //   justifyContent: "flex-start",
                //   flexWrap: "wrap",
                // }}
                >
                  <h1 className="col gy-6 gx-5">
                    {props.name}
                    <br />
                    <strong style={{ color: "purple" }}>
                      {" "}
                      Zuchini Developers
                    </strong>
                  </h1>
                  <h2 className="col gy-5 pt-3">
                    we are the team of talented Developers
                  </h2>
                  <div className="gy-2 pt-5">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary "
                      style={{ borderRadius: "50rem" }}
                    >
                      {props.btname}
                      <br />
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

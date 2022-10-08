import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../Image/anime.jpg";
import Common from "./Common";
export default function About() {
  return (
    <>
      <Common
        name="Welcome to About Page of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

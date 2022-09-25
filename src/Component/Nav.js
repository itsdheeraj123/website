import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Home from "./Home";

const Nav = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};
export default Nav;

import React from "react";
// import { Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};
export default App;

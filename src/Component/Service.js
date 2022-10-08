import React from "react";
// import web from "../Image/anime.jpg";
import Card from "./Card";
import Data from "./Data";

export default function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">This is Service Page</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="col-10 mx-auto my-auto">
          <div className="row ">
            {Data.map((curr, index) => {
              return <Card imgsrc={curr.urlToImage} title={curr.title} />;
            })}
            {/* <Card /> */}
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Test() {
  return (
    <>
      {/* <div className="p-3 border bg-dark" style={{ border: "solid black" }}>
        <p1>content</p1>
      </div>
      <div className="container-sm" style={{ border: "solid black" }}>
        100% wide until small breakpoint
      </div>
      <div className="container-md" style={{ border: "solid black" }}>
        100% wide until medium breakpoint
      </div>
      <div className="container-lg" style={{ border: "solid black" }}>
        100% wide until large breakpoint
      </div>
      <div className="container-xl" style={{ border: "solid black" }}>
        100% wide until extra large breakpoint
      </div>
      <div className="container-xxl" style={{ border: "solid black" }}>
        100% wide until extra extra large breakpoint
      </div>
      <hr /> */}
      <div className="container px-4 ">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-dark">Custom column padding 1</div>
          </div>
          <div className="col">
            <div className="p-5 border bg-dark">Custom column padding 2</div>
          </div>
        </div>
      </div>
    </>
  );
}

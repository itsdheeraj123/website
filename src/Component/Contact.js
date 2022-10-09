import React from "react";

export default function Contact() {
  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Contact US!</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-5 col-5 mx-auto "></div>
          <form autoComplete="off">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                FullName
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

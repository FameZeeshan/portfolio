import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="contact-form m-3">
        <h1>Contact</h1>
        <p>Submit the form below to get in touch with me</p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your First Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Type your first Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your Last Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Type your last Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Type your Query
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="button-container">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

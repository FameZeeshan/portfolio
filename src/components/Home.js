import React from "react";
import "./style.css";
import Zeeshan from "../images/Zeeshan.jpg";

export default function Home() {
  return (
    <div>
      <div className="home-main-container d-flex m-3">
        <div className="container-left">
          <h1>I'm a full-stack developer</h1>
          <p style={{ width: "90%" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos eius aliquid suscipit doloremque beatae magnam commodi
            earum. Officiis, voluptas quibusdam.
          </p>
          <button type="button" className="btn btn-primary">
            Projects
          </button>
        </div>
        <div className="container-right">
          <img
            src={Zeeshan}
            alt="Zeeshan"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
}
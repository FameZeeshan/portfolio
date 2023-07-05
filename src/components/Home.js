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
            Experienced Professional transitioning to a career as a MERN Stack
            Developer - Passionate about building innovative solutions with the
            latest technologies
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

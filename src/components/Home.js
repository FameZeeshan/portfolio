import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./style.css";
import Zeeshan from "../images/Zeeshan.jpg";
import zeeshanResume from "../images/zeeshan-resume.pdf";
export default function Home() {
  return (
    <div id="home">
      <div className="home-main-container d-flex m-3">
        <div className="container-left">
          <h1>I'm a full-stack developer</h1>
          <p style={{ width: "90%" }}>
            Experienced Professional transitioning to a career as a MERN Stack
            Developer - Passionate about building innovative solutions with the
            latest technologies
          </p>
          <div className="social">
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              <i
                className="fa fa-linkedin-square"
                style={{ fontSize: "48px", color: "#003049" }}
              ></i>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
              <i
                className="fa fa-github-square"
                style={{ fontSize: "48px", color: "#000814" }}
              />
            </ScrollLink>
          </div>
          <div className="resume">
            <a href={zeeshanResume} download className="btn btn-primary resume">
              Download Resume
            </a>
          </div>
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

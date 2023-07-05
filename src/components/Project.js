import React from "react";
import "./style.css";
import demo1 from "../images/demo1.png";
export default function Project() {
  return (
    <div>
      <div className="project-container m-3">
        <h1>Project</h1>
        <p>Check out some of my work right here:</p>

        <div className="logo-container">
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <button class="btn btn-primary" type="submit">
                Code
              </button>
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <button class="btn btn-primary" type="submit">
                Code
              </button>
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <button class="btn btn-primary" type="submit">
                Code
              </button>
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <button class="btn btn-primary" type="submit">
                Code
              </button>
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <button class="btn btn-primary" type="submit">
                Code
              </button>
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="logo-img-container">
            <img src={demo1} alt="html-logo" />
            <div className="button-container">
              <button class="btn btn-primary" type="submit">
                Code
              </button>
              <button class="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

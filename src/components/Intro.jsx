import React, { Component } from "react";
import memoji from "../img/memoji.png";

class Intro extends Component {
  render() {
    return (
      <div class="container-fluid introContainer fadeInSlow mb-3">
        <h2>Nice to meet you,</h2>
        <h1>
          I'm <span class="Special-Text">Kirsten Richard.</span>
        </h1>
        <h4>
          A{" "}
          <span class="Special-Text">
            Software Developer with a passion for front end development
            and crypto/blockchain
          </span>{" "}
          focusing on creating, building, and educating in the tech space. I'm
          also an avid reader, tech-enthusiast, and traveller.
        </h4>
        <div class="container contactContainer">
          <div class="row">
            <img
              src={memoji}
              class="img-fluid tinyImg rounded-start"
              alt="memoji"
            />
            <div class="col contactCol">
              <h5>Contact Me</h5>
              <a href="mailto:kirsten.richard@dal.ca">kirsten.richard@dal.ca</a>
            </div>
            <div class="col socials">
              <ul class="social-list">
                <li>
                  <a href="https://github.com/krichard410">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kirsten-richard/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://codepen.io/kirstenrichard">Codepen</a>
                </li>
                <li>
                  <a href="https://medium.com/@krichard410">Medium</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

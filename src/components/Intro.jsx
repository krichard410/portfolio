import React, { Component } from "react";
import memoji from "../img/memoji.png";

class Intro extends Component {
  render() {
    return (
      <div class="container-sm introContainer fadeInSlow mb-3">
        <h2>Nice to meet you,</h2>
        <h1>
          I'm <span class="Special-Text">Kirsten Richard.</span>
        </h1>
        <h4>
          A{" "}
          <span class="Special-Text">
            Junior Front End Engineer, Designer, and Crypto-Enthusiast
          </span>{" "}
          focusing on creating and building.
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

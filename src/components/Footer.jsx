import React from "react";
import mountain from "../img/kirsten-mountain.png";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div className="foot-photo">
          <img src={mountain} alt="Kirsten on a mountain" />
        </div>
        <div className="foot-inner">
          <h2>
            Let's work together,
            <br />
            <a href="mailto:kirsten.richard@dal.ca">email me</a>.
          </h2>
          <p className="open">
            I'm open for <span className="pop">full-time</span> positions in the
            tech industry.
            <br />
            Based in 🇳🇴 from 🇨🇦, but open for remote and in-office.
          </p>
          <div className="foot-links">
            <a href="mailto:kirsten.richard@dal.ca">Email</a>
            <a href="https://github.com/krichard410">Github</a>
            <a href="https://www.linkedin.com/in/kirsten-richard/">LinkedIn</a>
            <a href="https://codepen.io/kirstenrichard">Codepen</a>
            <a href="https://medium.com/@krichard410">Medium</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

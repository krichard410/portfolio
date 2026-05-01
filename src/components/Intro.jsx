import React from "react";
import salesforce from "../img/salesforce.png";
import storygraph from "../img/storygraph.png";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="intro-inner">
        <h2>
          A Software Developer with a passion for{" "}
          <span className="kw kw-fe">front-end development</span>
          <span className="kw-comma kw-fe">,</span>{" "}
          <span className="kw kw-sf">
            Salesforce
            <sup className="sf-sup">
              <img src={salesforce} alt="Salesforce" />
            </sup>
          </span>
          <span className="kw-comma kw-sf">,</span> and{" "}
          <span className="kw kw-crypto">crypto/blockchain</span> focusing on
          creating,
          building, and educating in the tech space.
        </h2>
        <p className="bio">
          I'm also an{" "}
          <a
            className="reader-link"
            href="https://app.thestorygraph.com/profile/krichard410"
            target="_blank"
            rel="noopener noreferrer"
          >
            avid reader
            <sup className="reader-sup">
              <img src={storygraph} alt="StoryGraph" />
            </sup>
          </a>
          , outdoors enthusiast, and traveller.
        </p>
      </div>
    </section>
  );
}

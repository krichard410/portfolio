import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div
          className="hero-img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/kirsten.JPG)`,
          }}
        />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">Nice to meet you,</div>
        <h1>
          <span className="im">I'm</span>{" "}
          <span className="first">Kirsten</span>{" "}
          <span className="last">Richard.</span>
        </h1>
      </div>
    </section>
  );
}

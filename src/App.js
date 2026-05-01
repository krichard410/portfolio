import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Work from "./components/Work";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="main">
      <Hero />
      <Intro />
      <Work />
      <Footer />
    </div>
  );
}

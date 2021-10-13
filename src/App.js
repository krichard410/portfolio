import React from "react";
import "./App.css";
import Work from "./components/Work";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="main">
      <Intro/>
      <Work/>
      <Footer/>
    </div>
  );
}


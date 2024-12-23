import React from "react";
import { image } from "../data/data";

export default function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Yeah, totally!... I made this!</p><br />
      <img src={image} alt="made this" />
    </div>
  );
}

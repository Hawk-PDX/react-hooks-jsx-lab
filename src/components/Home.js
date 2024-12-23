import React from "react";
import { username, city } from "../data/data.js";


console.log(username, city);
export default function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

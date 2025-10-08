import React from "react";
import { Name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home">
      <h1>
        {Name}is a Web Developer from {city}
      </h1>
      <h1>Name is a Web Developer from City</h1>
    </div>
  );
}

export default Home;

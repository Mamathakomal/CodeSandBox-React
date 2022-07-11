//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Web Development</h1>
    <ul>
      <li>Front-end web development</li>
      <li>Back-end Web development </li>
      <li>Full stack web development</li>
    </ul>
  </div>,
  document.getElementById("root")
);

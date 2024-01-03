import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "Hello Good evening")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

const header = React.createElement(
    "div",
    { id: "parent" }, 
    React.createElement(
      "div",
      { id: "child" }, 
      React.createElement("h1", {}, "Hello Good morning"),
      React.createElement("h2", {}, "Hello Good evening")
    )
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(header);
  
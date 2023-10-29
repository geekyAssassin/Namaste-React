import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* To create a Nested Structure and siblings(H1 and H2) like below
<div id = "parent">
    <div id = "child">
        <h1>Hi , I am H1 Tag</h1>
        <h2>Hi , I am H2 Tag</h2>
    </div>
    <div id = "child2">
        <h1>Hi , I am H1 Tag</h1>
        <h2>Hi , I am H2 Tag</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi, I am H1 Tag"),
    React.createElement("h2", {}, "Hi, I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi, I am H1 Tag"),
    React.createElement("h2", {}, "Hi, I am H2 Tag"),
  ]),
]);

root.render(parent);

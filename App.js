import React, { Component } from "react";
import ReactDOM from "react-dom/client";

/* React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
); */

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

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi, I am H1 Tag"),
//     React.createElement("h2", {}, "Hi, I am H2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hi, I am H1 Tag"),
//     React.createElement("h2", {}, "Hi, I am H2 Tag"),
//   ]),
// ]);

// console.log(heading);

// JSX - HTML like or XML-Like Structure
// JSX => React.createElement => ReactElement - JS Object => HTML ELement (Render)
// const jsxHeading = (
//   <h1 id="heading tabIndex =2"> Hello , Welcome to Namaste React</h1>
// );
// console.log(jsxHeading);

// Below is used to render React Element
// root.render(jsxHeading);

/* 
React Components
Two Ways of Creating them 
1. Class Components - Uses JS classes to create Components
2. Functional Components - Uses JS functions to create Components
const root = ReactDOM.createRoot(document.getElementById("root")); 
*/
// root.render(heading);

// Fucntional Components

// React Component
const Title = () => {
  return <h1 className="head">Namaste React 🚀</h1>;
};

/* If welcomeLine is a call to an api and the API is malicious then JSX takes care of the injection attacks when inside {}
 as JSX escapes it . Read about cross-side scripting */
const welcomeLine = <h1>Welcome to Namaste React</h1>;

// <Title /> is same as <Title> </Title>
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {welcomeLine}
    <h2 className="heading">Namaste React Functional Component</h2>
  </div>
);
// Above is the example of component composition where you are composing one or two components

// InOrder to render a JSX componet
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const JSXheading = (
  <h1 id="heading">
    Namaste React using JSX🚀
    <h4>Hello there!</h4>
  </h1>
);

const Title = () => <h1>Namaste React🚀</h1>;

// React Functional Component
const Heading = () => {
  return <h1>Namaste React Functional Component</h1>;
};

const Heading2 = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    <h1>Namaste React Functional Component 2</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(JSXheading);

root.render(<Heading2 />);

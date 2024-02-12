const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" , xyz:"attribute" },
//   "Hello world by React"
// );

// console.log(heading);  // In this heading is nothing but a reactElement and reactElement is at the end of the day a simple javascript object.

console.log(parent);

// ReactElement(Object) => (Browser Understand)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(parent);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Hello"),
  React.createElement("h1", {}, "React"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

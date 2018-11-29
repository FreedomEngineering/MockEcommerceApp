import React from "react";
import ReactDOM from "react-dom";

const greeting = "hello from javascript";

console.log(greeting);

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  console.log("OMG CLICKED!!");
  document.getElementsByTagName("h1")[0].innerText = greeting;
});

const Root = () => {
  return <h1>Whoa</h1>;
};

ReactDOM.render(<Root />, document.getElementById("root"));

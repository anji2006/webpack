import "./index.css";
import print1 from "./print";

function component() {
  let name: string = "9";
  const element = document.createElement("div");

  element.innerHTML = "Hiii Anji";

  name = "1";
  console.log(print1());

  return element;
}

document.body.appendChild(component());

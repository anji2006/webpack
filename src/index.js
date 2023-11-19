import _ from "loadsh";
import "./index.css";

import Icon from "./tree.png";
import Data from "./data.xml";
import Notes from "./data.csv";

import print from "./print";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack", "Anji"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  print();
  return element;
}

document.body.appendChild(component());

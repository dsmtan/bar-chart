"use strict";

let counter = 0;
const myArray = [];
const container = document.querySelector("#container");

function createBox() {
  if (counter > 40) {
    container.removeChild(container.firstChild);
  }

  const clone = document.querySelector("#boxtemplate").content.cloneNode(true);
  const box = clone.querySelector("#box");

  const boxHeight = myArray[myArray.length - 1] + "%";
  box.style.height = boxHeight;

  container.appendChild(clone);

  counter++;
  setTimeout(createBox, 500);
}

createBox();

function makeArray() {
  let customers = Math.floor(Math.random() * 35);
  myArray.push(customers);

  const MAX_LENGTH_ARR = 40;
  if (myArray.length > MAX_LENGTH_ARR) {
    myArray.shift();
  }

  console.log(myArray);

  setTimeout(makeArray, 500);
}

makeArray();

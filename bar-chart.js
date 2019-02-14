"use strict";

let counter = 0;
const myArray = [];
const container = document.querySelector("#container");

function createBox() {
  //create boxes from template
  const clone = document.querySelector("#boxtemplate").content.cloneNode(true);
  const box = clone.querySelector("#box");

  //set box-height to number of customers
  const boxHeight = myArray[myArray.length - 1] + "0px";
  box.style.height = boxHeight;

  container.appendChild(clone);

  counter++;
  scrollBoxes();
}

createBox();

function scrollBoxes() {
  setTimeout(createBox, 500);

  //remove the first one
  if (counter > 40) {
    document.querySelector("#box").remove();
  }
}

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

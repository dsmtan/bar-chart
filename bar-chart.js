"use strict";

function createBox() {
  const clone = document.querySelector("#boxtemplate").content.cloneNode(true);

  const box = clone.querySelector("#box");
  box.style.height = "100px";

  document.querySelector("#container").appendChild(clone);
}

let counter = 0;

function createBoxes() {
  createBox();
  counter++;

  if (counter < 10) {
    createBoxes();
  }
}

function scrollBoxes() {
  createBox();

  //remove first box
  document.querySelector("#box").remove();
}

//1 loop to create, 1 function to scroll, 1 function randomnmbrs

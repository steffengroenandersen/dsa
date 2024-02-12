"use strict";
window.addEventListener("load", start);

let lamps = [];
let checkboxes = [];
let lightSwitches = [];

function start() {
  console.log("Javascript kører");
  findAllTheLampsAndTheirCheckboxes();
  enableAllCheckboxes();
}

function findAllTheLampsAndTheirCheckboxes() {
  const lamps = document.querySelectorAll(".lamp");
  const checkboxes = document.querySelectorAll("input[type=checkbox]"); // firkant parantes er attribut selector.

  for (let i = 0; i < lamps.length; i++) {
    const theLamp = lamps[i];
    const theCheckbox = checkboxes[i];

    const lightSwitch = {
      lamp: theLamp,
      checkbox: theCheckbox,
    };

    lightSwitches.push(lightSwitch);
  }
}

function enableAllCheckboxes() {
  for (const lightSwitch of lightSwitches) {
    const lamp = lightSwitch.lamp;
    const checkbox = lightSwitch.checkbox;

    console.log(checkbox);
    checkbox.addEventListener("click", (event) => {
      console.log("checkbox clicked");
      if (checkbox.checked) {
        lamp.classList.add("on");
      } else {
        lamp.classList.remove("on");
      }
    });
  }
}

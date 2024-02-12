"use strict";
window.addEventListener("load", start);

let lamps = [];
let checkboxes = [];
let lightSwitches = [];

function start() {
  console.log("Javascript kører");
  findAllTheLampsAndTheirCheckboxes();
  enableAllCheckboxes();
  enableChaseLight();
}

function enableChaseLight() {
  console.log("enableChaseLight()");
  const button = document.querySelector("#chase_light").addEventListener("click", () => {
    for (const lightSwitch of lightSwitches) {
      setTimeout(() => {
        lightSwitch.checkbox.click();
      }, 1000); // 1000 milliseconds = 1 second
    }
  });
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

  lightSwitches[0].next = lightSwitches[1];
  lightSwitches[1].next = lightSwitches[2];
  lightSwitches[2].next = lightSwitches[3];
  lightSwitches[3].next = lightSwitches[4];
  lightSwitches[4].next = null;
}

function enableAllCheckboxes() {
  for (const lightSwitch of lightSwitches) {
    const lamp = lightSwitch.lamp;
    const checkbox = lightSwitch.checkbox;

    checkbox.addEventListener("click", (event) => {
      if (lightSwitch.next) {
        setTimeout(() => lightSwitch.next.checkbox.click(), 1000);
      }

      if (checkbox.checked) {
        lamp.classList.add("on");
      } else {
        lamp.classList.remove("on");
      }
    });
  }
}

let endNumber = 17179;
const currentDateMilliseconds = new Date().getTime();
let currentDateMillisecondsToDays =
  currentDateMilliseconds / (1000 * 60 * 60 * 24);

const currentYear = new Date().getFullYear() - 2000;
const purecounterElements = document.querySelectorAll(".purecounter");

for (let elem of purecounterElements) {
  elem.style.color = "black";
}

let dealsDone = currentDateMillisecondsToDays - endNumber;

document
  .querySelector(".purecounter1")
  .setAttribute("data-purecounter-end", dealsDone);

document
  .querySelector(".purecounter2")
  .setAttribute(
    "data-purecounter-end",
    Math.floor((dealsDone * 135000) / 1000000)
  );

document
  .querySelector(".purecounter3")
  .setAttribute("data-purecounter-end", currentYear - 11);

document
  .querySelector(".purecounter4")
  .setAttribute("data-purecounter-end", currentYear - 16);

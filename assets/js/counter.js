let endNumber = 17179;
const currentDateMilliseconds = new Date().getTime();
let currentDateMillisecondsToDays =
  currentDateMilliseconds / (1000 * 60 * 60 * 24);

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
  .setAttribute("data-purecounter-end", dealsDone * 135000);

console.log(currentDateMilliseconds);
console.log(currentDateMillisecondsToDays);

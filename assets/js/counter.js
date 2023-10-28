let endNumber = 17179;
const currentDateMilliseconds = new Date().getTime();
let currentDateMillisecondsToDays =
  currentDateMilliseconds / (1000 * 60 * 60 * 24);

document
  .querySelector(".purecounter1")
  .setAttribute(
    "data-purecounter-end",
    currentDateMillisecondsToDays - endNumber
  );

console.log(currentDateMilliseconds);
console.log(currentDateMillisecondsToDays);

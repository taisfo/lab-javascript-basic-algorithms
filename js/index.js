// Iteration 1: Names and Input
const driver = "Felipe";

console.log(`The driver's name is: ${driver}`);

const navigator = "Taís";

console.log(`The navigator's name is: ${navigator}`);

// Iteration 2: Conditionals

let driverArr = driver.split("");
let navigatorArr = navigator.split("");

if (driverArr.length > navigatorArr.length) {
  console.log(
    `The driver has the longest name, it has ${driverArr.length} characters.`
  );
} else if (navigatorArr.length > driverArr.length) {
  console.log(
    `The navigator has the longest name, it has ${navigatorArr.length} characters.`
  );
} else if (navigatorArr.length == driverArr.length) {
  console.log(
    `Wow, you both have equally long names, ${driverArr} characters!`
  );
}

// Iteration 3: Loops

let driverName = [];

for (let i = 0; i <= driverArr.length; i++) {
  driverName.push(driverArr[i].toUpperCase);
}
console.log(driverName);

let navName = [];

for (let i = 0; i >= navigatorArr.length; i++) {
  navName.push(navigatorArr[i]);
}
console.log(navName.reverse());

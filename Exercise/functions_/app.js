// Exercises: Level 1
// function fullName() {
//   let firstName = "Subhrajit";
//   let lastName = "Swain";
//   console.log(`${firstName} ${lastName}`);
// }

// fullName();

function fullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

fullName("Subhrajit", "Swain");

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(8, 3));

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(10, 20));

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(10, 20));
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(10, 20, 30));

function areaOfCircle(radius) {
  let area = 3.14 * radius * radius;
  return area;
}
console.log(areaOfCircle(10));

function circumOfCircle(radius) {
  let circumference = 2 * 3.14 * radius;
  return circumference;
}
console.log(circumOfCircle(10));

function calculateDensity(mass, volume) {
  let density = mass / volume;
  return density;
}
console.log(calculateDensity(10, 2));

function calculateSpeed(distance, time) {
  let speed = distance / time;
  return speed;
}
console.log(calculateSpeed(150, 3));

function calculateWeight(mass, gravity) {
  let weight = mass * gravity;
  return weight;
}
console.log(calculateWeight(50, 9.81));

function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(42));

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return { bmi: bmi.toFixed(2), category: "Underweight" };
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return { bmi: bmi.toFixed(2), category: "Normal weight" };
  } else if (bmi >= 25 && bmi <= 29.9) {
    return { bmi: bmi.toFixed(2), category: "Overweight" };
  } else {
    return { bmi: bmi.toFixed(2), category: "Obese" };
  }
}
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(90, 1.75));

function checkSeason(month) {
  month = month.toLowerCase();
  if (["december", "january", "february"].includes(month)) {
    return "Winter";
  } else if (["march", "april", "may"].includes(month)) {
    return "Spring";
  } else if (["june", "july", "august"].includes(month)) {
    return "Summer";
  } else if (["september", "october", "november"].includes(month)) {
    return "Autumn";
  } else {
    return "Invalid month";
  }
}
console.log(checkSeason("May"));
console.log(checkSeason("June"));
console.log(checkSeason("December"));

function findMax(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

// Exercises: Level 2
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([1, 3, 5, 7, 9]);

function showDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}`;
  console.log(formattedDateTime);
}
showDateTime();

function swapValues(x, y) {
  [x, y] = [y, x];
  console.log(`x = ${x}, y = ${y}`);
}
swapValues(3, 4);
swapValues(4, 5);

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArray(["A", "B", "C"]));

function capitalizeArray(arr) {
  let capitalizedArray = [];
  for (let i = 0; i < arr.length; i++) {
    capitalizedArray.push(arr[i].toUpperCase());
  }
  return capitalizedArray;
}
console.log(capitalizeArray(["Alok", "amit", "aysuh"]));

function addItem(arr, item) {
  arr.push(item);
  return arr;
}
console.log(addItem([1, 2, 3], 5));

function removeItem(arr, index) {
  arr.splice(index, 1);
  return arr;
}
console.log(removeItem([1, 2, 3, 4], 2));

function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(5));

function sumOfOdds(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(5));
function sumOfEven(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven(5));

function evensAndOdds(num) {
  let evenCount = 0;
  let oddCount = 0;
  while (num > 0) {
    const digit = num % 10;
    if (digit % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
    num = Math.floor(num / 10);
  }
  console.log(`The number of odds are ${oddCount}.`);
  console.log(`The number of evens are ${evenCount}.`);
}

evensAndOdds(100);

function sum(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

function randomUserIp() {
  const randomOctet = () => Math.floor(Math.random() * 256);
  return `${randomOctet()}.${randomOctet()}.${randomOctet()}.${randomOctet()}`;
}
console.log(randomUserIp());

function randomMacAddress() {
  const randomHex = () =>
    Math.floor(Math.random() * 16)
      .toString(16)
      .padStart(2, "0");
  return `${randomHex()}:${randomHex()}:${randomHex()}:${randomHex()}:${randomHex()}:${randomHex()}`;
}
console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  const randomHex = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
  return `#${randomHex()}${randomHex()}${randomHex()}`;
}

console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
}
console.log(userIdGenerator());
console.log(userIdGenerator());

// Exercises: Level 3

// function userIdGeneratedByUser() {
//   const numChars = parseInt(
//     prompt("Enter the number of characters for each ID:")
//   );
//   const numIds = parseInt(prompt("Enter the number of IDs to generate:"));

//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let generatedIds = "";

//   const generateUserId = () => {
//     let id = "";
//     for (let i = 0; i < numChars; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       id += characters[randomIndex];
//     }
//     return id;
//   };
//   for (let i = 0; i < numIds; i++) {
//     generatedIds += generateUserId() + "\n";
//   }

//   return generatedIds.trim();
// }
// console.log(userIdGeneratedByUser());

function rgbColorGenerator() {
  const randomColorValue = () => Math.floor(Math.random() * 256);
  const r = randomColorValue();
  const g = randomColorValue();
  const b = randomColorValue();

  return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator());

function arrayOfHexaColors(num) {
  const randomHex = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
  const colors = [];

  for (let i = 0; i < num; i++) {
    colors.push(`#${randomHex()}${randomHex()}${randomHex()}`);
  }

  return colors;
}
console.log(arrayOfHexaColors(5));

function arrayOfRgbColors(num) {
  const randomColorValue = () => Math.floor(Math.random() * 256);
  const colors = [];

  for (let i = 0; i < num; i++) {
    const r = randomColorValue();
    const g = randomColorValue();
    const b = randomColorValue();
    colors.push(`rgb(${r},${g},${b})`);
  }

  return colors;
}
console.log(arrayOfRgbColors(5));

function convertHexaToRgb(hex) {
  const hexWithoutHash = hex.slice(1);
  const r = parseInt(hexWithoutHash.substring(0, 2), 16);
  const g = parseInt(hexWithoutHash.substring(2, 4), 16);
  const b = parseInt(hexWithoutHash.substring(4, 6), 16);

  return `rgb(${r},${g},${b})`;
}
console.log(convertHexaToRgb("#ff5733"));

function convertRgbToHexa(rgb) {
  const rgbValues = rgb.match(/\d+/g);
  const r = parseInt(rgbValues[0]).toString(16).padStart(2, "0");
  const g = parseInt(rgbValues[1]).toString(16).padStart(2, "0");
  const b = parseInt(rgbValues[2]).toString(16).padStart(2, "0");

  return `#${r}${g}${b}`;
}
console.log(convertRgbToHexa("rgb(255, 87, 51)"));

function generateColors(num, colorType) {
  if (colorType === "hex") {
    return arrayOfHexaColors(num);
  } else if (colorType === "rgb") {
    return arrayOfRgbColors(num);
  } else {
    throw new Error('Invalid color type. Please choose "hex" or "rgb".');
  }
}
console.log(generateColors(3, "hex"));
console.log(generateColors(3, "rgb"));

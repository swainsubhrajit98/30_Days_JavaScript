// Exercise: Level 1

let emtArray = [];
let webTechsArray = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechsArray.length);
console.log(webTechsArray[0]);
console.log(webTechsArray[Math.floor(webTechsArray.length / 2)]);
console.log(webTechsArray[webTechsArray.length - 1]);

let mixedDataTypes = [
  "John Smith",
  "USA",
  9658754869,
  [1, 2, 3, 4],
  "Employee",
  true,
  "JavaScript",
];
console.log(mixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(`Number of compamies : ${itCompanies.length}`);
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
for (let item = 0; item < itCompanies.length; item++) {
  console.log(itCompanies[item].toUpperCase());
}
console.log(`${itCompanies.join(", ")} are big it companies.`);

if (itCompanies.includes("IBM")) {
  console.log("Company found");
} else {
  console.log("Company is not found");
}

let companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];
  let oCount = company.split("o").length - 1;
  if (oCount > 1) {
    companiesWithMoreThanOneO.push(company);
  }
}
console.log(companiesWithMoreThanOneO);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));

let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompanies;
if (itCompanies.length % 2 !== 0) {
  middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1);
} else {
  middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1);
}
console.log(middleCompanies);

let middleIndexVal = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 !== 0) {
  itCompanies.splice(middleIndexVal, 1);
} else {
  itCompanies.splice(middleIndexVal - 1, 2);
}
console.log(itCompanies);

console.log(itCompanies.shift());
console.log(itCompanies.pop());
itCompanies = [];
console.log(itCompanies);

// Exercise: Level 2

console.log("Countries are:", countries);
console.log("Webtechs are:", webTechs);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let cleanText = text.replace(/[^\w\s]/g, "");
let words = cleanText.split(/\s+/);
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

const allergy = true;
if (allergy && shoppingCart.includes("Honey")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log(shoppingCart);

const teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = "Green Tea";
}
console.log(shoppingCart);

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}
console.log(countries);

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
console.log(frontEnd.concat(backEnd));

// Exercise: Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort((a, b) => a - b));
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);

let medianAge;
const middleIndexValue = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
  medianAge = (ages[middleIndexValue - 1] + ages[middleIndexValue]) / 2;
} else {
  medianAge = ages[middleIndexValue];
}
console.log(medianAge);
const averageAge = ages.reduce((acc, age) => acc + age, 0) / ages.length;
console.log(averageAge);

const ageRange = maxAge - minAge;
console.log(ageRange);
console.log(Math.abs(minAge - averageAge));
console.log(Math.abs(maxAge - averageAge));

console.log(countries.slice(0,10));
const middleInx = Math.floor(countries.length / 2);
let middleCountries;
if (countries.length % 2 === 0) {
    middleCountries = [countries[middleInx - 1], countries[middleInx]];
} else {
    middleCountries = [countries[middleInx]];
}
console.log(middleCountries);


let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
    firstHalf = countries.slice(0, middleInx);
    secondHalf = countries.slice(middleInx);
} else {
    firstHalf = countries.slice(0, middleInx + 1);
    secondHalf = countries.slice(middleInx + 1);
}

console.log("First half of the countries:", firstHalf);
console.log("Second half of the countries:", secondHalf);

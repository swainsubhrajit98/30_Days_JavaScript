// Exercises: Level 1

let firstName = "John";
let lastName = "Smith";
let country = "USA";
let city = "Ney York";
let age = 26;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof "10" == 10);
console.log(parseInt("9.8") == 10);

console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(14 == "4");
console.log(14 === "4");

let py = "python";
let jr = "jargon";
console.log(py.length > jr.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

console.log(py.includes("on"));
console.log(jr.includes("on"));

let todayDate = new Date();
console.log(todayDate.getFullYear());
console.log(todayDate.getMonth()+1);
console.log(todayDate.getDate());
console.log(todayDate.getDate());
console.log(todayDate.getHours());
console.log(todayDate.getMinutes());

let allSecond = Date.now();
console.log(allSecond);

// Exercises: Level 2

// let base = parseInt(prompt("Enter base of the triangle: "));
// let height = parseInt(prompt("Enter height of the triangle: "));
// let area = 0.5*base*height;
// alert(`The are of the Triangle is:${area}`);
// console.log(area);

// let sideA = parseInt(prompt("Enter Side A: "));
// let sideB = parseInt(prompt("Enter Side B: "));
// let sideC = parseInt(prompt("Enter Side C: "));
// let perimeter = sideA + sideB + sideC;
// alert(`The Perimeter of the Triangle is : ${perimeter}`);
// console.log(perimeter);

// let length = parseInt(prompt("Enter length of Rectangle: "));
// let width = parseInt(prompt("Enter width of Rectangle: "));
// let recArea = length * width;
// let recParameter = 2 * (length+width);
// alert(`Area of the Rectangle is ${recArea}`);
// alert(`Parameter of the Rectangle is ${recParameter}`);
// console.log(recArea);
// console.log(recParameter);

// let radius = parseInt(prompt("Enter radius of the Circle: "));
// let cirArea = 3.14 * radius * radius;
// let circumference = 2 * 3.14 * radius;
// alert(`Area of the circle is : ${cirArea}`);
// alert(`Circumference of the circle is : ${circumference}`);
// console.log(cirArea);
// console.log(circumference);

// let hours = parseInt(prompt("Enter hours: "));
// let rate = parseInt(prompt("Enter rate per hour: "));
// let payOfPerson = hours * rate;
// alert(`The pay of Person is: ${payOfPerson}`);
// console.log(payOfPerson);

let myName = "subhrajit";
myName.length > 7
  ? console.log(`My name is long`)
  : console.log(`My name is short`);

let fName = "subhrajit";
let lName = "swain";
fName.length > lName.length
  ? console.log(
      `Your first name ${fName} is greater than your family name ${lName}`
    )
  : console.log(
      `Your first name ${fName} is less than your family name ${lName}`
    );

let myAge = 250;
let yourAge = 25;
let howOld = myAge - yourAge;
console.log(`I am ${howOld} older than you`);

// let currentYear = new Date().getFullYear();
// let birthYear = prompt("Please enter the year you were born:");
// let driverAge = currentYear - birthYear;
// let yearToWait = 18 - driverAge;

// driverAge >= 18
//   ? alert("You are allow to drive")
//   : alert(
//       `You are ${driverAge}.You will be allowed to drive after ${yearToWait} years`
//     );

// let years = prompt("Enter the number of years:");
// let secondsInYear = 365.25 * 24 * 60 * 60;
// let secondsLived = years * secondsInYear;
// alert(`You lived ${secondsLived} seconds`);

let nowDate  = new Date();
let fYear = nowDate.getFullYear();
let fMonth = String(nowDate.getMonth()+1).padStart(2, '0');
let fDate = String(nowDate.getDate()).padStart(2, '0');
let fHour = String(nowDate.getHours()).padStart(2, '0');
let fMinute = String(nowDate.getMinutes()).padStart(2, '0');
let fSecond = String(nowDate.getSeconds()).padStart(2, '0');



console.log(`${fYear}-${fMonth}-${fDate} ${fHour}:${fMinute}:${fSecond}`);
console.log(`${fDate}-${fMonth}-${fYear} ${fHour}:${fMinute}:${fSecond}`);
console.log(`${fDate}/${fMonth}/${fYear} ${fHour}:${fMinute}:${fSecond}`);
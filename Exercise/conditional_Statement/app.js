// Exercises: Level 1
// let userAge = parseInt(prompt("Enter your Age: "));
// let yearToWait = 18 - userAge;

// if (userAge >= 18) {
//   alert("Yoou are old enough to drive");
// } else {
//   alert(`You are left with ${yearToWait} years to drive`);
// }

// let myAge = 26;
// let yourAge = parseInt(prompt("Enter your Age:"));
// let ageDiff = Math.abs(myAge - yourAge);
// if (myAge > yourAge) {
//   alert(`I am ${ageDiff} year older than you`);
// } else if (myAge < yourAge) {
//   alert(`You are ${ageDiff} year older than me`);
// } else {
//   alert("our age is same");
// };

let a = 4;
let b = 3;

// using if else
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}
// ternary operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

// let num = parseInt(prompt("Enter a number: "));
// if(num%2==0){
//     alert(`${num} is a Even Number`);
// }else{
//     alert(`${num} is a Odd Number`);
// }

// Exercises: Level 2

// let score = parseInt(prompt("Enter Score: "));
// if (score >= 90 && score <= 100) {
//   console.log("Your grade is A");
// } else if (score >= 80 && score <= 89) {
//   console.log("Your grade is B");
// } else if (score >= 70 && score <= 79) {
//   console.log("Your grade is C");
// } else if (score >= 60 && score <= 69) {
//   console.log("Your grade is D");
// } else if (score >= 50 && score <= 59) {
//   console.log("Your grade is E");
// } else if (score >= 0 && score <= 49) {
//   console.log("Your grade is F");
// } else {
//   console.log("You enter invalid score");
// }

// let userInput = prompt("Enter a month");
// let month = userInput.toLowerCase();
// if (month === "september" || month === "october" || month === "November") {
//   console.log("The season is Autumn");
// } else if (month === "december" || month === "january" || month === "february") {
//   console.log("The season is Winter");
// } else if (month === "march" || month === "april" || month === "may") {
//   console.log("The season is Spring");
// } else if (month === "june" || month === "july" || month === "auguest") {
//   console.log("The season is Summer");
// } else {
//   console.log("You enter invalid month");
// }

// let day = prompt("What is the day today ? ");
// day = day.toLowerCase();

// if (day === "saturday" || day === "sunday") {
//   console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a weekend");
// } else if (
//   day === "monday" ||
//   day === "tuesday" ||
//   day === "wednesday" ||
//   day === "thursday" ||
//   day === "friday"
// ) {
//   console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a working day");
// } else {
//   console.log("You enter invalid day");
// }

// let month = prompt("Enter a month:");
// month = month.toLowerCase();
// switch (month) {
//     case "january":
//     case "march":
//     case "may":
//     case "july":
//     case "august":
//     case "october":
//     case "december":
//         console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 31 days.");
//         break;
//     case "february":
//         console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 28 days.");
//         break;
//     case "april":
//     case "june":
//     case "september":
//     case "november":
//         console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 30 days.");
//         break;
//     default:
//         console.log("You Enter Invalid Month");
// }

// let month = prompt("Enter a month: ");
// let year = prompt("Enter a year: ");
// month = month.toLowerCase();
// let isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

// switch (month) {
//     case "january":
//     case "march":
//     case "may":
//     case "july":
//     case "august":
//     case "october":
//     case "december":
//         console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 31 days.");
//         break;
//     case "february":
//         if (isLeap) {
//             console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 29 days.");
//         } else {
//             console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 28 days.");
//         }
//         break;
//     case "april":
//     case "june":
//     case "september":
//     case "november":
//         console.log(month.charAt(0).toUpperCase() + month.slice(1) + " has 30 days.");
//         break;
//     default:
//         console.log("You enter invalid month.");
// }

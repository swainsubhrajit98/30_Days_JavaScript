// Exercises: Level 1
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const mernStack = ["MongoDB", "Express", "React", "Node"];
//for loop(0 - 10)
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// //while loop(0 - 10)
// let i = 0
// while (i <= 10) {
//   console.log(i);
//   i++;
// };
// //do while(0 - 10)
// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a <= 10);

//for loop(10-0)
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }
//   //while loop(10-0)
//   let b = 10;
//   while (b >= 0) {
//     console.log(b);
//     b--;
//   };
//   //do while(10-0)
//   let c = 10;
//   do {
//     console.log(c);
//     c--;
//   } while (c >= 0);

// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}  ${i * i}  ${i * i * i}`);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

let sumOfEven = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEven += i;
  }
}
let sumOfOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    sumOfOdd += i;
  }
}

console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}`);
console.log([sumOfEven,sumOfOdd]);

let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(randomNumbers);


let uniqueRandomNumbers = [];
while (uniqueRandomNumbers.length < 5) {
    let randomNum = Math.floor(Math.random() * 100);
    if (!uniqueRandomNumbers.includes(randomNum)) {
        uniqueRandomNumbers.push(randomNum);
    }
}
console.log(uniqueRandomNumbers);

function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 6; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
}
console.log(generateRandomId());


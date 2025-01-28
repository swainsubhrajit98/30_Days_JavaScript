// Exercises:Level 1

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.table(countries);

const countriesObject = Object.fromEntries(countries);
console.table(countriesObject);

// Grouping the logs related to countries
console.group('Countries List');
console.table(countries);
console.groupEnd();

// Grouping the logs related to countries as an object
console.group('Countries Object');
console.table(countriesObject);
console.groupEnd();


console.assert(10 > 2 * 10, 'Assertion failed: 10 is not greater than 2 * 10');
console.warn('This is a warning message');
console.error('This is an error message');

// Exercises:Level 3 

const arr = Array.from({ length: 1000000 }, (_, i) => i); 

// 1. While loop
console.time('While Loop');
let i = 0;
while (i < arr.length) {
  arr[i];
  i++;
}
console.timeEnd('While Loop');

// 2. For loop
console.time('For Loop');
for (let i = 0; i < arr.length; i++) {
  arr[i];
}
console.timeEnd('For Loop');

// 3. For...of loop
console.time('For...of Loop');
for (const num of arr) {
  num;
}
console.timeEnd('For...of Loop');

// 4. forEach loop
console.time('forEach Loop');
arr.forEach(num => {
  num;
});
console.timeEnd('forEach Loop');


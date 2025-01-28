// Exercises: Level 1
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

numbers.forEach((number) => console.log(number * 2));

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const multiplyByTwo = (num) => {
  return num * 2;
};
const doubleTheValue = numbers.map(multiplyByTwo);
console.log(doubleTheValue);
const doubleTheNum = numbers.map((num) => num * 2);

countries.forEach((country) => console.log(country));
names.forEach((name) => console.log(name));
numbers.forEach((number) => console.log(number));

const uppercaseCountries = countries.map((country) => country.toUpperCase());
console.log(uppercaseCountries);

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

const sqrOfNum = numbers.map((number) => number ** 2);
console.log(sqrOfNum);

names.map((name) => console.log(name.toUpperCase()));

const productPrices = products.map((product) => product.price);
console.log(productPrices);

const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesWithLand);

const countriesHave6Letter = countries.filter(
  (country) => country.length === 6
);
console.log(countriesHave6Letter);

const countriesHaveMoreThan6 = countries.filter(
  (country) => country.length > 6
);
console.log(countriesHaveMoreThan6);

const countriesNameEndsWith = countries.filter((country) =>
  country.startsWith("E")
);
console.log(countriesNameEndsWith);

const validPrices = products.filter(
  (product) => product.price !== " " && product.price !== ""
);
console.log(validPrices);

function getStringLists(arr) {
  return arr.filter((item) => typeof item === "string");
}
const mixedArray = [1, "apple", true, "banana", 42, "cherry", null, "grape"];
const stringArray = getStringLists(mixedArray);
console.log(stringArray);

const sumOfItems = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfItems);

const sentence = countries.reduce((accumulator, country, index, array) => {
  if (index === array.length - 1) {
    return `${accumulator}and ${country} are north European countries.`;
  } else {
    return `${accumulator}${country}, `;
  }
}, "");
console.log(sentence);

const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber);

const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven);

const nameLength7 = names.some((name) => name.length > 7);
console.log(nameLength7);

const containsLand = countries.every((country) => country.includes("land"));
console.log(containsLand);

const foundNumber = numbers.find((number) => number > 4);
console.log(foundNumber);

const foundIndex = numbers.findIndex((number) => number > 4);
console.log(foundIndex);

const has6LetterCountry = countries.find((country) => country.length === 6);
console.log(has6LetterCountry);

const has6LetterPosition = countries.findIndex(
  (country) => country.length === 6
);
console.log(has6LetterPosition);

const norwayIndex = countries.findIndex((country) => country === "Norway");
console.log(norwayIndex);

const russiaIndex = countries.findIndex((country) => country === "Russia");
console.log(russiaIndex);

// Exercises: Level 2
const totalPrice = products
  .filter((product) => typeof product.price === "number" && product.price > 0)
  .map((product) => product.price)
  .reduce((total, price) => total + price, 0);
console.log(totalPrice);

const totalPriceOfProduct = products.reduce((total, product) => {
  const price = parseFloat(product.price);
  if (!isNaN(price) && price > 0) {
    return total + price;
  }
  return total;
}, 0);
console.log(totalPriceOfProduct);

const allCountries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Afghanistan",
  "India",
  "Iceland",
  "Pakistan",
  "Estonia",
  "United States",
  "Canada",
  "Brazil",
  "Russia",
  "China",
  "Australia",
  "Japan",
  "South Korea",
  "Germany",
  "France",
];

function categorizeCountries(patterns) {
  return allCountries.filter((country) =>
    patterns.some((pattern) => country.includes(pattern))
  );
}
const patterns = ["land", "ia", "island", "stan"];
const categorizedCountries = categorizeCountries(patterns);
console.log(categorizedCountries);

function countStartingLetters(allCountries) {
  const letterCounts = {};
  allCountries.forEach((country) => {
    const firstLetter = country[0].toUpperCase();
    if (letterCounts[firstLetter]) {
      letterCounts[firstLetter] += 1;
    } else {
      letterCounts[firstLetter] = 1;
    }
  });

  const result = Object.keys(letterCounts).map((letter) => ({
    letter: letter,
    count: letterCounts[letter],
  }));

  return result;
}

const startingLetterCounts = countStartingLetters(allCountries);
console.log(startingLetterCounts);

function getFirstTenCountries(allCountries) {
  return allCountries.slice(0, 10);
}
const firstTenCountries = getFirstTenCountries(allCountries);
console.log(firstTenCountries);

function getLastTenCountries(allCountries) {
  return allCountries.slice(-10);
}

const lastTenCountries = getLastTenCountries(allCountries);
console.log(lastTenCountries);

function findMostCommonInitialLetter(allCountries) {
  const firstLetters = allCountries.map((country) => country[0].toUpperCase());

  const letterCounts = firstLetters.reduce((counts, letter) => {
    counts[letter] = (counts[letter] || 0) + 1;
    return counts;
  }, {});

  let maxLetter = "";
  let maxCount = 0;

  for (const [letter, count] of Object.entries(letterCounts)) {
    if (count > maxCount) {
      maxLetter = letter;
      maxCount = count;
    }
  }

  return { letter: maxLetter, count: maxCount };
}

const mostCommonLetter = findMostCommonInitialLetter(allCountries);
console.log(mostCommonLetter);

const statistics = {
  data: [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26],

  count() {
    return this.data.length;
  },

  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  },

  min() {
    return Math.min(...this.data);
  },

  max() {
    return Math.max(...this.data);
  },

  range() {
    return this.max() - this.min();
  },

  mean() {
    return this.sum() / this.count();
  },

  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      return sorted[mid];
    }
  },

  mode() {
    const frequency = {};
    let maxCount = 0;
    let mode = [];
    this.data.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mode = [num];
      } else if (frequency[num] === maxCount) {
        mode.push(num);
      }
    });
    return { mode: mode[0], count: maxCount }; 
  },

  var() {
    const mean = this.mean();
    const variance = this.data.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / this.count();
    return variance;
  },

  std() {
    return Math.sqrt(this.var());
  },

  freqDist() {
    const frequency = {};
    this.data.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    return Object.entries(frequency)
      .map(([key, value]) => [(value / this.count()) * 100, Number(key)])
      .sort((a, b) => b[0] - a[0]);
  },

  describe() {
    return {
      count: this.count(),
      sum: this.sum(),
      min: this.min(),
      max: this.max(),
      range: this.range(),
      mean: this.mean(),
      median: this.median(),
      mode: this.mode(),
      variance: this.var(),
      std: this.std(),
      freqDist: this.freqDist(),
    };
  }
};

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist()); 
console.log(statistics.describe());

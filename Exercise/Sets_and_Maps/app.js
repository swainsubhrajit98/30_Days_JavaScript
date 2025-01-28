// Exercises:Level 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const emptySet = new Set();
console.log(emptySet);

const setRange = new Set();
for (let i = 0; i <= 10; i++) {
  setRange.add(i);
}
console.log(setRange);

const numbersSet = new Set([4, 5, 8, 9]);
numbersSet.delete(8);
console.log(numbersSet);

const clearSet = new Set([3, 4, 5, 7]);
clearSet.clear();
console.log(clearSet);

const countriesSet = new Set([
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
]);
console.log(countriesSet);

const countriesMap = new Map();
const countriesArray = ["Finland", "Sweden", "Norway"];

countriesArray.forEach((country) => {
  countriesMap.set(country, country.length);
});
console.log(countriesMap);

// Exercises:Level 2

const union = new Set([...a, ...b]);
console.log(union);

const intersection = new Set([...a].filter((item) => b.includes(item)));
console.log(intersection);

const difference = new Set([...a].filter((item) => !b.includes(item)));
console.log(difference);

// Exercises:Level 3
const allLanguages = countries.reduce((acc, country) => {
  if (Array.isArray(country.languages)) {
    country.languages.forEach((language) => acc.add(language));
  } else {
    acc.add(country.languages);
  }
  return acc;
}, new Set());

console.log(`Number of unique languages: ${allLanguages.size}`);


const languageCount = countries.reduce((acc, country) => {
  const languages = Array.isArray(country.languages)
    ? country.languages
    : [country.languages];
  languages.forEach((language) => {
    acc[language] = (acc[language] || 0) + 1;
  });
  return acc;
}, {});
const sortedLanguages = Object.entries(languageCount)
  .map(([language, count]) => ({ language, count }))
  .sort((a, b) => b.count - a.count);
const top10Languages = sortedLanguages.slice(0, 10);
console.log(top10Languages);

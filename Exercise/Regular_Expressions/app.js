// Exercises: Level 1
const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const salaryRegex = /(\d+) euro from salary per month/;
const bonusRegex = /(\d+) euro annual bonus/;
const onlineCoursesRegex = /(\d+) euro online courses per month/;

const salaryPerMonth = parseInt(text.match(salaryRegex)[1]);
const annualBonus = parseInt(text.match(bonusRegex)[1]);
const onlineCoursesPerMonth = parseInt(text.match(onlineCoursesRegex)[1]);

const totalAnnualIncome =
  salaryPerMonth * 12 + annualBonus + onlineCoursesPerMonth * 12;
console.log("Total Annual Income: ", totalAnnualIncome);

const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
const sortedPoints = points.map(Number).sort((a, b) => a - b);
const minPoint = sortedPoints[0];
const maxPoint = sortedPoints[sortedPoints.length - 1];
const distance = Math.abs(maxPoint - minPoint);

console.log("Sorted Points: ", sortedPoints);
console.log("Distance between the two furthest particles: ", distance);

function is_valid_variable(str) {
  const regex = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
  return regex.test(str);
}

console.log(is_valid_variable("first_name")); // True
console.log(is_valid_variable("first-name")); // False
console.log(is_valid_variable("1first_name")); // False
console.log(is_valid_variable("firstname")); // True

// Exercises: Level 2

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(paragraph, limit = 10) {
  const cleanedText = paragraph.toLowerCase().replace(/[^\w\s]/g, "");
  const words = cleanedText.split(/\s+/);
  const wordCount = {};
  words.forEach((word) => {
    if (word) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });
  const wordArray = Object.keys(wordCount).map((word) => ({
    word: word,
    count: wordCount[word],
  }));
  const sortedWords = wordArray.sort((a, b) => b.count - a.count);
  return sortedWords.slice(0, limit);
}
console.log(tenMostFrequentWords(paragraph, 10));

// Exercises: Level 3

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(text) {
  const cleanedText = text.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
  const words = cleanedText.split(/\s+/);
  const wordCount = {};
  words.forEach((word) => {
    if (word) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });

  const sortedWords = Object.keys(wordCount)
    .map((word) => ({ word: word, count: wordCount[word] }))
    .sort((a, b) => b.count - a.count);
  return sortedWords.slice(0, 3);
}
console.log(cleanText(sentence));

function cleanText(text) {
  return text.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
}
function mostFrequentWords(text) {
  const cleanedText = cleanText(text);
  const words = cleanedText.split(/\s+/);
  const wordCount = {};
  words.forEach((word) => {
    if (word) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  });
  const sortedWords = Object.keys(wordCount)
    .map((word) => ({ word: word, count: wordCount[word] }))
    .sort((a, b) => b.count - a.count);

  return sortedWords.slice(0, 3);
}
const cleanedText = cleanText(sentence);
console.log(mostFrequentWords(cleanedText));

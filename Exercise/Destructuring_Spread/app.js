// Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const country = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
let [e, pi, gravity, bodyTemp, boilingTemp] = constants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

let [fin, est, sw, den, nor] = country;
console.log(fin, est, sw, den, nor);

let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

// Exercises: Level 2

users.forEach((user) => {
  const keys = Object.keys(user);
  console.log(keys);
});

const usersWithLessThanTwoSkills = users.filter(
  (user) => user.skills.length < 2
);
console.log(usersWithLessThanTwoSkills);

countries.forEach(({ name, capital, population, languages }) => {
  console.log(`Country: ${name}`);
  console.log(`Capital: ${capital}`);
  console.log(`Population: ${population}`);
  console.log(`Languages: ${languages.join(", ")}`);
  console.log("---");
});

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => ({
    name,
    skills,
    scores,
  }));
}
console.log(convertArrayToObject(students));

const studentsDetails = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = {
  ...studentsDetails,
  skills: {
    ...studentsDetails.skills,
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
      { skill: "Bootstrap", level: 8 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
      { skill: "Express", level: 9 },
    ],
    dataBase: [
      { skill: "MongoDB", level: 7.5 },
      { skill: "SQL", level: 8 },
    ],
    dataScience: ["Python", "R", "D3.js", "SQL"],
  },
};

console.log(newStudent);

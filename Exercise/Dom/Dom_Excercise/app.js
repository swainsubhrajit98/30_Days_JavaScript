// Exercise: Level 1
const firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent);

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
console.log(p1.textContent);
console.log(p2.textContent);
console.log(p3.textContent);
console.log(p4.textContent);

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

allParagraphs.forEach((paragraph) => {
  console.log(paragraph.textContent);
});

p4.textContent = "Fourth Paragraph";
console.log(p4.textContent);

allParagraphs.forEach((paragraph, index) => {
  paragraph.setAttribute("id", `new-id-${index + 1}`);
  paragraph.className = `new-class-${index + 1}`;
});

console.log(allParagraphs[0].id);
console.log(allParagraphs[0].className);

// Exercise: Level 2
allParagraphs.forEach((paragraph) => {
  paragraph.style.color = "blue";
  paragraph.style.backgroundColor = "yellow";
  paragraph.style.border = "2px solid black";
  paragraph.style.fontSize = "18px";
  paragraph.style.fontFamily = "Arial, sans-serif";
});

allParagraphs.forEach((paragraph, index) => {
  if (index === 0 || index === 2) {
    paragraph.style.color = "green";
  }
  if (index === 1 || index === 3) {
    paragraph.style.color = "red";
  }
});

allParagraphs.forEach((paragraph, index) => {
  paragraph.textContent = `Updated text of paragraph ${index + 1}`;
  paragraph.setAttribute("id", `updated-id-${index + 1}`);
  paragraph.className = `updated-class-${index + 1}`;
});

allParagraphs.forEach((paragraph) => {
  console.log(paragraph.textContent);
  console.log(paragraph.id);
  console.log(paragraph.className);
});

// Exercise: Level 3

//  DOM: Mini project 1
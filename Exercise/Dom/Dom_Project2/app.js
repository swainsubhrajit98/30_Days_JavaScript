const yearElement = document.getElementById("year");

function changeYearColor() {
  const colors = ["red", "blue", "green", "purple", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  yearElement.style.color = randomColor;
}
setInterval(changeYearColor, 1000);

const dateTimeElement = document.getElementById("date-time");
function changeDateTimeBackground() {
  const colors = [
    "lightgray",
    "lightyellow",
    "lightblue",
    "lightgreen",
    "lightpink",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  dateTimeElement.style.backgroundColor = randomColor;
}
setInterval(changeDateTimeBackground, 1000);

function updateCurrentTime() {
  const currentTimeElement = document.getElementById("current-time");
  const now = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  let hours = now.getHours(); 
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  currentTimeElement.textContent = `${formattedDate} ${formattedTime}`;
}

setInterval(updateCurrentTime, 1000);

const challenges = document.querySelectorAll("li");
challenges.forEach((challenge) => {
  if (challenge.classList.contains("completed")) {
    challenge.style.backgroundColor = "green";
  } else if (challenge.classList.contains("ongoing")) {
    challenge.style.backgroundColor = "yellow";
  } else if (challenge.classList.contains("coming")) {
    challenge.style.backgroundColor = "red";
  }
});

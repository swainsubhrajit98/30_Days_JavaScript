console.log(countries);

document.getElementById("totalCountries").textContent = countries.length;
const container = document.getElementById("countryList");
countries.forEach((country) => {
  const div = document.createElement("div");
  div.classList.add("country-box");
  div.textContent = country;
  container.appendChild(div);
});

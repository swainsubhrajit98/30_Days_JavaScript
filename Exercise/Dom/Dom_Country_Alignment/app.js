const filterInput = document.getElementById("filterInput");
const totalCountriesElement = document.getElementById("totalCountries");
const filteredCountElement = document.getElementById("filteredCount");
const container = document.getElementById("countryList");

window.addEventListener("DOMContentLoaded", () => {
  totalCountriesElement.textContent = countries.length;
  filteredCountElement.textContent = countries.length;
  displayCountries(countries);
});

function displayCountries(filteredCountries) {
  container.innerHTML = "";
  filteredCountries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country-box");
    div.textContent = country;
    container.appendChild(div);
  });
}

filterInput.addEventListener("input", () => {
  const searchValue = filterInput.value.toUpperCase();

  if (searchValue) {
    const filteredCountries = countries.filter(
      (country) =>
        country.toUpperCase().startsWith(searchValue) ||
        country.toUpperCase() === searchValue
    );

    filteredCountElement.textContent = filteredCountries.length;
    displayCountries(filteredCountries);
  } else {
    filteredCountElement.textContent = countries.length;
    displayCountries(countries);
  }
});

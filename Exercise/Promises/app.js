// Exercises: Level 1
const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((response) => {
    return response.json();
  })
  .then((countries) => {
    countries.forEach((country) => {
      const { name, capital, languages, population, area } = country;
      console.log("Country: " + name);
      console.log("Capital: " + capital);
      console.log(
        "Languages: " +
          (languages ? languages.map((lang) => lang.name).join(", ") : "N/A")
      );
      console.log("Population: " + population);
      console.log("Area: " + area);
      console.log("--------------------------");
    });
  })
  .catch((error) => {
    console.error("Error fetching the data:", error);
  });

//   Exercises: Level 2
const catsAPI = "https://api.thecatapi.com/v1/breeds";
let catNames = [];
fetch(catsAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    catNames = data.map((cat) => cat.name);
    console.log(catNames);
  })
  .catch((error) => {
    console.error("Error fetching the data:", error);
  });

//   Exercises: Level 3

fetch(catsAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const weights = data.map((cat) => {
      const metricWeight = cat.weight.metric.split(" - ")[0];
      return parseFloat(metricWeight);
    });

    const averageWeight =
      weights.reduce((sum, weight) => sum + weight, 0) / weights.length;

    console.log(
      `Average weight of cats in metric unit: ${averageWeight.toFixed(2)} kg`
    );
  })
  .catch((error) => {
    console.error("Error fetching the data:", error);
  });

fetch(countriesAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const largestCountries = data.sort((a, b) => b.area - a.area).slice(0, 10);

    largestCountries.forEach((country) => {
      console.log(`${country.name}: ${country.area} km²`);
    });
  })
  .catch((error) => {
    console.error("Error fetching the data:", error);
  });

fetch(countriesAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const languagesSet = new Set();
    data.forEach((country) => {
      if (country.languages) {
        country.languages.forEach((language) => {
          languagesSet.add(language.name);
        });
      }
    });
    console.log(
      `Total number of languages used as official languages: ${languagesSet.size}`
    );
  })
  .catch((error) => {
    console.error("Error fetching the data:", error);
  });

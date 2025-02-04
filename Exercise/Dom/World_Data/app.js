function getMostSpokenLanguages() {
    let languageMap = {};
    countries.forEach(country => {
        country.languages.forEach(lang => {
            if (languageMap[lang]) {
                languageMap[lang] += 1;
            } else {
                languageMap[lang] = 1;
            }
        });
    });

    let sortedLanguages = Object.entries(languageMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([language, count]) => ({ name: language, count }));

    return sortedLanguages;
}

function displayData(type) {
    const container = document.getElementById("chart-container");
    container.innerHTML = "";
    let data = [];

    if (type === "population") {
        data = countries.sort((a, b) => b.population - a.population).slice(0, 10).map(c => ({ name: c.name, count: c.population }));
    } else if (type === "languages") {
        data = getMostSpokenLanguages();
    }

    console.log(data);

    const maxValue = Math.max(...data.map(d => d.count));
    console.log("Max Value:", maxValue);  

    data.forEach(item => {
        const barContainer = document.createElement("div");
        barContainer.className = "bar-container";

        const label = document.createElement("div");
        label.className = "label";
        label.textContent = item.name;

        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.width = `${(item.count / maxValue) * 100}%`;

        const value = document.createElement("div");
        value.className = "value";
        value.textContent = type === "population" ? item.count.toLocaleString() : `${item.count}`;

        barContainer.appendChild(label);
        barContainer.appendChild(bar);
        barContainer.appendChild(value);
        container.appendChild(barContainer);
    });
}

displayData('population');


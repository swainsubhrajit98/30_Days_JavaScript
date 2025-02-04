function calculateWeight() {
    let weight = document.getElementById("weight").value;
    let gravity = document.getElementById("planet").value;
    let resultDiv = document.getElementById("result");

    if (weight === "" || weight <= 0) {
        resultDiv.innerHTML = "Please enter a valid weight.";
        return;
    }

    let planetWeight = (weight / 9.81) * gravity;
    resultDiv.innerHTML = `Your weight on this planet: <strong>${planetWeight.toFixed(2)} kg</strong>`;
}
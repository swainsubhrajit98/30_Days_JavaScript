function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generateNumbers() {
    const input = document.getElementById("numberInput").value;
    const numberGrid = document.getElementById("numberGrid");
    const errorMessage = document.getElementById("errorMessage");
    
    numberGrid.innerHTML = "";
    errorMessage.textContent = "";

    const number = parseInt(input);

    if (isNaN(number) || number < 0) {
        errorMessage.textContent = "Please enter a valid positive number!";
        return;
    }

    for (let i = 0; i <= number; i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        if (isPrime(i)) {
            box.classList.add("prime");
        } else if (i % 2 === 0) {
            box.classList.add("even");
        } else {
            box.classList.add("odd");
        }

        box.textContent = i;
        numberGrid.appendChild(box);
    }
}
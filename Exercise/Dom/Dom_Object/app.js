function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const container = document.getElementById("numberGrid");

for (let i = 0; i <= 101; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    div.classList.add("box");

    if (isPrime(i)) {
        div.classList.add("prime");
    } else if (i % 2 === 0) {
        div.classList.add("even");
    } else {
        div.classList.add("odd");
    }

    container.appendChild(div);
}
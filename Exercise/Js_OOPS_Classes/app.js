// Exercises Level 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`
    );
  }

  makeSound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }

  fetchBall() {
    console.log(`${this.name} is fetching the ball!`);
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Breed: ${this.breed}`);
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, favoriteToy) {
    super(name, age, color, legs);
    this.favoriteToy = favoriteToy;
  }

  makeSound() {
    console.log("Meow! Meow!");
  }

  playWithToy() {
    console.log(`${this.name} is playing with their ${this.favoriteToy}!`);
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Favorite Toy: ${this.favoriteToy}`);
  }
}

const dog = new Dog("Buddy", 3, "brown", 4, "Golden Retriever");
dog.displayInfo();
dog.makeSound();
dog.fetchBall();

const cat = new Cat("Whiskers", 2, "black", 4, "laser pointer");
cat.displayInfo();
cat.makeSound();
cat.playWithToy();

// Excercise Level 3

class Statistics {
  constructor(data) {
    this.data = data;
  }
  count() {
    return this.data.length;
  }
  sum() {
    return this.data.reduce((acc, val) => acc + val, 0);
  }
  min() {
    return Math.min(...this.data);
  }
  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  mode() {
    const frequency = {};
    let maxFreq = 0;
    let modeVal = null;

    this.data.forEach((val) => {
      frequency[val] = (frequency[val] || 0) + 1;
      if (frequency[val] > maxFreq) {
        maxFreq = frequency[val];
        modeVal = val;
      }
    });

    return { mode: modeVal, count: maxFreq };
  }

  var() {
    const meanVal = this.mean();
    const squaredDiffs = this.data.map((val) => Math.pow(val - meanVal, 2));
    return squaredDiffs.reduce((acc, val) => acc + val, 0) / this.count();
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const frequency = {};
    this.data.forEach((val) => {
      frequency[val] = (frequency[val] || 0) + 1;
    });

    const dist = Object.entries(frequency)
      .map(([value, freq]) => [freq, Number(value)])
      .sort((a, b) => b[0] - a[0]);

    return dist;
  }

  describe() {
    return `
  Count: ${this.count()}
  Sum: ${this.sum()}
  Min: ${this.min()}
  Max: ${this.max()}
  Range: ${this.range()}
  Mean: ${this.mean()}
  Median: ${this.median()}
  Mode: (${this.mode().mode}, ${this.mode().count})
  Variance: ${this.var()}
  Standard Deviation: ${this.std()}
  Frequency Distribution: ${JSON.stringify(this.freqDist())}
      `;
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = new Statistics(ages);

console.log("Count:", statistics.count());
console.log("Sum:", statistics.sum());
console.log("Min:", statistics.min());
console.log("Max:", statistics.max());
console.log("Range:", statistics.range());
console.log("Mean:", statistics.mean());
console.log("Median:", statistics.median());
console.log("Mode:", statistics.mode());
console.log("Variance:", statistics.var());
console.log("Standard Deviation:", statistics.std());
console.log("Frequency Distribution:", statistics.freqDist());
console.log("Describe:\n", statistics.describe());

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }

  addIncome(amount, description) {
    this.incomes.push({ amount, description });
  }

  addExpense(amount, description) {
    this.expenses.push({ amount, description });
  }

  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  }

  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  accountInfo() {
    return `${this.firstname} ${
      this.lastname
    } has an account balance of $${this.accountBalance()}`;
  }

  showIncomes() {
    return this.incomes
      .map((income) => `${income.description}: $${income.amount}`)
      .join(", ");
  }

  showExpenses() {
    return this.expenses
      .map((expense) => `${expense.description}: $${expense.amount}`)
      .join(", ");
  }
}

const person = new PersonAccount("John", "Doe");

person.addIncome(5000, "Salary");
person.addIncome(1000, "Freelance");
person.addExpense(1500, "Rent");
person.addExpense(300, "Utilities");
person.addExpense(200, "Groceries");

console.log(person.accountInfo());
console.log("Total Income:", person.totalIncome());
console.log("Total Expense:", person.totalExpense());
console.log("Account Balance:", person.accountBalance());
console.log("Incomes:", person.showIncomes());
console.log("Expenses:", person.showExpenses());

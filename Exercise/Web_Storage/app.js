// Exercises: Level 1
const firstName = "John";
const lastName = "Smith";
const age = 21;
const country = "USA";
const city = "San Francisco";

localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("age", age);
localStorage.setItem("country", country);
localStorage.setItem("city", city);

console.log("Stored data in localStorage:");
console.log(localStorage.getItem("firstName"));
console.log(localStorage.getItem("lastName"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("country"));
console.log(localStorage.getItem("city"));

const user = {
  firstName: "Alok",
  lastName: "Majhee",
  age: 25,
  country: "India",
  city: "Puri",
};

localStorage.setItem("user", JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);

// Exercises: Level 2
const student = {
  firstName: "Subhrajit",
  lastName: "Swain",
  age: 26,
  skills: ["HTML", "CSS", "JavaScript", "Angular"],
  country: "India",
};

localStorage.setItem("student", JSON.stringify(student));
console.log(localStorage.getItem("student"));

const storedStudent = JSON.parse(localStorage.getItem("student"));
console.log(storedStudent);

// Exercises: Level 3
const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [
    { description: "Salary", amount: 5000 },
    { description: "Freelance", amount: 1500 },
  ],
  expenses: [
    { description: "Rent", amount: 1200 },
    { description: "Utilities", amount: 200 },
  ],

  totalIncome: function () {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },

  totalExpense: function () {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

  accountInfo: function () {
    return `${this.firstName} ${this.lastName}'s Account`;
  },

  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.accountInfo());
console.log("Total Income: $" + personAccount.totalIncome());
console.log("Total Expense: $" + personAccount.totalExpense());
console.log("Account Balance: $" + personAccount.accountBalance());

personAccount.addIncome("Gift", 300);
personAccount.addExpense("Groceries", 150);

console.log("Updated Total Income: $" + personAccount.totalIncome());
console.log("Updated Total Expense: $" + personAccount.totalExpense());
console.log("Updated Account Balance: $" + personAccount.accountBalance());

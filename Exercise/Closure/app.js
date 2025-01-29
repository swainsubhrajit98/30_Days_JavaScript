function outerFunction(outerVariable) {
  function innerFunction(innerVariable) {
    console.log("Outer variable:", outerVariable);
    console.log("Inner variable:", innerVariable);
  }
  return innerFunction;
}

const closure = outerFunction("I am the outer variable");
closure("I am the inner variable");

function personAccount(firstName, lastName) {
  let firstNameVar = firstName;
  let lastNameVar = lastName;
  let incomes = [];
  let expenses = [];

  function totalIncome() {
    return incomes.reduce((sum, income) => sum + income.amount, 0);
  }

  function totalExpense() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function accountInfo() {
    return `Account Holder: ${firstNameVar} ${lastNameVar}`;
  }

  function addIncome(amount, description) {
    incomes.push({ amount, description });
  }

  function addExpense(amount, description) {
    expenses.push({ amount, description });
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  return {
    accountInfo,
    addIncome,
    addExpense,
    totalIncome,
    totalExpense,
    accountBalance,
  };
}

const myAccount = personAccount("John", "Doe");
myAccount.addIncome(1000, "Salary");
myAccount.addIncome(200, "Freelance Work");
myAccount.addExpense(300, "Rent");
myAccount.addExpense(50, "Utilities");

console.log(myAccount.accountInfo());
console.log("Total Income:", myAccount.totalIncome());
console.log("Total Expense:", myAccount.totalExpense()); 
console.log("Account Balance:", myAccount.accountBalance());
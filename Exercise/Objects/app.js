let dog = {};
console.log(dog);

dog.name = "Buddy";
dog.legs = 4;
dog.color = "brown";
dog.age = 3;
dog.bark = function () {
  return "woof woof";
};

console.log("Name:", dog.name);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

dog.breed = "Golden Retriever";
dog.getDogInfo = function () {
  return `The dog's name is ${this.name}, it is a ${this.age}-year-old ${this.breed} with ${this.color} fur.`;
};
console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let personWithMostSkills = "";
let maxSkills = 0;

for (let user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    personWithMostSkills = user;
  }
}

console.log(
  `Person with the most skills: ${personWithMostSkills}, Skills count: ${maxSkills}`
);

let loggedInCount = 0;
let highPointsCount = 0;

for (let user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    highPointsCount++;
  }
}

console.log(`Logged in users count: ${loggedInCount}`);
console.log(`Users with 50 or more points: ${highPointsCount}`);

function findMernStackDevelopers(users) {
  let mernSkills = ["MongoDB", "Express", "React", "Node"];

  return Object.values(users).filter((user) => {
    return mernSkills.every((skill) => user.skills.includes(skill));
  });
}

let mernStackDevelopers = findMernStackDevelopers(users);
console.log(mernStackDevelopers);

let newUser = {
  email: "swainsubhrajit98@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "Angular"],
  age: 26,
  isLoggedIn: false,
  points: 78,
};

let updatedUsers = Object.assign({}, users, { Subhrajit: newUser });
console.log(updatedUsers);


let userKeys = Object.keys(users);
console.log(userKeys);

let userValues = Object.values(users);
console.log(userValues);

for (let country in countries) {
  let countryData = countries[country];
  console.log(`Country: ${countryData.name}`);
  console.log(`Capital: ${countryData.capital}`);
  console.log(`Population: ${countryData.population}`);
  console.log(`Languages: ${countryData.languages.join(', ')}`);
  console.log('--------------------');
}

const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [],
  expenses: [],

  totalIncome: function() {
    let total = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      total += this.incomes[i].amount;
    }
    return total;
  },

  totalExpense: function() {
    let total = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      total += this.expenses[i].amount;
    }
    return total;
  },

  accountInfo: function() {
    return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and total expenses of $${this.totalExpense()}.`;
  },

  addIncome: function(description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense: function(description, amount) {
    this.expenses.push({ description, amount });
  },

  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelancing", 1500);
personAccount.addExpense("Rent", 1200);
personAccount.addExpense("Utilities", 300);

console.log(personAccount.accountInfo());
console.log("Account Balance: $" + personAccount.accountBalance());

const usersData = [
  { _id: 'ab12ex', username: 'Alex', email: 'alex@alex.com', password: '123123', createdAt: '08/01/2020 9:00 AM', isLoggedIn: false },
  { _id: 'fg12cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt: '08/01/2020 9:30 AM', isLoggedIn: true },
  { _id: 'zwf8md', username: 'Brook', email: 'brook@brook.com', password: '123111', createdAt: '08/01/2020 9:45 AM', isLoggedIn: true },
  { _id: 'eefamr', username: 'Martha', email: 'martha@martha.com', password: '123222', createdAt: '08/01/2020 9:50 AM', isLoggedIn: false },
  { _id: 'ghderc', username: 'Thomas', email: 'thomas@thomas.com', password: '123333', createdAt: '08/01/2020 10:00 AM', isLoggedIn: false }
];

const products = [
  { _id: 'eedfcf', name: 'mobile phone', description: 'Huawei Honor', price: 200, ratings: [{ userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 }], likes: [] },
  { _id: 'aegfal', name: 'Laptop', description: 'MacPro: System Darwin', price: 2500, ratings: [], likes: ['fg12cy'] },
  { _id: 'hedfcg', name: 'TV', description: 'Smart TV:Procaster', price: 400, ratings: [{ userId: 'fg12cy', rate: 5 }], likes: ['fg12cy'] }
];

function signUp(username, email, password) {
  const userExists = usersData.some(user => user.email === email);

  if (userExists) {
    console.log('User already exists with this email.');
  } else {
    const newUser = {
      _id: Date.now().toString(),
      username: username,
      email: email,
      password: password,
      createdAt: new Date().toLocaleString(),
      isLoggedIn: false
    };
    usersData.push(newUser);
    console.log('User successfully signed up!');
  }
}

function signIn(email, password) {
  const user = usersData.find(user => user.email === email);

  if (!user) {
    console.log('No user found with this email.');
  } else if (user.password === password) {
    user.isLoggedIn = true;
    console.log('Successfully signed in!');
  } else {
    console.log('Incorrect password.');
  }
}

function rateProduct(userId, productId, rating) {
  const product = products.find(p => p._id === productId);

  if (!product) {
    console.log('Product not found.');
    return;
  }

  const existingRating = product.ratings.find(r => r.userId === userId);

  if (existingRating) {
    existingRating.rate = rating;
    console.log('Rating updated.');
  } else {
    product.ratings.push({ userId, rate: rating });
    console.log('Rating added.');
  }
}

function averageRating(productId) {
  const product = products.find(p => p._id === productId);

  if (!product) {
    console.log('Product not found.');
    return;
  }

  if (product.ratings.length === 0) {
    console.log('No ratings yet for this product.');
    return;
  }

  const totalRating = product.ratings.reduce((total, rating) => total + rating.rate, 0);
  const average = totalRating / product.ratings.length;

  console.log(`Average rating for product "${product.name}" is ${average.toFixed(2)}`);
}


signUp('John', 'john@example.com', '123456');
signUp('Alex', 'alex@alex.com', '123123'); 

signIn('john@example.com', '123456');
signIn('alex@alex.com', 'wrongpassword');

rateProduct('fg12cy', 'eedfcf', 4);
rateProduct('zwf8md', 'eedfcf', 5);
rateProduct('fg12cy', 'eedfcf', 3);

averageRating('eedfcf');
averageRating('aegfal');

console.log(products);

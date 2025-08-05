const fruits = ["Apple", "Banana", "Mango"];

// Destructuring values
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);  // Apple
console.log(secondFruit); // Banana


// Object destucing

const student = {
  name: "Zainab",
  age: 22,
  department: "Software Engineering"
};

// Destructuring object
const { name, age, department } = student;

console.log(name);       // Zainab
console.log(department); // Software Engineering

// spread with array

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const combined = [...arr1, ...arr2];

console.log(combined); // [1, 2, 3, 4, 5]

//spread with object

const user1 = { name: "Ali", age: 25 };
const user2 = { ...user1, city: "Lahore" };

console.log(user2); // { name: 'Ali', age: 25, city: 'Lahore' }

// rest infunctions

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumAll(1, 2));          // 3
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// rest in destrucing

const languages = ["Python", "JavaScript", "C++", "Java", "Ruby"];

const [firstLang, secondLang, ...otherLangs] = languages;

console.log(firstLang);   // Python
console.log(secondLang);  // JavaScript
console.log(otherLangs);  // ["C++", "Java", "Ruby"]

// template literals

const name = "Zainab";
const age = 22;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // Hello, my name is Zainab and I am 22 years old.


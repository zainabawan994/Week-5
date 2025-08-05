const users = [
  { name: "Ali", age: 25, city: "Lahore", salary: 35000 },
  { name: "Sara", age: 19, city: "Islamabad", salary: 20000 },
  { name: "Zain", age: 30, city: "Karachi", salary: 50000 },
  { name: "Fatima", age: 22, city: "Peshawar", salary: 28000 },
  { name: "Omar", age: 27, city: "Lahore", salary: 45000 }
];
//const userNames = users.map(user => user.name);
//console.log(userNames);

//const usertax=users.map(user=>  tax=user.salary*0.1)
//console.log(usertax);

const usertax = users.map(user => {
  return {
    ...user, // copy all existing fields
    tax: user.salary * 0.1 // add new field
  };
});

//console.log(usertax);

//users.map(user => {
    //console.log(`${user.name} (${user.age} years old) lives in ${user.city} and earns ${user.salary} with a tax of ${user.salary * 0.1}.`);
//})

///users.filter(user=> user.city === "Lahore")

// ...existing code...
const totalSalary = users.reduce((acc, user) => acc + user.salary, 0);
console.log(totalSalary);
// ...existing code...

const ageaverage=users.reduce((acc,user,index)=>acc+user.age,0)/users.length;

users.reduce((acc,user) => {
  return index===0 ? user.age : acc+","+user.age;
},"");
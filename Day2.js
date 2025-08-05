const login={
    Name : "Hina",
    username:"hina123",
    password:"Hina@1234",
    greet:function(){
        console.log("Hello  " + this.Name)
    }
};

console.log(Object.keys(login));
console.log(Object.values(login));
console.log(Object.entries(login));
console.log(Object.hasOwnProperty("age"));
console.log("age" in login);
for(let key in login){
    console.log(key +" :"+ login[key]);
}

const o1={
    a:1,
    b:2
};
const o2={
    c:3,
    d:4
};
const o3=Object.assign({},o1,o2);
console.log(o3);

const{Name:hi, username, password}=login;
console.log(hi, username, password);


const user={
    name:"Zainab",
    age:20,
    email:"zainabawan@gmail.com",
    info(){
        console.log(`Name :${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}
user.info();

function countProperties(obj){
    console.log(`tOTAL pROPERITIES : ${Object.keys(obj).length}`);
}
countProperties(user);

let cart = {
  apple: 2,
  banana: 3,
  orange: 1,
 totalitems:function(){
    console.log(Object.values(cart).length)
 }
};
cart.totalitems();

let sentences="Hello  i am new word here and there"
sentences.trim().replace(/\s+/g, " ")

// let user = {
//     name: "John",
//     age: 25,
//     parent: {
//         fatherName: "Jobs",
//         motherName: "Amelia"
//     }
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user.parent.fatherName)
// console.log(user.parent.motherName)

// let user = new Object();
// user.name = "John";
// user.age = 30;
// console.log(user)

// function myFruit(name, price) {
//     this.name = name;
//     this.price = price;
// }
// let myObj = new myFruit("Apple", 500);
// console.log(myObj);

// let user = {
//   name: "John",
//   age: 25,
//   parent: {
//     fatherName: "Jobs",
//     motherName: "Amelia",
//   },
// };
// delete user.age;
// user.name = "Doe";
// console.log(user)

// function makeUser(name, age) {
//     return{
//         name,
//         age
//     }
// }
// console.log(makeUser("Doe", 29))

// let makeUser = (name, age) => name + " " + age

// console.log(makeUser("Doe", 29))

// let user = {
//   name: "John",
//   age: 25,
// };
// let admin = user;
// admin.name = "Doe";
// console.log(admin);
// console.log(user)

// let user = {
//     name: "John",
//     age: 25,
//   };
//   let clone = {};
 
//   for(let i in user){
//       clone[i] = user[i];
//   }
//   user.name = "Jobs";
//   console.log(clone);
//   console.log(user)

let a = {};
let b = a;
console.log(a == b);
console.log(a === b);



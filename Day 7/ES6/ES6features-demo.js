// Let keyword

// let x = 10;
// if (x == 10) {
//   let x = 20;
//   console.log(x);
// }
// console.log(x);

// const person = { age: 30 };

// person.age = 40;
// console.log(person.age);

// Freezing the variables/objects
// const company = Object.freeze(
//     {
//         name:'abc',
//         address:{
//             city:'pune'
//         },
//         email:'name@man.com'
//     }
// )

// company.name='werty'
// company.address.city='aurangabad'
// company.email='new.man.com'
// company.address={
//     lane:'xcvbn'
// }
// company.address.town='hello'
// console.log(company.name, company.address.city, company.address, company.email)

// Backticks
// function adduserinfo(name, email){
//     console.log(name + ' ' + email)
//     console.log(`${name}  ${email}`)
// }

// adduserinfo('manoj', 'email@test.com')
// let data=`my name is manoj more`
// console.log(data)

// Default Values

// function hello(message='hello') {
//     console.log(message)
// }

// hello('hi')
// hello()

// Rest parameters
// function sum(...args) {
//   let total = 0;
//   for (const a of args) {
//     total += a;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Spread operators
// const odd=[1,2,3,4,5]

// const combined=[6,7, ...odd]
// console.log(odd, combined)

// const num=[1,2,3,4]
// const newnum=[5,6,7,8]
// const finnum=[...num, ...newnum]

// console.log(finnum)

// simple task
// const teamName = "tooling";
// const people = [
//   { name: "Jennie", role: "senior" },
//   { name: "Ronald", role: "junior" },
//   { name: "Martin", role: "senior" },
//   { name: "Anneli", role: "junior" },
// ];

// let message={teamname:teamName, people: [...people]}
// console.log(message);



// Object Destructuring

function getData() {
  return [70, 80, 90,2,4,5,6,7,7,6];
}

let data = getData();
console.log(data[0]);
console.log(data[1]);

let [x, y, z, ...args] = getData();

console.log(x);




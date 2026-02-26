// object destructuring

// rule1: left and right both side er nam same thakte hobe, jodi different nam dite hoy then use colon
const name = 'abc';
// const {name, age, salary} = {name:'Sikder', age: 18, salary: 500};
const {name:firstName, age, salary, designation = ''} = {name:'Sikder', age: 18, salary: 500}; 
//object er moddhe nai erokom item o neya jabe but default value dite hobe otherwise undefined ashbe
console.log(firstName);


// array destructuring
const [first, second] = [1,2,3,4];
console.log(first, second);

const numbers = [10, 20];
const [height, weight] = numbers;
console.log(height, weight);
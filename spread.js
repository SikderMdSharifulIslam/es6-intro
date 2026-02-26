const max = Math.max(3, 5, 1, 8, 2, 58, 1);
console.log(max);

const numbers = [3, 5, 1, 8, 2, 58, 1];
const max2 = Math.max(numbers); //output: NaN cz array er upor eta kaj korena
console.log(max2);

// array theke max ber korte hole spread operator use korte hobe
console.log(...numbers); //output array ashbe na akn r, eta numbers show korbe just
console.log(Math.max(...numbers)); //output: 58 dibe

const params = [45, 12, 3];
function sum(x, y, z){
    return x+y+z;
}

const result = sum(params); //evabe dile akta parameter pabe just baki gula undefined thakbe cz array eta
const result1 = sum(params[0], params[1], params[2]); //eta valid 
const result2 = sum(...params); //evabe dile akbare deya jabe
console.log(result2); //60 ashbe

// 1 ta array theke arekta array te value assign kora:
const arr1 = [1,2,3];
const arr2 = arr1; //ekhane value jabe but ref niye jabe. so arr2 change korle arr1 o change hobe
const arr3 = [...arr1]; //evabe dile arr1 er value gulo arr3 te assign hobe without ref
const arr4 = [11, ...arr1, 55, 56, 99]; //evabeo kora jay
arr3.push(4);
console.log(arr1);
console.log(arr3);

// object er khetre o dekhbo
const person = {name:'alice', age:30};
// const person2 = person; //eta rakhle same ref thake
const person2 = {...person, designation: 'developer'}; //eta rakhle same ref thakena
person.salary = 40000;

console.log(person);
console.log(person2);
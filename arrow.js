// function declaration
add(10,12); //valid
function add(num1, num2){ //eta upore niche sob jaygay call kora jabe
    return num1+num2;
}
add(10,12); //valid

// function expression
add2(10,12); //invalid
const add2 = function (num1, num2){ //eta shudhu niche call kora jabe, upore call korle error dibe
    return num1+num2;
}
add2(10,12); //valid

// arrow function
const add3 = (num1, num2) => num1 + num2; 
const multiply = x => x*2; //single parameter e (x) eta dileo hoy na dileo hoy
const getPi = () => 3.1416;

// multi-line arrow function
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const isEven = num => num%2===0;

// annonymous function hishebe use
document.getElementById('btn').addEventListener('click', () => {});
document.getElementById('btn').addEventListener('click', (evnt) => {});
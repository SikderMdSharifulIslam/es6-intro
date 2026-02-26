// for of loop uses on Array

const numbers = [1,2,3,4,5];
for(num of numbers){
    console.log(num);
}


// for in loop uses on object

const employee = {
    name: 'Sikder',
    1: 'desk one',
    'home-address': '123 Main St',
    salary: 50000,
    position: 'Software Engineer'
};

for(key in employee){
    const value = employee[key];
    console.log(key, value);
}

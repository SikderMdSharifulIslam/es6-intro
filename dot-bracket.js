const employee = {
    name: 'Sikder',
    1: 'desk one',
    'home-address': '123 Main St',
    salary: 50000,
    position: 'Software Engineer'
};

// dot notation
console.log(employee.name); //valid
//console.log(employee.1); //invalid
//console.log(employee.home-address); //invalid


// bracket notation
console.log(employee['name']); //valid
console.log(employee[1]); //valid
console.log(employee['home-address']); //valid

const salary = employee.salary;
const salary2 = employee['salary'];
const key = 'position';

console.log(salary);
console.log(salary2);
console.log(employee[key]);

